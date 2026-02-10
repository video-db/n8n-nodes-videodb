import type { INodeProperties } from 'n8n-workflow';

const parameters: INodeProperties[] = [];

// #region Shared Parameters

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

// Index a video (spoken words)
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['indexSpokenWords'] } },
	},
	{
		...videoIdProperty,
		description: 'The ID of the video to index',
		displayOptions: { show: { operation: ['indexSpokenWords'] } },
	},
	{
		displayName: 'Language',
		name: 'language_code',
		type: 'options',
		default: 'en',
		description: 'Language code for indexing',
		options: [
			{
				name: 'American English',
				value: 'en_us',
			},
			{
				name: 'Australian English',
				value: 'en_au',
			},
			{
				name: 'British English',
				value: 'en_uk',
			},
			{
				name: 'Chinese',
				value: 'zh',
			},
			{
				name: 'Dutch',
				value: 'nl',
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
				name: 'Global English',
				value: 'en',
			},
			{
				name: 'Hindi',
				value: 'hi',
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
				name: 'Polish',
				value: 'pl',
			},
			{
				name: 'Portuguese',
				value: 'pt',
			},
			{
				name: 'Russian',
				value: 'ru',
			},
			{
				name: 'Spanish',
				value: 'es',
			},
			{
				name: 'Turkish',
				value: 'tr',
			},
			{
				name: 'Ukrainian',
				value: 'uk',
			},
			{
				name: 'Vietnamese',
				value: 'vi',
			},
		],
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
		...collectionIdProperty,
		displayOptions: { show: { operation: ['getTranscript'] } },
	},
	{
		...videoIdProperty,
		description: 'The ID of the video',
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
		...collectionIdProperty,
		displayOptions: { show: { operation: ['searchInVideo'] } },
	},
	{
		...videoIdProperty,
		description: 'The ID of the video to search within',
		displayOptions: { show: { operation: ['searchInVideo'] } },
	},
	{
		displayName: 'Search Type',
		name: 'search_type',
		type: 'options',
		options: [
			{ name: 'Semantic', value: 'semantic' },
			{ name: 'Keyword', value: 'keyword' },
			{ name: 'Scene', value: 'scene' },
		],
		required: true,
		default: 'semantic',
		description: 'Type of search (semantic, keyword, scene, etc)',
		displayOptions: { show: { operation: ['searchInVideo'] } },
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
		displayOptions: { show: { operation: ['searchInVideo'] } },
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		description: 'Search query',
		displayOptions: { show: { operation: ['searchInVideo'] } },
	},
	{
		displayName: 'Score Threshold',
		name: 'score_threshold',
		type: 'number',
		default: 0.0,
		displayOptions: { show: { operation: ['searchInVideo'] } },
	},
	{
		displayName: 'Result Threshold',
		name: 'result_threshold',
		type: 'number',
		default: 10,
		displayOptions: { show: { operation: ['searchInVideo'] } },
	},
	{
		displayName: 'Dynamic Score Percentage',
		name: 'dynamic_score_percentage',
		type: 'number',
		default: 0.0,
		displayOptions: { show: { operation: ['searchInVideo'] } },
	},
);

const videoOperations = [
	'deleteVideo',
	'generateStream',
	'generateThumbnail',
	'getDefaultThumbnail',
	'getThumbnails',
	'extractScenes',
	'listSceneCollections',
	'deleteSceneCollection',
	'getSceneCollection',
	'indexScenes',
	'addSubtitle',
	'translateTranscript',
];

for (const operation of videoOperations) {
	parameters.push(
		{
			...collectionIdProperty,
			displayOptions: { show: { operation: [operation] } },
		},
		{
			...videoIdProperty,
			description: 'The ID of the video',
			displayOptions: { show: { operation: [operation] } },
		},
	);
}

parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['removeStorage'] } },
	},
	{
		...videoIdProperty,
		description: 'The ID of the video',
		displayOptions: { show: { operation: ['removeStorage'] } },
	},
);

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
parameters.push(
	{
		displayName: 'Time',
		name: 'time',
		type: 'number',
		default: 1,
		description: 'The specific time in seconds from which to generate the thumbnail',
		displayOptions: { show: { operation: ['generateThumbnail'] } },
	},
	{
		...collectionIdProperty,
		description: 'The ID of the collection',
		displayOptions: { show: { operation: ['generateThumbnail'] } },
	},
);

// Translate Transcript
parameters.push(
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
		default: 'time',
		description: 'The method for scene extraction',
		displayOptions: { show: { operation: ['extractScenes'] } },
	},
	{
		displayName: 'Extraction Config',
		name: 'extraction_config',
		type: 'json',
		default: '{}',
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
		default: '{}',
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
		default: '{}',
		description: 'Configuration for the model',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		displayName: 'Scenes (JSON)',
		name: 'scenes',
		type: 'json',
		default: '{}',
		description: 'A list of scenes to be indexed',
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
	{
		...callbackUrlProperty,
		displayOptions: { show: { operation: ['indexScenes'] } },
	},
);

// listSceneIndexes
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['listSceneIndexes'] } },
	},
	{
		...videoIdProperty,
		displayOptions: { show: { operation: ['listSceneIndexes'] } },
	},
);

// getSceneIndex
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['getSceneIndex'] } },
	},
	{
		...videoIdProperty,
		displayOptions: { show: { operation: ['getSceneIndex'] } },
	},
	{
		displayName: 'Scene Index ID',
		name: 'scene_index_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['getSceneIndex'] } },
	},
);

// deleteSceneIndex
parameters.push(
	{
		...collectionIdProperty,
		displayOptions: { show: { operation: ['deleteSceneIndex'] } },
	},
	{
		...videoIdProperty,
		displayOptions: { show: { operation: ['deleteSceneIndex'] } },
	},
	{
		displayName: 'Scene Index ID',
		name: 'scene_index_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['deleteSceneIndex'] } },
	},
);

// Add Subtitle
parameters.push(
	{
		displayName: 'Font Name',
		name: 'fontName',
		type: 'string',
		default: 'Arial',
		description: 'The font family to use for subtitles',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Font Size',
		name: 'fontSize',
		type: 'number',
		default: 18,
		description: 'The size of the subtitle text',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Primary Colour',
		name: 'primaryColour',
		type: 'string',
		default: '&H00FFFFFF',
		description: 'Primary text color in ASS format (e.g., &H00FFFFFF for white)',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Secondary Colour',
		name: 'secondaryColour',
		type: 'string',
		default: '&H000000FF',
		description: 'Secondary text color in ASS format (e.g., &H000000FF for blue)',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Outline Colour',
		name: 'outlineColour',
		type: 'string',
		default: '&H00000000',
		description: 'Outline color in ASS format (e.g., &H00000000 for black)',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Back Colour',
		name: 'backColour',
		type: 'string',
		default: '&H00000000',
		description: 'Background color in ASS format (e.g., &H00000000 for black)',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Bold',
		name: 'bold',
		type: 'boolean',
		default: false,
		description: 'Whether the subtitle text should be bold',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Italic',
		name: 'italic',
		type: 'boolean',
		default: false,
		description: 'Whether the subtitle text should be italic',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Underline',
		name: 'underline',
		type: 'boolean',
		default: false,
		description: 'Whether the subtitle text should be underlined',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Strike Out',
		name: 'strikeOut',
		type: 'boolean',
		default: false,
		description: 'Whether the subtitle text should have a strikethrough',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Scale X',
		name: 'scaleX',
		type: 'number',
		default: 1.0,
		description: 'Horizontal scaling factor for the text',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Scale Y',
		name: 'scaleY',
		type: 'number',
		default: 1.0,
		description: 'Vertical scaling factor for the text',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Spacing',
		name: 'spacing',
		type: 'number',
		default: 0,
		description: 'Extra spacing between characters',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Angle',
		name: 'angle',
		type: 'number',
		default: 0,
		description: 'Rotation angle of the text in degrees',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Border Style',
		name: 'borderStyle',
		type: 'options',
		options: [
			{ name: 'No Border', value: 1 },
			{ name: 'Opaque Box', value: 3 },
			{ name: 'Outline', value: 4 },
		],
		default: 4,
		description: 'The style of the text border',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Outline',
		name: 'outline',
		type: 'number',
		default: 1.0,
		description: 'Width of the text outline',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Shadow',
		name: 'shadow',
		type: 'number',
		default: 0.0,
		description: 'Depth of the text shadow',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Alignment',
		name: 'alignment',
		type: 'options',
		options: [
			{ name: 'Bottom Left', value: 1 },
			{ name: 'Bottom Center', value: 2 },
			{ name: 'Bottom Right', value: 3 },
			{ name: 'Middle Left', value: 4 },
			{ name: 'Middle Center', value: 5 },
			{ name: 'Middle Right', value: 6 },
			{ name: 'Top Left', value: 7 },
			{ name: 'Top Center', value: 8 },
			{ name: 'Top Right', value: 9 },
		],
		default: 2,
		description: 'Position of the subtitles on screen',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Margin Left',
		name: 'marginL',
		type: 'number',
		default: 10,
		description: 'Left margin in pixels',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Margin Right',
		name: 'marginR',
		type: 'number',
		default: 10,
		description: 'Right margin in pixels',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
	{
		displayName: 'Margin Vertical',
		name: 'marginV',
		type: 'number',
		default: 10,
		description: 'Vertical margin in pixels',
		displayOptions: { show: { operation: ['addSubtitle'] } },
	},
);

export default parameters;
