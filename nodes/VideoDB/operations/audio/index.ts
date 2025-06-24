import parameters from './parameters';

const operations = [
	{
		key: 'generateAudioUrl',
		endpoint: (params: any) => `/audio/${params.audio_id}/generate_url`,
		method: 'POST',
		details: {
			name: 'Generate Audio URL',
			value: 'generateAudioUrl',
			description: 'Generates a temporary, signed URL to access the audio file',
			action: 'Generate Audio URL',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('generateAudioUrl'),
		),
		buildQuery: (params: any) => ({ collection_id: params.collection_id }),
		buildBody: () => ({}),
	},
	{
		key: 'deleteAudio',
		endpoint: (params: any) => `/audio/${params.audio_id}`,
		method: 'DELETE',
		details: {
			name: 'Delete Audio',
			value: 'deleteAudio',
			description: 'Permanently deletes the audio file',
			action: 'Delete Audio',
		},
		parameters: parameters.filter((p) =>
			p.displayOptions?.show?.operation?.includes('deleteAudio'),
		),
		buildQuery: () => ({}),
		buildBody: () => ({}),
	},
];

export default operations;
