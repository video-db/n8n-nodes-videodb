import type { INodeProperties } from 'n8n-workflow';

const parameters: INodeProperties[] = [];

// Shared properties
const imageIdProperty: INodeProperties = {
	displayName: 'Image ID',
	name: 'image_id',
	type: 'string',
	required: true,
	default: '',
};

const collectionIdProperty: INodeProperties = {
	displayName: 'Collection ID',
	name: 'collection_id',
	type: 'string',
	required: true,
	default: 'default',
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
