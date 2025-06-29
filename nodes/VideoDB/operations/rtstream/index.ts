import parameters from './parameters';

const operations = [
	// start
	{
		key: 'startRTStream',
		endpoint: (params: any) => `/rtstream/${params.rtstream_id}/status`,
		method: 'PATCH',
		details: {
			name: 'Start RTStream',
			value: 'startRTStream',
			description: 'Connect to the rtstream (status: connected)',
			action: 'Start RTStream',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('startRTStream'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({ action: 'start' }),
	},
	// stop
	{
		key: 'stopRTStream',
		endpoint: (params: any) => `/rtstream/${params.rtstream_id}/status`,
		method: 'PATCH',
		details: {
			name: 'Stop RTStream',
			value: 'stopRTStream',
			description: 'Disconnect from the rtstream (status: stopped)',
			action: 'Stop RTStream',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('stopRTStream'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({ action: 'stop' }),
	},
	// generate_stream
	{
		key: 'generateRTStream',
		endpoint: (params: any) => `/rtstream/${params.rtstream_id}/stream`,
		method: 'GET',
		details: {
			name: 'Generate RTStream',
			value: 'generateRTStream',
			description: 'Generate a playable stream from the rtstream for a given time range',
			action: 'Generate RTStream',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('generateRTStream'),
		),
		buildQuery: (params: any) => ({ start: params.start, end: params.end }),
		buildBody: () => ({}),
	},
	// index_scenes
	{
		key: 'indexScenes',
		endpoint: (params: any) => `/rtstream/${params.rtstream_id}/index/scene`,
		method: 'POST',
		details: {
			name: 'Index Scenes',
			value: 'indexScenes',
			description: 'Index scenes from the rtstream',
			action: 'Index Scenes',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('indexScenes'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			extraction_type: params.extraction_type,
			extraction_config: {
				frame_count: params.frame_count !== undefined ? Number(params.frame_count) : 2,
				time: params.time !== undefined ? Number(params.time) : 5,
			},
			prompt: params.prompt,
			model_name: params.model_name,
			model_config: params.model_config,
			name: params.name,
		}),
	},
	// list_scene_indexes
	{
		key: 'listSceneIndexes',
		endpoint: (params: any) => `/rtstream/${params.rtstream_id}/index/scene`,
		method: 'GET',
		details: {
			name: 'List Scene Indexes',
			value: 'listSceneIndexes',
			description: 'List all scene indexes for the rtstream',
			action: 'List Scene Indexes',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('listSceneIndexes'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	// get_scene_index
	{
		key: 'getSceneIndex',
		endpoint: (params: any) => `/rtstream/${params.rtstream_id}/index/${params.rtstream_index_id}`,
		method: 'GET',
		details: {
			name: 'Get Scene Index',
			value: 'getSceneIndex',
			description: 'Retrieve a specific scene index by its ID',
			action: 'Get Scene Index',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('getSceneIndex'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	// get_scenes
	{
		key: 'getScenes',
		endpoint: (params: any) =>
			`/rtstream/${params.rtstream_id}/index/scene/${params.rtstream_index_id}`,
		method: 'GET',
		details: {
			name: 'Get Scenes',
			value: 'getScenes',
			description: 'Retrieve scenes from a specific rtstream scene index',
			action: 'Get Scenes',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('getScenes')),
		buildQuery: (params: any) => ({
			page: params.page,
			page_size: params.page_size,
			start: params.start,
			end: params.end,
		}),
		buildBody: () => ({}),
	},
	// startSceneIndex
	{
		key: 'startSceneIndex',
		endpoint: (params: any) =>
			`/rtstream/${params.rtstream_id}/index/scene/${params.rtstream_index_id}/status`,
		method: 'PATCH',
		details: {
			name: 'Start Scene Index',
			value: 'startSceneIndex',
			description: 'Start the scene index (status: connected)',
			action: 'Start Scene Index',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('startSceneIndex'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({ action: 'start' }),
	},
	// stopSceneIndex
	{
		key: 'stopSceneIndex',
		endpoint: (params: any) =>
			`/rtstream/${params.rtstream_id}/index/scene/${params.rtstream_index_id}/status`,
		method: 'PATCH',
		details: {
			name: 'Stop Scene Index',
			value: 'stopSceneIndex',
			description: 'Stop the scene index (status: stopped)',
			action: 'Stop Scene Index',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('stopSceneIndex'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({ action: 'stop' }),
	},
	// create_alert
	{
		key: 'createAlert',
		endpoint: (params: any) =>
			`/rtstream/${params.rtstream_id}/index/${params.rtstream_index_id}/alert`,
		method: 'POST',
		details: {
			name: 'Create Alert',
			value: 'createAlert',
			description: 'Create an alert for a specific event within the rtstream scene index',
			action: 'Create Alert',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('createAlert'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			event_id: params.event_id,
			callback_url: params.callback_url,
		}),
	},
	// list_alerts
	{
		key: 'listAlerts',
		endpoint: (params: any) =>
			`/rtstream/${params.rtstream_id}/index/${params.rtstream_index_id}/alert`,
		method: 'GET',
		details: {
			name: 'List Alerts',
			value: 'listAlerts',
			description: 'List all alerts for the rtstream scene index',
			action: 'List Alerts',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('listAlerts')),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	// enable_alert
	{
		key: 'enableAlert',
		endpoint: (params: any) =>
			`/rtstream/${params.rtstream_id}/index/${params.rtstream_index_id}/alert/${params.alert_id}/status`,
		method: 'PATCH',
		details: {
			name: 'Enable Alert',
			value: 'enableAlert',
			description: 'Enable a specific alert',
			action: 'Enable Alert',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('enableAlert'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({ action: 'enable' }),
	},
	// disable_alert
	{
		key: 'disableAlert',
		endpoint: (params: any) =>
			`/rtstream/${params.rtstream_id}/index/${params.rtstream_index_id}/alert/${params.alert_id}/status`,
		method: 'PATCH',
		details: {
			name: 'Disable Alert',
			value: 'disableAlert',
			description: 'Disable a specific alert',
			action: 'Disable Alert',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('disableAlert'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({ action: 'disable' }),
	},
];

export default operations;
