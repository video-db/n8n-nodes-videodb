import type { INodeProperties } from 'n8n-workflow';

const parameters: INodeProperties[] = [];

// Shared properties
const audioIdProperty: INodeProperties = {
	displayName: 'Audio ID',
	name: 'audio_id',
	type: 'string',
	required: true,
	default: '',
};

const collectionIdProperty: INodeProperties = {
	displayName: 'Collection ID',
	name: 'collection_id',
	type: 'string',
	required: true,
	default: '',
};

// generate_url
parameters.push(
	{
		...audioIdProperty,
		displayOptions: { show: { operation: ['generateAudioUrl'] } },
	},
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['generateAudioUrl'] } },
	},
);

export default parameters;
