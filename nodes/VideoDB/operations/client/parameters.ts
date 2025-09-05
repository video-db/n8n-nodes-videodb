import type { INodeProperties } from 'n8n-workflow';

const parameters: INodeProperties[] = [];

// Shared properties
const collectionIdProperty: INodeProperties = {
	displayName: 'Collection ID',
	name: 'collection_id',
	type: 'string',
	required: true,
	default: 'default',
};
const jobIdProperty: INodeProperties = {
	displayName: 'Job ID',
	name: 'job_id',
	type: 'string',
	required: true,
	default: '',
};

// createCollection
parameters.push(
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		description: 'Name of the collection',
		displayOptions: { show: { operation: ['createCollection'] } },
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		description: 'Description of the collection',
		displayOptions: { show: { operation: ['createCollection'] } },
	},
	{
		displayName: 'Is Public',
		name: 'is_public',
		type: 'boolean',
		default: false,
		description: 'Whether the collection is public',
		displayOptions: { show: { operation: ['createCollection'] } },
	},
);

// createEvent
parameters.push(
	{
		displayName: 'Event Prompt',
		name: 'event_prompt',
		type: 'string',
		required: true,
		default: '',
		description: 'Prompt for the event',
		displayOptions: { show: { operation: ['createEvent'] } },
	},
	{
		displayName: 'Label',
		name: 'label',
		type: 'string',
		required: true,
		default: '',
		description: 'Label for the event',
		displayOptions: { show: { operation: ['createEvent'] } },
	},
);

// download
parameters.push(
	{
		displayName: 'Stream Link',
		name: 'stream_link',
		type: 'string',
		required: true,
		default: '',
		description: 'Stream link to download',
		displayOptions: { show: { operation: ['download'] } },
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		description: 'Name for the downloaded file',
		displayOptions: { show: { operation: ['download'] } },
	},
);

// getCollection
parameters.push({
	...collectionIdProperty,
	displayOptions: { show: { operation: ['getCollection'] } },
});

// getCollections (no parameters)

// getTranscodeDetails
parameters.push({
	...jobIdProperty,
	displayOptions: { show: { operation: ['getTranscodeDetails'] } },
});

// listEvents (no parameters)

// transcode
parameters.push(
	{
		displayName: 'Source',
		name: 'source',
		type: 'string',
		required: true,
		default: '',
		description: 'Source video to transcode',
		displayOptions: { show: { operation: ['transcode'] } },
	},
	{
		displayName: 'Callback URL',
		name: 'callback_url',
		type: 'string',
		default: '',
		description: 'Callback URL for job completion',
		displayOptions: { show: { operation: ['transcode'] } },
	},
	{
		displayName: 'Mode',
		name: 'mode',
		type: 'options',
		options: [
			{ name: 'Lightning', value: 'lightning' },
			{ name: 'Economy', value: 'economy' },
		],
		default: 'lightning',
		description: 'Transcode mode',
		displayOptions: { show: { operation: ['transcode'] } },
	},
	{
		displayName: 'Resolution',
		name: 'resolution',
		type: 'number',
		default: 0,
		description: 'Resolution for the output',
		displayOptions: { show: { operation: ['transcode'] } },
	},
	{
		displayName: 'Quality',
		name: 'quality',
		type: 'number',
		default: 23,
		description: 'Quality for the output',
		displayOptions: { show: { operation: ['transcode'] } },
	},
	{
		displayName: 'Framerate',
		name: 'framerate',
		type: 'number',
		default: 0,
		description: 'Framerate for the output',
		displayOptions: { show: { operation: ['transcode'] } },
	},
	{
		displayName: 'Resize Mode',
		name: 'resize_mode',
		type: 'options',
		options: [
			{ name: 'Crop', value: 'crop' },
			{ name: 'Fit', value: 'fit' },
			{ name: 'Pad', value: 'pad' },
		],
		default: 'crop',
		displayOptions: { show: { operation: ['transcode'] } },
	},
	{
		displayName: 'Mute',
		name: 'mute',
		type: 'boolean',
		default: false,
		description: 'Whether to mute the audio or not',
		displayOptions: { show: { operation: ['transcode'] } },
	},
);

// updateCollection
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['updateCollection'] } },
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['updateCollection'] } },
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['updateCollection'] } },
	},
);

// youtubeSearch
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['youtubeSearch'] } },
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['youtubeSearch'] } },
	},
	{
		displayName: 'Result Threshold',
		name: 'result_threshold',
		type: 'number',
		default: 5,
		displayOptions: { show: { operation: ['youtubeSearch'] } },
	},
	{
		displayName: 'Platform',
		name: 'platform',
		type: 'options',
		options: [{ name: 'YouTube', value: 'youtube' }],
		default: 'youtube',
		displayOptions: { show: { operation: ['youtubeSearch'] } },
	},
	{
		displayName: 'Duration',
		name: 'duration',
		type: 'options',
		options: [
			{ name: 'Short', value: 'short' },
			{ name: 'Medium', value: 'medium' },
			{ name: 'Long', value: 'long' },
		],
		default: 'short',
		displayOptions: { show: { operation: ['youtubeSearch'] } },
	},
);

export default parameters;
