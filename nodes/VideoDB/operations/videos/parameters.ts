import type { INodeProperties } from 'n8n-workflow';

const parameters: INodeProperties[] = [];

// #region Shared Parameters

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

const callbackUrlProperty: INodeProperties = {
	displayName: 'Callback URL',
	name: 'callback_url',
	type: 'string',
	default: '',
	description: 'Callback URL for completion',
};

const forceProperty: INodeProperties = {
	displayName: 'Force',
	name: 'force',
	type: 'boolean',
	default: false,
};

// #endregion

// Fetch videos in a collection
parameters.push({
	...collectionIdProperty,
	description: 'The ID of the collection to fetch videos from',
	displayOptions: { show: { operation: ['fetchVideos'] } },
});

// Upload a video
parameters.push(
	{
		...collectionIdProperty,
		description: 'The ID of the collection to upload the video to',
		displayOptions: { show: { operation: ['uploadVideo'] } },
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		description: 'The URL of the video to upload',
		displayOptions: { show: { operation: ['uploadVideo'] } },
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		description: 'The name for the uploaded video',
		displayOptions: { show: { operation: ['uploadVideo'] } },
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		description: 'A description for the uploaded video',
		displayOptions: { show: { operation: ['uploadVideo'] } },
	},
	{
		...callbackUrlProperty,
		displayOptions: { show: { operation: ['uploadVideo'] } },
	},
	{
		displayName: 'Media Type',
		name: 'media_type',
		type: 'string',
		default: 'video',
		description: 'Type of media (e.g., video, audio, image)',
		displayOptions: { show: { operation: ['uploadVideo'] } },
	},
);

// Index a video (spoken words)
parameters.push(
	{
		...videoIdProperty,
		description: 'The ID of the video to index',
		displayOptions: { show: { operation: ['indexSpokenWords'] } },
	},
	{
		displayName: 'Index Type',
		name: 'index_type',
		type: 'string',
		required: true,
		default: 'spoken_word',
		description: 'Must be "spoken_word"',
		displayOptions: { show: { operation: ['indexSpokenWords'] } },
	},
	{
		displayName: 'Language Code',
		name: 'language_code',
		type: 'string',
		default: 'en',
		description: 'Language code for indexing',
		displayOptions: { show: { operation: ['indexSpokenWords'] } },
	},
	{
		...forceProperty,
		description: 'Whether to force re-indexing',
		displayOptions: { show: { operation: ['indexSpokenWords'] } },
	},
	{
		...callbackUrlProperty,
		description: 'Callback URL for indexing completion',
		displayOptions: { show: { operation: ['indexSpokenWords'] } },
	},
);

// Get transcript
parameters.push(
	{
		...videoIdProperty,
		description: 'The ID of the video',
		displayOptions: { show: { operation: ['getTranscript'] } },
	},
	{
		displayName: 'Start',
		name: 'start',
		type: 'number',
		default: 0,
		description: 'Start time (seconds)',
		displayOptions: { show: { operation: ['getTranscript'] } },
	},
	{
		displayName: 'End',
		name: 'end',
		type: 'number',
		default: 0,
		description: 'End time (seconds)',
		displayOptions: { show: { operation: ['getTranscript'] } },
	},
	{
		displayName: 'Segmenter',
		name: 'segmenter',
		type: 'string',
		default: 'word',
		description: 'Segmenter type (word, sentence, time)',
		displayOptions: { show: { operation: ['getTranscript'] } },
	},
	{
		displayName: 'Length',
		name: 'length',
		type: 'number',
		default: 1,
		description: 'Length of transcript segments when using time segmenter',
		displayOptions: { show: { operation: ['getTranscript'] } },
	},
	{
		...forceProperty,
		description: 'Whether to force new transcript',
		displayOptions: { show: { operation: ['getTranscript'] } },
	},
);

// Search
parameters.push(
	{
		...videoIdProperty,
		description: 'The ID of the video to search within',
		displayOptions: { show: { operation: ['search'] } },
	},
	{
		displayName: 'Search Type',
		name: 'search_type',
		type: 'options',
		options: [
			{ name: 'Semantic', value: 'semantic' },
			{ name: 'Keyword', value: 'keyword' },
			{ name: 'Scene', value: 'scene' },
			{ name: 'LLM', value: 'llm' },
		],
		required: true,
		default: 'semantic',
		description: 'Type of search (semantic, keyword, scene, etc)',
		displayOptions: { show: { operation: ['search'] } },
	},
	{
		displayName: 'Index Type',
		name: 'index_type',
		type: 'options',
		options: [
			{ name: 'Spoken Word', value: 'spoken_word' },
			{ name: 'Scene', value: 'scene' },
		],
		default: 'spoken_word',
		description: 'Type of index (spoken_word, scene, etc)',
		displayOptions: { show: { operation: ['search'] } },
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		description: 'Search query',
		displayOptions: { show: { operation: ['search'] } },
	},
	{
		displayName: 'Score Threshold',
		name: 'score_threshold',
		type: 'number',
		default: 0.0,
		displayOptions: { show: { operation: ['search'] } },
	},
	{
		displayName: 'Result Threshold',
		name: 'result_threshold',
		type: 'number',
		default: 10,
		displayOptions: { show: { operation: ['search'] } },
	},
	{
		displayName: 'Dynamic Score Percentage',
		name: 'dynamic_score_percentage',
		type: 'number',
		default: 0.0,
		displayOptions: { show: { operation: ['search'] } },
	},
);

// #region New Operations

const videoOperations = [
	'deleteVideo',
	'removeStorage',
	'generateStream',
	'generateThumbnail',
	'getDefaultThumbnail',
	'getThumbnails',
	'getScenes',
	'extractScenes',
	'listSceneCollections',
	'deleteSceneCollection',
	'getSceneCollection',
	'indexScenes',
	'listSceneIndexes',
	'getSceneIndex',
	'deleteSceneIndex',
	'addSubtitle',
	'translateTranscript',
];

parameters.push({
	...videoIdProperty,
	description: 'The ID of the video',
	displayOptions: { show: { operation: videoOperations } },
});

// Generate Stream
parameters.push(
	{
		displayName: 'Timeline',
		name: 'timeline',
		type: 'json',
		default: '[[0, 10]]',
		description:
			'A list of start and end times to create a custom timeline for the stream. e.g. [[start1, end1], [start2, end2]].',
		displayOptions: { show: { operation: ['generateStream'] } },
	},
	{
		displayName: 'Length',
		name: 'length',
		type: 'number',
		default: 10,
		description: 'The length of the video stream to generate',
		displayOptions: { show: { operation: ['generateStream'] } },
	},
);

// Generate Thumbnail
parameters.push({
	displayName: 'Time',
	name: 'time',
	type: 'number',
	default: 1,
	description: 'The specific time in seconds from which to generate the thumbnail',
	displayOptions: { show: { operation: ['generateThumbnail'] } },
});

// Translate Transcript
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['translateTranscript'] } },
	},
	{
		displayName: 'Language',
		name: 'language',
		type: 'string',
		required: true,
		default: 'es',
		description: 'The target language for translation (e.g., "es", "fr")',
		displayOptions: { show: { operation: ['translateTranscript'] } },
	},
	{
		displayName: 'Additional Notes',
		name: 'additional_notes',
		type: 'string',
		default: '',
		description: 'Any additional notes to guide the translation style',
		displayOptions: { show: { operation: ['translateTranscript'] } },
	},
	{
		...callbackUrlProperty,
		displayOptions: { show: { operation: ['translateTranscript'] } },
	},
);

// Extract Scenes
parameters.push(
	{
		displayName: 'Extraction Type',
		name: 'extraction_type',
		type: 'options',
		options: [
			{ name: 'Shot Based', value: 'shot' },
			{ name: 'Time Based', value: 'time' },
		],
		default: 'shot',
		description: 'The method for scene extraction',
		displayOptions: { show: { operation: ['extractScenes'] } },
	},
	{
		displayName: 'Extraction Config',
		name: 'extraction_config',
		type: 'json',
		default: '',
		description: 'JSON object with configuration for the extraction process',
		displayOptions: { show: { operation: ['extractScenes'] } },
	},
	{
		...forceProperty,
		description: 'Whether to force re-extraction.',
		displayOptions: { show: { operation: ['extractScenes'] } },
	},
	{
		...callbackUrlProperty,
		displayOptions: { show: { operation: ['extractScenes'] } },
	},
);

// Scene Collections
parameters.push(
	{
		...collectionIdProperty,
		description: 'The ID of the parent collection',
		displayOptions: {
			show: { operation: ['listSceneCollections', 'getSceneCollection'] },
		},
	},
	{
		displayName: 'Scene Collection ID',
		name: 'scene_collection_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: { operation: ['getSceneCollection', 'deleteSceneCollection'] },
		},
	},
);

// Index Scenes
parameters.push(
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: 'The name for the scene index',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		displayName: 'Extraction Type',
		name: 'extraction_type',
		type: 'options',
		options: [
			{ name: 'Shot Based', value: 'shot' },
			{ name: 'Time Based', value: 'time' },
		],
		default: 'shot',
		description: 'The method for scene extraction',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		displayName: 'Extraction Config (JSON)',
		name: 'extraction_config',
		type: 'json',
		default: '',
		description: 'Configuration for the scene extraction',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		default: '',
		description: 'A prompt to guide the indexing',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		displayName: 'Metadata (JSON)',
		name: 'metadata',
		type: 'json',
		default: '',
		description: 'Metadata to associate with the index',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		displayName: 'Model Name',
		name: 'model_name',
		type: 'string',
		default: '',
		description: 'The name of the model to use for indexing',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		displayName: 'Model Config (JSON)',
		name: 'model_config',
		type: 'json',
		default: '',
		description: 'Configuration for the model',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		displayName: 'Scenes (JSON)',
		name: 'scenes',
		type: 'json',
		default: '',
		description: 'A list of scenes to be indexed',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		...callbackUrlProperty,
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
);

// Scene Indexes
parameters.push(
	{
		...collectionIdProperty,
		description: 'The ID of the parent collection',
		displayOptions: {
			show: { operation: ['listSceneIndexes', 'getSceneIndex'] },
		},
	},
	{
		displayName: 'Scene Index ID',
		name: 'scene_index_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: { operation: ['getSceneIndex', 'deleteSceneIndex'] },
		},
	},
);

// Add Subtitle
parameters.push({
	displayName: 'Subtitle Style (JSON)',
	name: 'subtitle_style',
	type: 'json',
	default: '',
	description: 'A JSON object containing styling options for the subtitles',
	displayOptions: { show: { operation: ['addSubtitle'] } },
});

// #endregion

export default parameters;
