import type { INodeProperties } from 'n8n-workflow';

const parameters: INodeProperties[] = [];

// Shared properties
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
const videoIdProperty: INodeProperties = {
	displayName: 'Video Name or ID',
	name: 'video_id',
	type: 'options',
	description:
		'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	required: true,
	default: '',
	typeOptions: {
		loadOptionsMethod: 'getVideosInCollection',
		loadOptionsDependsOn: ['collection_id'],
	},
};
const audioIdProperty: INodeProperties = {
	displayName: 'Audio Name or ID',
	name: 'audio_id',
	type: 'options',
	description:
		'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	required: true,
	default: '',
	typeOptions: {
		loadOptionsMethod: 'getAudiosInCollection',
		loadOptionsDependsOn: ['collection_id'],
	},
};
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
		displayName: 'Language',
		name: 'language_code',
		type: 'options',
		required: true,
		default: 'en',
		displayOptions: { show: { operation: ['dubVideo'] } },
		options: [
			{
				name: 'Bulgarian',
				value: 'bg',
			},
			{
				name: 'Chinese',
				value: 'zh',
			},
			{
				name: 'Classic Arabic',
				value: 'ar',
			},
			{
				name: 'Croatian',
				value: 'hr',
			},
			{
				name: 'Czech',
				value: 'cs',
			},
			{
				name: 'Danish',
				value: 'da',
			},
			{
				name: 'Dutch',
				value: 'nl',
			},
			{
				name: 'English',
				value: 'en',
			},
			{
				name: 'Filipino',
				value: 'fil',
			},
			{
				name: 'Finnish',
				value: 'fi',
			},
			{
				name: 'French',
				value: 'fr',
			},
			{
				name: 'German',
				value: 'de',
			},
			{
				name: 'Greek',
				value: 'el',
			},
			{
				name: 'Hindi',
				value: 'hi',
			},
			{
				name: 'Indonesian',
				value: 'id',
			},
			{
				name: 'Italian',
				value: 'it',
			},
			{
				name: 'Japanese',
				value: 'ja',
			},
			{
				name: 'Korean',
				value: 'ko',
			},
			{
				name: 'Malay',
				value: 'ms',
			},
			{
				name: 'Polish',
				value: 'pl',
			},
			{
				name: 'Portuguese',
				value: 'pt',
			},
			{
				name: 'Romanian',
				value: 'ro',
			},
			{
				name: 'Russian',
				value: 'ru',
			},
			{
				name: 'Slovak',
				value: 'sk',
			},
			{
				name: 'Spanish',
				value: 'es',
			},
			{
				name: 'Swedish',
				value: 'sv',
			},
			{
				name: 'Tamil',
				value: 'ta',
			},
			{
				name: 'Turkish',
				value: 'tr',
			},
			{
				name: 'Ukrainian',
				value: 'uk',
			},
		],
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
		type: 'options',
		options: [
			{
				name: '1:1',
				value: '1:1',
			},
			{
				name: '16:9',
				value: '16:9',
			},
			{
				name: '3:4',
				value: '3:4',
			},
			{
				name: '4:3',
				value: '4:3',
			},
			{
				name: '9:16',
				value: '9:16',
			},
		],
		default: '1:1',
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
		type: 'options',
		default: 'Aria',
		description: 'Choose from the list of available voices',
		options: [
			{
				name: 'Alice',
				value: 'Alice',
				description: 'Confident, British, middle-aged female',
			},
			{
				name: 'Aria',
				value: 'Aria',
				description: 'Expressive, American, female',
			},
			{
				name: 'Bill',
				value: 'Bill',
				description: 'Trustworthy, American, old male',
			},
			{
				name: 'Brian',
				value: 'Brian',
				description: 'Deep, American, middle-aged male',
			},
			{
				name: 'Callum',
				value: 'Callum',
				description: 'Intense, Transatlantic, male',
			},
			{
				name: 'Charlie',
				value: 'Charlie',
				description: 'Natural, Australian, male',
			},
			{
				name: 'Charlotte',
				value: 'Charlotte',
				description: 'Seductive, Swedish, young female',
			},
			{
				name: 'Chris',
				value: 'Chris',
				description: 'Casual, American, middle-aged male',
			},
			{
				name: 'Daniel',
				value: 'Daniel',
				description: 'Authoritative, British, middle-aged male',
			},
			{
				name: 'Eric',
				value: 'Eric',
				description: 'Friendly, American, middle-aged male',
			},
			{
				name: 'George',
				value: 'George',
				description: 'Warm, British, middle-aged male',
			},
			{
				name: 'Jessica',
				value: 'Jessica',
				description: 'Expressive, American, young female',
			},
			{
				name: 'Laura',
				value: 'Laura',
				description: 'Upbeat, American, young female',
			},
			{
				name: 'Liam',
				value: 'Liam',
				description: 'Articulate, American, young male',
			},
			{
				name: 'Lily',
				value: 'Lily',
				description: 'Warm, British, middle-aged female',
			},
			{
				name: 'Matilda',
				value: 'Matilda',
				description: 'Friendly, American, middle-aged female',
			},
			{
				name: 'River',
				value: 'River',
				description: 'Confident, American, non-binary',
			},
			{
				name: 'Roger',
				value: 'Roger',
				description: 'Confident, American, male',
			},
			{
				name: 'Sarah',
				value: 'Sarah',
				description: 'Soft, American, young female',
			},
			{
				name: 'Will',
				value: 'Will',
				description: 'Friendly, American, young male',
			},
		],
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

// generateText
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['generateText'] } },
	},
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['generateText'] } },
	},
	{
		displayName: 'Model Name',
		name: 'model_name',
		type: 'options',
		options: [
			{ name: 'Basic', value: 'basic' },
			{ name: 'Pro', value: 'pro' },
			{ name: 'Ultra', value: 'ultra' },
		],
		required: true,
		default: 'basic',
		displayOptions: { show: { operation: ['generateText'] } },
	},
	{
		displayName: 'Response Type',
		name: 'response_type',
		type: 'options',
		options: [
			{ name: 'Text', value: 'text' },
			{ name: 'JSON', value: 'json' },
		],
		required: true,
		default: 'text',
		displayOptions: { show: { operation: ['generateText'] } },
	},
);

// generateTranscript
parameters.push(
	{
		...videoIdProperty,
		displayOptions: { show: { operation: ['generateTranscript'] } },
	},
	{
		displayName: 'Force',
		name: 'force',
		type: 'boolean',
		default: false,
		description: 'Whether to force regeneration of transcript even if one already exists',
		displayOptions: { show: { operation: ['generateTranscript'] } },
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
		default: '{}',
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
