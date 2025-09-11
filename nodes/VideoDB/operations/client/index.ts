import parameters from './parameters';

const operations = [
	{
		key: 'createCollection',
		endpoint: '/collection',
		method: 'POST',
		details: {
			name: 'Create Collection',
			value: 'createCollection',
			description: 'Creates a new collection',
			action: 'Create Collection',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('createCollection'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			name: params.name,
			description: params.description,
			is_public: params.is_public,
		}),
	},
	{
		key: 'download',
		endpoint: '/download',
		method: 'POST',
		details: {
			name: 'Download',
			value: 'download',
			description: 'Requests a download URL for a given stream link',
			action: 'Download',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('download')),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			stream_link: params.stream_link,
			name: params.name,
		}),
	},
	{
		key: 'getCollection',
		endpoint: (params: any) => `/collection/${params.collection_id}`,
		method: 'GET',
		details: {
			name: 'Get Collection',
			value: 'getCollection',
			description: 'Fetches a single collection by its ID',
			action: 'Get Collection',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('getCollection'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	{
		key: 'getCollections',
		endpoint: '/collection',
		method: 'GET',
		details: {
			name: 'Get Collections',
			value: 'getCollections',
			description: 'Fetches all collections for the user',
			action: 'Get Collections',
		},
		parameters: [],
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	{
		key: 'updateCollection',
		endpoint: (params: any) => `/collection/${params.collection_id}`,
		method: 'PATCH',
		details: {
			name: 'Update Collection',
			value: 'updateCollection',
			description: "Updates a collection's name or description",
			action: 'Update Collection',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('updateCollection'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			name: params.name,
			description: params.description,
		}),
	},
	{
		key: 'youtubeSearch',
		endpoint: (params: any) => `/collection/${params.collection_id}/search/web`,
		method: 'POST',
		details: {
			name: 'YouTube Search',
			value: 'youtubeSearch',
			description: 'Performs a YouTube search within a collection',
			action: 'YouTube Search',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('youtubeSearch'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			collection_id: params.collection_id,
			query: params.query,
			result_threshold: params.result_threshold,
			platform: 'youtube',
			duration: params.duration,
		}),
	},
];

export default operations;
