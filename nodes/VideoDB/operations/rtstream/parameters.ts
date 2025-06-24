import type { INodeProperties } from 'n8n-workflow';

const parameters: INodeProperties[] = [];

// Shared properties
const collectionIdProperty: INodeProperties = {
	displayName: 'Collection ID',
	name: 'collection_id',
	type: 'string',
	required: true,
	default: '',
};
const rtstreamIdProperty: INodeProperties = {
	displayName: 'RTStream ID',
	name: 'rtstream_id',
	type: 'string',
	required: true,
	default: '',
};
const rtstreamIndexIdProperty: INodeProperties = {
	displayName: 'RTStream Index ID',
	name: 'rtstream_index_id',
	type: 'string',
	required: true,
	default: '',
};
const alertIdProperty: INodeProperties = {
	displayName: 'Alert ID',
	name: 'alert_id',
	type: 'string',
	required: true,
	default: '',
};

// connect_rtstream
parameters.push(
	{
		...collectionIdProperty,
		description: 'The ID of the collection to which the rtstream will belong',
		displayOptions: { show: { operation: ['connectRTStream'] } },
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		description: 'The URL of the rtstream source',
		displayOptions: { show: { operation: ['connectRTStream'] } },
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		description: 'The name for the rtstream',
		displayOptions: { show: { operation: ['connectRTStream'] } },
	},
	{
		displayName: 'Sample Rate',
		name: 'sample_rate',
		type: 'number',
		default: 0,
		description: 'The sample rate of the rtstream',
		displayOptions: { show: { operation: ['connectRTStream'] } },
	},
);

// get_rtstream, start, stop, generate_stream, index_scenes, list_scene_indexes, get_scene_index, get_scenes, startSceneIndex, stopSceneIndex, create_alert, list_alerts, enable_alert, disable_alert
parameters.push({
	...rtstreamIdProperty,
	description: 'The ID of the RTStream',
	displayOptions: {
		show: {
			operation: [
				'getRTStream',
				'startRTStream',
				'stopRTStream',
				'generateRTStream',
				'indexScenes',
				'listSceneIndexes',
				'getSceneIndex',
				'getScenes',
				'startSceneIndex',
				'stopSceneIndex',
				'createAlert',
				'listAlerts',
				'enableAlert',
				'disableAlert',
			],
		},
	},
});

// generate_stream
parameters.push(
	{
		displayName: 'Start',
		name: 'start',
		type: 'number',
		required: true,
		default: 0,
		description: 'Start time of the stream (Unix timestamp)',
		displayOptions: { show: { operation: ['generateRTStream'] } },
	},
	{
		displayName: 'End',
		name: 'end',
		type: 'number',
		required: true,
		default: 0,
		description: 'End time of the stream (Unix timestamp)',
		displayOptions: { show: { operation: ['generateRTStream'] } },
	},
);

// index_scenes
parameters.push(
	{
		displayName: 'Extraction Type',
		name: 'extraction_type',
		type: 'string',
		default: 'time',
		description: 'Type of extraction (e.g., time)',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		displayName: 'Extraction Config (JSON)',
		name: 'extraction_config',
		type: 'json',
		default: '',
		description: 'Configuration for the scene extraction',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		default: '',
		description: 'A prompt to guide the scene description',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		displayName: 'Model Name',
		name: 'model_name',
		type: 'string',
		default: '',
		description: 'The name of the model to use for indexing',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		displayName: 'Model Config (JSON)',
		name: 'model_config',
		type: 'json',
		default: '',
		description: 'Configuration for the model',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: 'The name for the scene index',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
);

// get_scene_index, get_scenes, startSceneIndex, stopSceneIndex, create_alert, list_alerts, enable_alert, disable_alert
parameters.push({
	...rtstreamIndexIdProperty,
	description: 'The ID of the RTStream Scene Index',
	displayOptions: {
		show: {
			operation: [
				'getSceneIndex',
				'getScenes',
				'startSceneIndex',
				'stopSceneIndex',
				'createAlert',
				'listAlerts',
				'enableAlert',
				'disableAlert',
			],
		},
	},
});

// get_scenes
parameters.push(
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		description: 'Page number for pagination',
		displayOptions: { show: { operation: ['getScenes'] } },
	},
	{
		displayName: 'Page Size',
		name: 'page_size',
		type: 'number',
		default: 100,
		description: 'Number of scenes per page',
		displayOptions: { show: { operation: ['getScenes'] } },
	},
	{
		displayName: 'Start',
		name: 'start',
		type: 'number',
		default: 0,
		description: 'Start time to filter scenes',
		displayOptions: { show: { operation: ['getScenes'] } },
	},
	{
		displayName: 'End',
		name: 'end',
		type: 'number',
		default: 0,
		description: 'End time to filter scenes',
		displayOptions: { show: { operation: ['getScenes'] } },
	},
);

// create_alert
parameters.push(
	{
		displayName: 'Event ID',
		name: 'event_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['createAlert'] } },
	},
	{
		displayName: 'Callback URL',
		name: 'callback_url',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['createAlert'] } },
	},
);

// enable_alert, disable_alert
parameters.push({
	...alertIdProperty,
	description: 'The ID of the alert',
	displayOptions: { show: { operation: ['enableAlert', 'disableAlert'] } },
});

export default parameters;
