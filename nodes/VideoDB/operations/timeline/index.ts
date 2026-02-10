import parameters from './parameters';

const operations = [
	{
		key: 'compileTimeline',
		endpoint: '/editor',
		method: 'POST',
		details: {
			name: "Compile Timeline (VideoDB Editor API)",
			value: 'compileTimeline',
			description:
				"VideoDB Editor API - Build a multi-track timeline with video, audio, images, text, and captions",
			action: "Compile Timeline (VideoDB Editor API)",
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('compileTimeline'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => {
			// Helpers
			const toNum = (v: any) => (v === '' || v === null || v === undefined ? undefined : Number(v));
			const parseJson = (v: any) => {
				if (v === undefined || v === null || v === '') return undefined;
				if (typeof v === 'string') {
					try {
						return JSON.parse(v);
					} catch {
						return v;
					}
				}
				return v;
			};

			// Build VideoAsset
			const buildVideoAsset = (c: any) => {
				const asset: any = {
					type: 'video',
					id: c.video_asset_id,
				};
				if (toNum(c.video_start)) asset.start = toNum(c.video_start);
				if (toNum(c.video_end)) asset.end = toNum(c.video_end);
				return asset;
			};

			// Build AudioAsset
			const buildAudioAsset = (c: any) => {
				const asset: any = {
					type: 'audio',
					id: c.audio_asset_id,
				};
				if (toNum(c.audio_start)) asset.start = toNum(c.audio_start);
				if (toNum(c.audio_end)) asset.end = toNum(c.audio_end);
				if (c.audio_disable_other_tracks) asset.disable_other_tracks = c.audio_disable_other_tracks;
				if (toNum(c.audio_fade_in)) asset.fade_in_duration = toNum(c.audio_fade_in);
				if (toNum(c.audio_fade_out)) asset.fade_out_duration = toNum(c.audio_fade_out);
				return asset;
			};

			// Build ImageAsset
			const buildImageAsset = (c: any) => {
				const asset: any = {
					type: 'image',
					id: c.image_asset_id,
				};
				if (c.image_width) asset.width = c.image_width;
				if (c.image_height) asset.height = c.image_height;
				if (c.image_x) asset.x = c.image_x;
				if (c.image_y) asset.y = c.image_y;
				return asset;
			};

			// Build TextAsset
			const buildTextAsset = (c: any) => {
				const asset: any = {
					type: 'text',
					text: c.text_content,
				};
				const style = parseJson(c.text_style);
				if (style && Object.keys(style).length > 0) {
					asset.style = style;
				}
				return asset;
			};

			// Build CaptionAsset - exactly like SDK's CaptionAsset.to_json()
			const buildCaptionAsset = (c: any) => {
				// Parse src - can be "auto" or transcript array
				let src: any = 'auto';
				const parsedSrc = parseJson(c.caption_src);
				if (parsedSrc !== undefined) {
					src = parsedSrc;
				}

				const asset: any = {
					type: 'caption',
					src: src,
					// Font - exactly like SDK's FontStyling.to_json()
					font: {
						font_name: c.caption_font_name || 'Clear Sans',
						font_size: toNum(c.caption_font_size) ?? 30,
						bold: c.caption_font_bold ?? false,
						italic: c.caption_font_italic ?? false,
						underline: false,
						strikeout: false,
						scale_x: 100,
						scale_y: 100,
						spacing: 0,
						angle: 0,
					},
					// Colors
					primary_color: c.caption_primary_color || '&H00FFFFFF',
					secondary_color: c.caption_secondary_color || '&H000000FF',
					back_color: c.caption_back_color || '&H00000000',
					// Border - exactly like SDK's BorderAndShadow.to_json()
					border: {
						style: c.caption_border_style || 'outline_and_shadow',
						outline: toNum(c.caption_outline) ?? 1,
						outline_color: c.caption_outline_color || '&H00000000',
						shadow: toNum(c.caption_shadow) ?? 0,
					},
					// Position - exactly like SDK's Positioning.to_json()
					position: {
						alignment: c.caption_alignment || 'bottom_center',
						margin_l: toNum(c.caption_margin_l) ?? 30,
						margin_r: toNum(c.caption_margin_r) ?? 30,
						margin_v: toNum(c.caption_margin_v) ?? 30,
					},
				};

				// Animation (optional)
				if (c.caption_animation) {
					asset.animation = c.caption_animation;
				}

				return asset;
			};

			// Build Clip - exactly like SDK's Clip.to_json()
			const buildClip = (c: any) => {
				let asset: any;

				switch (c.asset_type) {
					case 'video':
						asset = buildVideoAsset(c);
						break;
					case 'audio':
						asset = buildAudioAsset(c);
						break;
					case 'image':
						asset = buildImageAsset(c);
						break;
					case 'text':
						asset = buildTextAsset(c);
						break;
					case 'caption':
						asset = buildCaptionAsset(c);
						break;
					default:
						throw new Error(`Unknown asset type: ${c.asset_type}`);
				}

				const clip: any = {
					asset: asset,
					duration: toNum(c.duration) || 0,
					scale: toNum(c.clip_scale) ?? 1,
					opacity: toNum(c.clip_opacity) ?? 1,
					fit: c.clip_fit || 'crop',
					position: c.clip_position || 'center',
					offset: {
						x: toNum(c.clip_offset_x) ?? 0,
						y: toNum(c.clip_offset_y) ?? 0,
					},
					z_index: toNum(c.clip_z_index) ?? 0,
				};

				// Optional effect
				if (c.clip_effect) {
					clip.effect = c.clip_effect;
				}

				// Optional filter
				if (c.clip_filter) {
					clip.filter = c.clip_filter;
				}

				// Optional transition
				if (c.transition_type) {
					clip.transition = {
						type: c.transition_type,
						duration: toNum(c.transition_duration) ?? 0.5,
					};
				}

				return clip;
			};

			// Build TrackItem - exactly like SDK's TrackItem.to_json()
			const buildTrackItem = (c: any) => {
				return {
					start: toNum(c.start) ?? 0,
					clip: buildClip(c),
				};
			};

			// Build tracks array
			const tracksData = params.tracks?.track ?? [];
			const tracks: any[] = [];

			for (const track of tracksData) {
				const clipsData = track.clips?.clip ?? [];
				const trackItems: any[] = [];

				for (const clipData of clipsData) {
					trackItems.push(buildTrackItem(clipData));
				}

				// Build Track - exactly like SDK's Track.to_json()
				tracks.push({
					clips: trackItems,
					z_index: toNum(track.z_index) ?? 0,
				});
			}

			// Build Timeline - exactly like SDK's Timeline.to_json()
			return {
				timeline: {
					background: params.background || '#000000',
					resolution: params.resolution || '1920x1080',
					tracks: tracks,
				},
			};
		},
	},
];

export default operations;
