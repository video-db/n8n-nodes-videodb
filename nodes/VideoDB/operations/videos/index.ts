import parameters from './parameters';

const operations = [
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
		buildQuery: (params: any) => {
			const queryObj: Record<string, any> = {};

			if (params.force) {
				queryObj.force = params.force;
			}

			return queryObj;
		},
		buildBody: () => ({}),
	},
	{
		key: 'searchInVideo',
		endpoint: '/search',
		method: 'POST',
		details: {
			name: 'Search in a Video',
			value: 'searchInVideo',
			description: 'Search for a query within a video',
			action: 'Search in a Video',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('searchInVideo'),
		),
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
