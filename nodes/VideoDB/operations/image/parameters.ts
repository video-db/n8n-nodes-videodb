import type { INodeProperties } from 'n8n-workflow';

const parameters: INodeProperties[] = [];

// Shared properties
const imageIdProperty: INodeProperties = {
	displayName: 'Image Name or ID',
	name: 'image_id',
	type: 'options',
	description:
		'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	required: true,
	default: '',
	typeOptions: {
		loadOptionsMethod: 'getImagesInCollection',
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
		...imageIdProperty,
		displayOptions: { show: { operation: ['generateImageUrl'] } },
	},
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['generateImageUrl'] } },
	},
);

export default parameters;
