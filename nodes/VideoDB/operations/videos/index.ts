import parameters from './parameters';

const operations = [
	{
		key: 'fetchVideos',
		endpoint: '/video',
		method: 'GET',
		details: {
			name: 'Fetch Videos',
			value: 'fetchVideos',
			description: 'List all videos in a collection',
			action: 'Fetch Videos',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('fetchVideos'),
		),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	{
		key: 'indexSpokenWords',
		endpoint: (params: any) => `/video/${params.video_id}/index`,
		method: 'POST',
		details: {
			name: 'Index Spoken Words',
			value: 'indexSpokenWords',
			description: 'Perform semantic indexing on the spoken words in a video',
			action: 'Index spoken words',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('indexSpokenWords'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			index_type: 'spoken_word',
			language_code: params.language_code,
			force: params.force,
			callback_url: params.callback_url,
		}),
	},
	{
		key: 'getTranscript',
		endpoint: (params: any) => `/video/${params.video_id}/transcription`,
		method: 'GET',
		details: {
			name: 'Get Transcript',
			value: 'getTranscript',
			description: 'Get transcript for a video',
			action: 'Get Transcript',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('getTranscript'),
		),
		buildQuery: (params: any) => ({
			start: params.start,
			end: params.end,
			segmenter: params.segmenter,
			length: params.length,
			force: params.force,
		}),
		buildBody: () => ({}),
	},
	{
		key: 'search',
		endpoint: '/search',
		method: 'POST',
		details: {
			name: 'Search',
			value: 'search',
			description: 'Search for a query within a video',
			action: 'Search in a video',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('search')),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			video_id: params.video_id,
			search_type: params.search_type,
			index_type: params.index_type,
			query: params.query,
			score_threshold: params.score_threshold,
			result_threshold: params.result_threshold,
			dynamic_score_percentage: params.dynamic_score_percentage,
		}),
	},
	{
		key: 'removeStorage',
		endpoint: (params: any) => `/video/${params.video_id}/storage`,
		method: 'DELETE',
		details: {
			name: 'Remove Storage',
			value: 'removeStorage',
			description: 'Removes the video from storage',
			action: 'Remove video from storage',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('removeStorage'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	{
		key: 'generateStream',
		endpoint: (params: any) => `/video/${params.video_id}/stream`,
		method: 'POST',
		details: {
			name: 'Generate Stream',
			value: 'generateStream',
			description: 'Generates a stream URL for the video',
			action: 'Generate a video stream',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('generateStream'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			timeline: params.timeline,
			length: params.length,
		}),
	},
	{
		key: 'generateThumbnail',
		endpoint: (params: any) => `/video/${params.video_id}/thumbnail`,
		method: 'POST',
		details: {
			name: 'Generate Thumbnail',
			value: 'generateThumbnail',
			description: 'Generate a thumbnail at a specific time in the video',
			action: 'Generate a thumbnail',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('generateThumbnail'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			time: params.time,
		}),
	},
	{
		key: 'getDefaultThumbnail',
		endpoint: (params: any) => `/video/${params.video_id}/thumbnail`,
		method: 'GET',
		details: {
			name: 'Get Default Thumbnail',
			value: 'getDefaultThumbnail',
			description: 'Get the default thumbnail URL for a video',
			action: 'Get default thumbnail',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('getDefaultThumbnail'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	{
		key: 'getThumbnails',
		endpoint: (params: any) => `/video/${params.video_id}/thumbnails`,
		method: 'GET',
		details: {
			name: 'Get Thumbnails',
			value: 'getThumbnails',
			description: 'Retrieves all thumbnails associated with the video',
			action: 'Get all thumbnails',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('getThumbnails'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	{
		key: 'translateTranscript',
		endpoint: (params: any) =>
			`/collection/${params.collection_id}/video/${params.video_id}/translate`,
		method: 'POST',
		details: {
			name: 'Translate Transcript',
			value: 'translateTranscript',
			description: "Translates the video's transcript to a specified language",
			action: 'Translate transcript',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('translateTranscript'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			language: params.language,
			additional_notes: params.additional_notes,
			callback_url: params.callback_url,
		}),
	},
	{
		key: 'extractScenes',
		endpoint: (params: any) => `/video/${params.video_id}/scenes`,
		method: 'POST',
		details: {
			name: 'Extract Scenes',
			value: 'extractScenes',
			description: 'Extracts scenes from the video based on time intervals or shot detection',
			action: 'Extract scenes',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('extractScenes'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			extraction_type: params.extraction_type,
			extraction_config: params.extraction_config,
			force: params.force,
			callback_url: params.callback_url,
		}),
	},
	{
		key: 'listSceneCollections',
		endpoint: (params: any) => `/video/${params.video_id}/scenes`,
		method: 'GET',
		details: {
			name: 'List Scene Collections',
			value: 'listSceneCollections',
			description: 'Lists all scene collections for the video',
			action: 'List scene collections',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('listSceneCollections'),
		),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	{
		key: 'getSceneCollection',
		endpoint: (params: any) => `/video/${params.video_id}/scenes/${params.scene_collection_id}`,
		method: 'GET',
		details: {
			name: 'Get Scene Collection',
			value: 'getSceneCollection',
			description: 'Retrieves a specific collection of scenes from the video',
			action: 'Get scene collection',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('getSceneCollection'),
		),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	{
		key: 'deleteSceneCollection',
		endpoint: (params: any) => `/video/${params.video_id}/scenes/${params.scene_collection_id}`,
		method: 'DELETE',
		details: {
			name: 'Delete Scene Collection',
			value: 'deleteSceneCollection',
			description: 'Deletes a specific scene collection from the video',
			action: 'Delete scene collection',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('deleteSceneCollection'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	{
		key: 'indexScenes',
		endpoint: (params: any) => `/video/${params.video_id}/index/scene`,
		method: 'POST',
		details: {
			name: 'Index Scenes',
			value: 'indexScenes',
			description: 'Indexes the scenes of the video',
			action: 'Index scenes',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('indexScenes'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			name: params.name,
			extraction_type: params.extraction_type,
			extraction_config: params.extraction_config,
			prompt: params.prompt,
			metadata: params.metadata,
			model_name: params.model_name,
			model_config: params.model_config,
			scenes: params.scenes,
			callback_url: params.callback_url,
		}),
	},
	{
		key: 'listSceneIndexes',
		endpoint: (params: any) => `/video/${params.video_id}/index/scene`,
		method: 'GET',
		details: {
			name: 'List Scene Indexes',
			value: 'listSceneIndexes',
			description: 'Lists all the scene indexes for the video',
			action: 'List scene indexes',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('listSceneIndexes'),
		),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	{
		key: 'getSceneIndex',
		endpoint: (params: any) => `/video/${params.video_id}/index/scene/${params.scene_index_id}`,
		method: 'GET',
		details: {
			name: 'Get Scene Index',
			value: 'getSceneIndex',
			description: 'Retrieves a specific scene index',
			action: 'Get scene index',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('getSceneIndex'),
		),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	{
		key: 'deleteSceneIndex',
		endpoint: (params: any) => `/video/${params.video_id}/index/scene/${params.scene_index_id}`,
		method: 'DELETE',
		details: {
			name: 'Delete Scene Index',
			value: 'deleteSceneIndex',
			description: 'Deletes a specific scene index',
			action: 'Delete scene index',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('deleteSceneIndex'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	{
		key: 'addSubtitle',
		endpoint: (params: any) => `/video/${params.video_id}/workflow`,
		method: 'POST',
		details: {
			name: 'Add Subtitle',
			value: 'addSubtitle',
			description: 'Adds subtitles to the video',
			action: 'Add subtitles',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('addSubtitle'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			type: 'add_subtitles',
			subtitle_style: params.subtitle_style,
		}),
	},
];

export default operations;
