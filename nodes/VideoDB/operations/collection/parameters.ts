import type { INodeProperties } from 'n8n-workflow';

const parameters: INodeProperties[] = [];

// Shared properties
const collectionIdProperty: INodeProperties = {
	displayName: 'Collection ID',
	name: 'collection_id',
	type: 'string',
	required: true,
	default: '',
};
const videoIdProperty: INodeProperties = {
	displayName: 'Video ID',
	name: 'video_id',
	type: 'string',
	required: true,
	default: '',
};
const audioIdProperty: INodeProperties = {
	displayName: 'Audio ID',
	name: 'audio_id',
	type: 'string',
	required: true,
	default: '',
};
const imageIdProperty: INodeProperties = {
	displayName: 'Image ID',
	name: 'image_id',
	type: 'string',
	required: true,
	default: '',
};

// connectRtstream
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['connectRtstream'] } },
	},
	{
		displayName: 'RTSP URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['connectRtstream'] } },
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['connectRtstream'] } },
	},
	{
		displayName: 'Sample Rate',
		name: 'sample_rate',
		type: 'number',
		default: 0,
		displayOptions: { show: { operation: ['connectRtstream'] } },
	},
	{
		displayName: 'Audio',
		name: 'audio',
		type: 'boolean',
		default: false,
		displayOptions: { show: { operation: ['connectRtstream'] } },
	},
);

// deleteAudio
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['deleteAudio'] } },
	},
	{
		...audioIdProperty,
		displayOptions: { show: { operation: ['deleteAudio'] } },
	},
);

// deleteImage
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['deleteImage'] } },
	},
	{
		...imageIdProperty,
		displayOptions: { show: { operation: ['deleteImage'] } },
	},
);

// deleteVideo
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['deleteVideo'] } },
	},
	{
		...videoIdProperty,
		displayOptions: { show: { operation: ['deleteVideo'] } },
	},
);

// deleteCollection
parameters.push({
	...collectionIdProperty,
	displayOptions: { show: { operation: ['deleteCollection'] } },
});

// dubVideo
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['dubVideo'] } },
	},
	{
		...videoIdProperty,
		displayOptions: { show: { operation: ['dubVideo'] } },
	},
	{
		displayName: 'Language Code',
		name: 'language_code',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['dubVideo'] } },
	},
	{
		displayName: 'Callback URL',
		name: 'callback_url',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['dubVideo'] } },
	},
);

// generateImage
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['generateImage'] } },
	},
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['generateImage'] } },
	},
	{
		displayName: 'Aspect Ratio',
		name: 'aspect_ratio',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['generateImage'] } },
	},
	{
		displayName: 'Callback URL',
		name: 'callback_url',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['generateImage'] } },
	},
);

// generateMusic
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['generateMusic'] } },
	},
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['generateMusic'] } },
	},
	{
		displayName: 'Duration',
		name: 'duration',
		type: 'number',
		default: 0,
		displayOptions: { show: { operation: ['generateMusic'] } },
	},
	{
		displayName: 'Callback URL',
		name: 'callback_url',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['generateMusic'] } },
	},
);

// generateSoundEffect
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['generateSoundEffect'] } },
	},
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['generateSoundEffect'] } },
	},
	{
		displayName: 'Duration',
		name: 'duration',
		type: 'number',
		default: 0,
		displayOptions: { show: { operation: ['generateSoundEffect'] } },
	},
	{
		displayName: 'Callback URL',
		name: 'callback_url',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['generateSoundEffect'] } },
	},
);

// generateVoice
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['generateVoice'] } },
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['generateVoice'] } },
	},
	{
		displayName: 'Voice Name',
		name: 'voice_name',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['generateVoice'] } },
	},
	{
		displayName: 'Callback URL',
		name: 'callback_url',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['generateVoice'] } },
	},
);

// generateVideo
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['generateVideo'] } },
	},
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['generateVideo'] } },
	},
	{
		displayName: 'Duration',
		name: 'duration',
		type: 'number',
		default: 0,
		displayOptions: { show: { operation: ['generateVideo'] } },
	},
	{
		displayName: 'Callback URL',
		name: 'callback_url',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['generateVideo'] } },
	},
);

// getAudio
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['getAudio'] } },
	},
	{
		...audioIdProperty,
		displayOptions: { show: { operation: ['getAudio'] } },
	},
);

// getAudios
parameters.push({
	...collectionIdProperty,
	displayOptions: { show: { operation: ['getAudios'] } },
});

// getImage
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['getImage'] } },
	},
	{
		...imageIdProperty,
		displayOptions: { show: { operation: ['getImage'] } },
	},
);

// getImages
parameters.push({
	...collectionIdProperty,
	displayOptions: { show: { operation: ['getImages'] } },
});

// getRtstream
parameters.push({
	displayName: 'RTStream ID',
	name: 'rtstream_id',
	type: 'string',
	required: true,
	default: '',
	displayOptions: { show: { operation: ['getRtstream'] } },
});

// getVideo
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['getVideo'] } },
	},
	{
		...videoIdProperty,
		displayOptions: { show: { operation: ['getVideo'] } },
	},
);

// getVideos
parameters.push({
	...collectionIdProperty,
	displayOptions: { show: { operation: ['getVideos'] } },
});

// listRtstreams (no parameters)

// makePrivate
parameters.push({
	...collectionIdProperty,
	displayOptions: { show: { operation: ['makePrivate'] } },
});

// makePublic
parameters.push({
	...collectionIdProperty,
	displayOptions: { show: { operation: ['makePublic'] } },
});

// search
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['search'] } },
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['search'] } },
	},
	{
		displayName: 'Search Type',
		name: 'search_type',
		default: 'semantic',
		type: 'options',
		options: [{ name: 'Semantic', value: 'semantic' }],
		displayOptions: { show: { operation: ['search'] } },
	},
	{
		displayName: 'Index Type',
		name: 'index_type',
		default: 'spoken_word',
		type: 'options',
		options: [
			{ name: 'Spoken Word', value: 'spoken_word' },
			{ name: 'Scene', value: 'scene' },
		],
		displayOptions: { show: { operation: ['search'] } },
	},
	{
		displayName: 'Result Threshold',
		name: 'result_threshold',
		type: 'number',
		default: 0,
		displayOptions: { show: { operation: ['search'] } },
	},
	{
		displayName: 'Score Threshold',
		name: 'score_threshold',
		type: 'number',
		default: 0,
		displayOptions: { show: { operation: ['search'] } },
	},
	{
		displayName: 'Dynamic Score Percentage',
		name: 'dynamic_score_percentage',
		type: 'number',
		default: 0,
		displayOptions: { show: { operation: ['search'] } },
	},
);

// searchTitle
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['searchTitle'] } },
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['searchTitle'] } },
	},
);

// upload
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['upload'] } },
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['upload'] } },
	},
	{
		displayName: 'Media Type',
		name: 'media_type',
		type: 'options',
		options: [
			{ name: 'Video', value: 'video' },
			{ name: 'Audio', value: 'audio' },
			{ name: 'Image', value: 'image' },
		],
		default: 'video',
		displayOptions: { show: { operation: ['upload'] } },
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['upload'] } },
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['upload'] } },
	},
	{
		displayName: 'Callback URL',
		name: 'callback_url',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['upload'] } },
	},
);

// recordMeeting
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['recordMeeting'] } },
	},
	{
		displayName: 'Meeting URL',
		name: 'meeting_url',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['recordMeeting'] } },
	},
	{
		displayName: 'Bot Name',
		name: 'bot_name',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['recordMeeting'] } },
	},
	{
		displayName: 'Bot Image URL',
		name: 'bot_image_url',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['recordMeeting'] } },
	},
	{
		displayName: 'Meeting Title',
		name: 'meeting_title',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['recordMeeting'] } },
	},
	{
		displayName: 'Callback URL',
		name: 'callback_url',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: ['recordMeeting'] } },
	},
	{
		displayName: 'Callback Data',
		name: 'callback_data',
		type: 'json',
		default: '',
		displayOptions: { show: { operation: ['recordMeeting'] } },
	},
	{
		displayName: 'Time Zone',
		name: 'time_zone',
		type: 'string',
		default: 'UTC',
		displayOptions: { show: { operation: ['recordMeeting'] } },
	},
	{
		displayName: 'Realtime Stream',
		name: 'realtime_stream',
		type: 'boolean',
		default: false,
		displayOptions: { show: { operation: ['recordMeeting'] } },
	},
);

// getMeeting
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['getMeeting'] } },
	},
	{
		displayName: 'Meeting ID',
		description: 'The ID of the meeting to get',
		name: 'meeting_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['getMeeting'] } },
	},
);

export default parameters;
