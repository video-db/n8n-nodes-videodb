import parameters from './parameters';

const operations = [
	{
		key: 'generateImageUrl',
		endpoint: (params: any) => `/image/${params.image_id}/generate_url`,
		method: 'POST',
		details: {
			name: 'Generate Image URL',
			value: 'generateImageUrl',
			description: 'Generates a temporary, signed URL to access the image file',
			action: 'Generate Image URL',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('generateImageUrl'),
		),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	{
		key: 'deleteImage',
		endpoint: (params: any) => `/image/${params.image_id}`,
		method: 'DELETE',
		details: {
			name: 'Delete Image',
			value: 'deleteImage',
			description: 'Permanently deletes the image file',
			action: 'Delete Image',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('deleteImage'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
];

export default operations;
