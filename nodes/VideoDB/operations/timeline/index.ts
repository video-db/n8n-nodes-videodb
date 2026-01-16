import parameters from './parameters';

const operations = [
	{
		key: 'compileTimeline',
		endpoint: '/timeline',
		method: 'POST',
		details: {
			name: "Compile Timeline (VideoDB's Video Editor)",
			value: 'compileTimeline',
			description:
				"VideoDB's Video Editor - Build a multi-track timeline (video + overlays) and get a stream/player URL",
			action: "Compile Timeline (VideoDB's Video Editor)",
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('compileTimeline'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => {
			// helpers
			const toNum = (v: any) => (v === '' || v === null || v === undefined ? undefined : Number(v));
			const add = (obj: any, key: string, v: any) => {
				if (v === '' || v === null || v === undefined) return;
				obj[key] = v;
			};
			const uuid = () =>
				'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
					const r = (Math.random() * 16) | 0;
					const v = c === 'x' ? r : (r & 0x3) | 0x8;
					return v.toString(16);
				});

			const timeline: any[] = [];

			// Inline videos
			const inline = params.inline_videos?.video ?? [];
			for (const v of inline) {
				const video: any = { asset_id: v.asset_id };
				add(video, 'start', toNum(v.start));
				add(video, 'end', toNum(v.end));
				timeline.push(video);
			}

			// Overlay images
			const images = params.overlay_images?.image ?? [];
			for (const img of images) {
				const asset: any = { asset_id: img.asset_id };
				add(asset, 'width', img.width);
				add(asset, 'height', img.height);
				add(asset, 'x', img.x);
				add(asset, 'y', img.y);
				add(asset, 'duration', toNum(img.duration));

				timeline.push({
					overlay_start: toNum(img.overlay_start) ?? 0,
					...asset,
				});
			}

			// Overlay audio
			const audios = params.overlay_audios?.audio ?? [];
			for (const a of audios) {
				const asset: any = { asset_id: a.asset_id };
				add(asset, 'start', toNum(a.start));
				add(asset, 'end', toNum(a.end));
				add(asset, 'disable_other_tracks', a.disable_other_tracks);
				add(asset, 'fade_in_duration', toNum(a.fade_in_duration));
				add(asset, 'fade_out_duration', toNum(a.fade_out_duration));

				timeline.push({
					overlay_start: toNum(a.overlay_start) ?? 0,
					...asset,
				});
			}

			// Overlay text
			const texts = params.overlay_texts?.text ?? [];
			for (const t of texts) {
				const asset: any = {
					text: t.text,
					asset_id: t.asset_id || `txt-${uuid()}`,
				};
				add(asset, 'duration', toNum(t.duration));

				// Style overrides only if user added them
				const styleData = t.style?.style;
				const styleGroup = Array.isArray(styleData) ? styleData[0] || {} : styleData || {};
				const styleKeys = Object.keys(styleGroup).filter(
					(k) => styleGroup[k] !== '' && styleGroup[k] !== undefined && styleGroup[k] !== null,
				);
				if (styleKeys.length) {
					asset.style = {};
					for (const k of styleKeys) asset.style[k] = styleGroup[k];
				}

				timeline.push({
					overlay_start: toNum(t.overlay_start) ?? 0,
					...asset,
				});
			}

			return {
				request_type: 'compile',
				timeline,
			};
		},
	},
];

export default operations;
