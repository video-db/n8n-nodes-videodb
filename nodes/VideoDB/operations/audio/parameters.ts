import type { INodeProperties } from 'n8n-workflow';

const parameters: INodeProperties[] = [];

// Shared properties
const audioIdProperty: INodeProperties = {
	displayName: 'Audio Name or ID',
	name: 'audio_id',
	type: 'options',
	description:
		'Choose from the list, or specify an ID using an <a href="https://docs.n-8n.io/code/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	required: true,
	default: '',
	typeOptions: {
		loadOptionsMethod: 'getAudiosInCollection',
		loadOptionsDependsOn: ['collection_id'],
	},
};

const collectionIdProperty: INodeProperties = {
	displayName: 'Collection Name or ID',
	name: 'collection_id',
	type: 'options',
	description:
		'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	required: true,
	default: '',
	typeOptions: {
		loadOptionsMethod: 'getCollections',
	},
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
