import parameters from './parameters';

const operations = [
	// createCollection
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
	// createEvent
	{
		key: 'createEvent',
		endpoint: '/rtstream/event',
		method: 'POST',
		details: {
			name: 'Create Event',
			value: 'createEvent',
			description: 'Creates a new event for RTStream',
			action: 'Create Event',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('createEvent'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			event_prompt: params.event_prompt,
			label: params.label,
		}),
	},
	// download
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
	// getCollection
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
	// getCollections
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
	// getTranscodeDetails
	{
		key: 'getTranscodeDetails',
		endpoint: (params: any) => `/transcode/${params.job_id}`,
		method: 'GET',
		details: {
			name: 'Get Transcode Details',
			value: 'getTranscodeDetails',
			description: 'Fetches details for a specific transcode job',
			action: 'Get Transcode Details',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('getTranscodeDetails'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	// listEvents
	{
		key: 'listEvents',
		endpoint: '/rtstream/event',
		method: 'GET',
		details: {
			name: 'List Events',
			value: 'listEvents',
			description: 'Lists all RTStream events',
			action: 'List Events',
		},
		parameters: [],
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	// transcode
	{
		key: 'transcode',
		endpoint: '/transcode',
		method: 'POST',
		details: {
			name: 'Transcode',
			value: 'transcode',
			description: 'Requests a transcode job for a given source video',
			action: 'Transcode',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('transcode')),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			source: params.source,
			callback_url: params.callback_url,
			mode: params.mode,
			video_config: {
				resolution: params.resolution,
				quality: params.quality || 23,
				framerate: params.framerate,
				resize_mode: params.resize_mode || 'crop',
			},
			audio_config: {
				mute: params.mute,
			},
		}),
	},
	// updateCollection
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
	// youtubeSearch
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
			platform: params.platform,
			duration: params.duration,
		}),
	},
];

export default operations;
