import parameters from './parameters';

const operations = [
	// connectRtstream
	{
		key: 'connectRtstream',
		endpoint: '/rtstream',
		method: 'POST',
		details: {
			name: 'Connect RTStream',
			value: 'connectRtstream',
			description: 'Connects to a new real-time stream (rtstream) and adds it to the collection',
			action: 'Connect RTStream',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('connectRtstream'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			collection_id: params.collection_id,
			url: params.url,
			name: params.name,
			sample_rate: params.sample_rate,
			audio: params.audio,
		}),
	},
	// deleteAudio
	{
		key: 'deleteAudio',
		endpoint: (params: any) => `/audio/${params.audio_id}`,
		method: 'DELETE',
		details: {
			name: 'Delete Audio',
			value: 'deleteAudio',
			description: 'Deletes a specific audio asset by its ID from a collection',
			action: 'Delete Audio',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('deleteAudio'),
		),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	// deleteImage
	{
		key: 'deleteImage',
		endpoint: (params: any) => `/image/${params.image_id}`,
		method: 'DELETE',
		details: {
			name: 'Delete Image',
			value: 'deleteImage',
			description: 'Deletes a specific image by its ID from a collection',
			action: 'Delete Image',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('deleteImage'),
		),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	// deleteVideo
	{
		key: 'deleteVideo',
		endpoint: (params: any) => `/video/${params.video_id}`,
		method: 'DELETE',
		details: {
			name: 'Delete Video',
			value: 'deleteVideo',
			description: 'Deletes a specific video by its ID from a collection',
			action: 'Delete Video',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('deleteVideo'),
		),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	// deleteCollection
	{
		key: 'deleteCollection',
		endpoint: (params: any) => `/collection/${params.collection_id}`,
		method: 'DELETE',
		details: {
			name: 'Delete Collection',
			value: 'deleteCollection',
			description: 'Deletes a collection and all its assets',
			action: 'Delete Collection',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('deleteCollection'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	// dubVideo
	{
		key: 'dubVideo',
		endpoint: (params: any) => `/collection/${params.collection_id}/generate/video/dub`,
		method: 'POST',
		details: {
			name: 'Dub Video',
			value: 'dubVideo',
			description: 'Dubs a video into a different language',
			action: 'Dub Video',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('dubVideo')),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			video_id: params.video_id,
			language_code: params.language_code,
			callback_url: params.callback_url,
		}),
	},
	// generateImage
	{
		key: 'generateImage',
		endpoint: (params: any) => `/collection/${params.collection_id}/generate/image`,
		method: 'POST',
		details: {
			name: 'Generate Image',
			value: 'generateImage',
			description: 'Generates an image from a text prompt',
			action: 'Generate Image',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('generateImage'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			prompt: params.prompt,
			aspect_ratio: params.aspect_ratio,
			callback_url: params.callback_url,
		}),
	},
	// generateMusic
	{
		key: 'generateMusic',
		endpoint: (params: any) => `/collection/${params.collection_id}/generate/audio`,
		method: 'POST',
		details: {
			name: 'Generate Music',
			value: 'generateMusic',
			description: 'Generates music from a text prompt',
			action: 'Generate Music',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('generateMusic'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			prompt: params.prompt,
			duration: params.duration,
			audio_type: 'music',
			callback_url: params.callback_url,
		}),
	},
	// generateSoundEffect
	{
		key: 'generateSoundEffect',
		endpoint: (params: any) => `/collection/${params.collection_id}/generate/audio`,
		method: 'POST',
		details: {
			name: 'Generate Sound Effect',
			value: 'generateSoundEffect',
			description: 'Generates a sound effect from a text prompt',
			action: 'Generate Sound Effect',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('generateSoundEffect'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			prompt: params.prompt,
			duration: params.duration,
			audio_type: 'sound_effect',
			callback_url: params.callback_url,
		}),
	},
	// generateVoice
	{
		key: 'generateVoice',
		endpoint: (params: any) => `/collection/${params.collection_id}/generate/audio`,
		method: 'POST',
		details: {
			name: 'Generate Voice',
			value: 'generateVoice',
			description: 'Generates voice from text',
			action: 'Generate Voice',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('generateVoice'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			text: params.text,
			voice_name: params.voice_name,
			callback_url: params.callback_url,
		}),
	},
	// generateVideo
	{
		key: 'generateVideo',
		endpoint: (params: any) => `/collection/${params.collection_id}/generate/video`,
		method: 'POST',
		details: {
			name: 'Generate Video',
			value: 'generateVideo',
			description: 'Generates a video from a text prompt',
			action: 'Generate Video',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('generateVideo'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			prompt: params.prompt,
			duration: params.duration,
			callback_url: params.callback_url,
		}),
	},
	// generateText
	{
		key: 'generateText',
		endpoint: (params: any) => `/collection/${params.collection_id}/generate/text`,
		method: 'POST',
		details: {
			name: 'Generate Text',
			value: 'generateText',
			description: 'Generates text from a prompt using AI models',
			action: 'Generate Text',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('generateText'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			prompt: params.prompt,
			model_name: params.model_name,
			response_type: params.response_type,
		}),
	},
	// generateTranscript
	// {
	// 	key: 'generateTranscript',
	// 	endpoint: (params: any) => `/video/${params.video_id}/transcription`,
	// 	method: 'POST',
	// 	details: {
	// 		name: 'Generate Transcript',
	// 		value: 'generateTranscript',
	// 		description: 'Generates a transcript for a video',
	// 		action: 'Generate Transcript',
	// 	},
	// 	parameters: parameters.filter((p) =>
	// 		p.displayOptions?.show?.operation?.includes('generateTranscript'),
	// 	),
	// 	buildQuery: () => ({}),
	// 	buildBody: (params: any) => ({
	// 		force: params.force || false,
	// 	}),
	// },
	// getAudio
	{
		key: 'getAudio',
		endpoint: (params: any) => `/audio/${params.audio_id}`,
		method: 'GET',
		details: {
			name: 'Get Audio',
			value: 'getAudio',
			description: 'Retrieves a specific audio asset by its ID from a collection',
			action: 'Get Audio',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('getAudio')),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	// getAudios
	{
		key: 'getAudios',
		endpoint: '/audio',
		method: 'GET',
		details: {
			name: 'Get Audios',
			value: 'getAudios',
			description: 'Retrieves a list of all audio assets within a collection',
			action: 'Get Audios',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('getAudios')),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	// getImage
	{
		key: 'getImage',
		endpoint: (params: any) => `/image/${params.image_id}`,
		method: 'GET',
		details: {
			name: 'Get Image',
			value: 'getImage',
			description: 'Retrieves a specific image by its ID from a collection',
			action: 'Get Image',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('getImage')),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	// getImages
	{
		key: 'getImages',
		endpoint: '/image',
		method: 'GET',
		details: {
			name: 'Get Images',
			value: 'getImages',
			description: 'Retrieves a list of all images within a collection',
			action: 'Get Images',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('getImages')),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	// getRtstream
	{
		key: 'getRtstream',
		endpoint: (params: any) => `/rtstream/${params.rtstream_id}`,
		method: 'GET',
		details: {
			name: 'Get RTStream',
			value: 'getRtstream',
			description: 'Retrieves a specific real-time stream by its ID',
			action: 'Get RTStream',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('getRtstream'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	// getVideo
	{
		key: 'getVideo',
		endpoint: (params: any) => `/video/${params.video_id}`,
		method: 'GET',
		details: {
			name: 'Get Video',
			value: 'getVideo',
			description: 'Retrieves a specific video by its ID from a collection',
			action: 'Get Video',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('getVideo')),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	// getVideos
	{
		key: 'getVideos',
		endpoint: '/video',
		method: 'GET',
		details: {
			name: 'Get Videos',
			value: 'getVideos',
			description: 'Retrieves a list of all videos within a collection',
			action: 'Get Videos',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('getVideos')),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	// listRtstreams
	{
		key: 'listRtstreams',
		endpoint: '/rtstream',
		method: 'GET',
		details: {
			name: 'List RTStreams',
			value: 'listRtstreams',
			description: 'Lists all real-time streams associated with your account',
			action: 'List RTStreams',
		},
		parameters: [],
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
	// makePrivate
	{
		key: 'makePrivate',
		endpoint: (params: any) => `/collection/${params.collection_id}`,
		method: 'PATCH',
		details: {
			name: 'Make Private',
			value: 'makePrivate',
			description: 'Makes a collection private',
			action: 'Make Private',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('makePrivate'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({ is_public: false }),
	},
	// makePublic
	{
		key: 'makePublic',
		endpoint: (params: any) => `/collection/${params.collection_id}`,
		method: 'PATCH',
		details: {
			name: 'Make Public',
			value: 'makePublic',
			description: 'Makes a collection publicly accessible',
			action: 'Make Public',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('makePublic')),
		buildQuery: () => ({}),
		buildBody: () => ({ is_public: true }),
	},
	// search
	{
		key: 'search',
		endpoint: (params: any) => `/collection/${params.collection_id}/search`,
		method: 'POST',
		details: {
			name: 'Search in a Collection',
			value: 'search',
			description: 'Performs a search query across the collection',
			action: 'Search',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('search')),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			query: params.query,
			search_type: params.search_type,
			index_type: params.index_type,
			result_threshold: params.result_threshold,
			score_threshold: params.score_threshold,
			dynamic_score_percentage: params.dynamic_score_percentage,
		}),
	},
	// searchTitle
	// {
	// 	key: 'searchTitle',
	// 	endpoint: (params: any) => `/collection/${params.collection_id}/search/title`,
	// 	method: 'POST',
	// 	details: {
	// 		name: 'Search Title',
	// 		value: 'searchTitle',
	// 		description: 'Searches for a query within the titles of videos in the collection',
	// 		action: 'Search Title',
	// 	},
	// 	parameters: parameters.filter((p) =>
	// 		p.displayOptions?.show?.operation?.includes('searchTitle'),
	// 	),
	// 	buildQuery: () => ({}),
	// 	buildBody: (params: any) => ({
	// 		query: params.query,
	// 		search_type: 'llm',
	// 	}),
	// },
	// upload
	{
		key: 'upload',
		endpoint: (params: any) => `/collection/${params.collection_id}/upload`,
		method: 'POST',
		details: {
			name: 'Upload',
			value: 'upload',
			description: 'Uploads a media file (video, audio, or image) from a URL',
			action: 'Upload',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('upload')),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			url: params.url,
			media_type: params.media_type,
			name: params.name,
			description: params.description,
			callback_url: params.callback_url,
		}),
	},
	// recordMeeting
	{
		key: 'recordMeeting',
		endpoint: (params: any) => `/collection/${params.collection_id}/meeting/record`,
		method: 'POST',
		details: {
			name: 'Record Meeting',
			value: 'recordMeeting',
			description: 'Records a meeting using a bot and saves it to the collection',
			action: 'Record Meeting',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('recordMeeting'),
		),
		buildQuery: () => ({}),
		buildBody: (params: any) => ({
			meeting_url: params.meeting_url,
			bot_name: params.bot_name,
			bot_image_url: params.bot_image_url,
			meeting_title: params.meeting_title,
			callback_url: params.callback_url,
			callback_data: params.callback_data,
			time_zone: params.time_zone || 'UTC',
			realtime_stream: params.realtime_stream,
		}),
	},
	// getMeeting
	{
		key: 'getMeeting',
		endpoint: (params: any) => `/collection/${params.collection_id}/meeting/${params.meeting_id}`,
		method: 'GET',
		details: {
			name: 'Get Meeting',
			value: 'getMeeting',
			description: 'Retrieves a specific meeting recording by its ID from a collection',
			action: 'Get Meeting',
		},
		parameters: parameters.filter((p) => p.displayOptions?.show?.operation?.includes('getMeeting')),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
];

export default operations;
