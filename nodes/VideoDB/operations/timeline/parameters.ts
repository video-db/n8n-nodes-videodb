import type { INodeProperties } from 'n8n-workflow';

const parameters: INodeProperties[] = [];

parameters.push({
	displayName: 'Inline Videos',
	name: 'inline_videos',
	type: 'fixedCollection',
	typeOptions: { multipleValues: true },
	default: {},
	displayOptions: { show: { operation: ['compileTimeline'] } },
	options: [
		{
			name: 'video',
			displayName: 'Add Inline Video',
			values: [
				{
					displayName: 'Video Asset ID',
					name: 'asset_id',
					type: 'string',
					required: true,
					default: '',
					description: 'E.g. m-12345.',
				},
				{
					displayName: 'Start (S)',
					name: 'start',
					type: 'number',
					default: 0,
				},
				{
					displayName: 'End (S)',
					name: 'end',
					type: 'number',
					default: 0,
					description: 'Leave 0/blank to use full length',
				},
			],
		},
	],
});

//
// Overlay Images
//
parameters.push({
	displayName: 'Overlay Images',
	name: 'overlay_images',
	type: 'fixedCollection',
	typeOptions: { multipleValues: true },
	default: {},
	displayOptions: { show: { operation: ['compileTimeline'] } },
	options: [
		{
			name: 'image',
			displayName: 'Add Overlay Image',
			values: [
				{
					displayName: 'Duration (S)',
					name: 'duration',
					type: 'number',
					default: 0,
				},
				{
					displayName: 'Height',
					name: 'height',
					type: 'string',
					default: '100',
					description: 'Px or	%',
				},
				{
					displayName: 'Image Asset ID',
					name: 'asset_id',
					type: 'string',
					required: true,
					default: '',
					description: 'E.g. img-12345.',
				},
				{
					displayName: 'Overlay Start (S)',
					name: 'overlay_start',
					type: 'number',
					required: true,
					default: 0,
				},
				{
					displayName: 'Width',
					name: 'width',
					type: 'string',
					default: '100',
					description: "Px or	% (e.g. '400', '50%')",
				},
				{
					displayName: 'X',
					name: 'x',
					type: 'string',
					default: '80',
				},
				{
					displayName: 'Y',
					name: 'y',
					type: 'string',
					default: '20',
				},
			],
		},
	],
});

//
// Overlay Audio
//
parameters.push({
	displayName: 'Overlay Audio',
	name: 'overlay_audios',
	type: 'fixedCollection',
	typeOptions: { multipleValues: true },
	default: {},
	displayOptions: { show: { operation: ['compileTimeline'] } },
	options: [
		{
			name: 'audio',
			displayName: 'Add Overlay Audio',
			values: [
				{
					displayName: 'Audio Asset ID',
					name: 'asset_id',
					type: 'string',
					required: true,
					default: '',
					description: 'E.g. a-12345.',
				},
				{
					displayName: 'Audio End (S)',
					name: 'end',
					type: 'number',
					default: 0,
				},
				{
					displayName: 'Audio Start (S)',
					name: 'start',
					type: 'number',
					default: 0,
				},
				{
					displayName: 'Disable Other Tracks',
					name: 'disable_other_tracks',
					type: 'boolean',
					default: true,
					description: 'Whether to mute other audio tracks while this plays',
				},
				{
					displayName: 'Fade In (S)',
					name: 'fade_in_duration',
					type: 'number',
					default: 0,
					description: 'Max 5s',
				},
				{
					displayName: 'Fade Out (S)',
					name: 'fade_out_duration',
					type: 'number',
					default: 0,
					description: 'Max 5s',
				},
				{
					displayName: 'Overlay Start (S)',
					name: 'overlay_start',
					type: 'number',
					required: true,
					default: 0,
				},
			],
		},
	],
});

//
// Overlay Text
//
parameters.push({
	displayName: 'Overlay Text',
	name: 'overlay_texts',
	type: 'fixedCollection',
	typeOptions: { multipleValues: true },
	default: {},
	displayOptions: { show: { operation: ['compileTimeline'] } },
	options: [
		{
			name: 'text',
			displayName: 'Add Overlay Text',
			values: [
				{
					displayName: 'Duration (S)',
					name: 'duration',
					type: 'number',
					default: 0,
				},
				{
					displayName: 'Overlay Start (S)',
					name: 'overlay_start',
					type: 'number',
					required: true,
					default: 0,
				},
				{
					displayName: 'Style Overrides',
					name: 'style',
					type: 'fixedCollection',
					default: {},
					options: [
						{
							name: 'style',
							displayName: 'Add Style',
							values: [
								{
									displayName: 'Alpha',
									name: 'alpha',
									type: 'number',
									default: 1,
								},
								{
									displayName: 'Basetime',
									name: 'basetime',
									type: 'number',
									default: 0,
								},
								{
									displayName: 'bordercolor',
									name: 'bordercolor',
									type: 'color',
									default: 'black',
								},
								{
									displayName: 'Borderw',
									name: 'borderw',
									type: 'number',
									default: 0,
								},
								{
									displayName: 'Box',
									name: 'box',
									type: 'boolean',
									default: true,
								},
								{
									displayName: 'Boxborderw',
									name: 'boxborderw',
									type: 'string',
									default: '10',
								},
								{
									displayName: 'boxcolor',
									name: 'boxcolor',
									type: 'color',
									default: 'white',
								},
								{
									displayName: 'Boxh',
									name: 'boxh',
									type: 'number',
									default: 0,
								},
								{
									displayName: 'Boxw',
									name: 'boxw',
									type: 'number',
									default: 0,
								},
								{
									displayName: 'Expansion',
									name: 'expansion',
									type: 'string',
									default: 'normal',
								},
								{
									displayName: 'Fix_bounds',
									name: 'fix_bounds',
									type: 'boolean',
									default: false,
								},
								{
									displayName: 'Font',
									name: 'font',
									type: 'string',
									default: 'Sans',
								},
								{
									displayName: 'fontcolor',
									name: 'fontcolor',
									type: 'color',
									default: 'black',
								},
								{
									displayName: 'Fontcolor_expr',
									name: 'fontcolor_expr',
									type: 'color',
									default: '',
								},
								{
									displayName: 'Fontsize',
									name: 'fontsize',
									type: 'number',
									default: 24,
								},
								{
									displayName: 'Line_spacing',
									name: 'line_spacing',
									type: 'number',
									default: 0,
								},
								{
									displayName: 'shadowcolor',
									name: 'shadowcolor',
									type: 'color',
									default: 'black',
								},
								{
									displayName: 'Shadowx',
									name: 'shadowx',
									type: 'number',
									default: 0,
								},
								{
									displayName: 'Shadowy',
									name: 'shadowy',
									type: 'number',
									default: 0,
								},
								{
									displayName: 'Tabsize',
									name: 'tabsize',
									type: 'number',
									default: 4,
								},
								{
									displayName: 'Text_align',
									name: 'text_align',
									type: 'string',
									default: 'T',
								},
								{
									displayName: 'Text_shaping',
									name: 'text_shaping',
									type: 'boolean',
									default: true,
								},
								{
									displayName: 'X',
									name: 'x',
									type: 'string',
									default: '(main_w-text_w)/2',
									description: 'Expression or number',
								},
								{
									displayName: 'Y',
									name: 'y',
									type: 'string',
									default: '(main_h-text_h)/2',
									description: 'Expression or number',
								},
								{
									displayName: 'Y_align',
									name: 'y_align',
									type: 'string',
									default: 'text',
								},
							],
						},
					],
				},
				{
					displayName: 'Text',
					name: 'text',
					type: 'string',
					required: true,
					default: '',
				},
				{
					displayName: 'Text Asset ID (Optional)',
					name: 'asset_id',
					type: 'string',
					default: '',
					description: 'If blank, a txt-UUID will be generated',
				},
			],
		},
	],
});

export default parameters;
