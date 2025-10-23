import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class VideoDBApi implements ICredentialType {
	name = 'videoDBApi';
	displayName = 'VideoDB API';
	icon = 'file:../nodes/VideoDB/VideoDB.svg' as const;
	documentationUrl = 'https://docs.videodb.io?utm_source=n8n';

	properties: INodeProperties[] = [
		{
			displayName:
				'Get your API key from the <a href="https://console.videodb.io?utm_source=n8n" target="_blank" class="n8n-link">VideoDB Console</a>',
			name: 'apiKeyNotice',
			type: 'notice',
			default:
				'Get your API key from the <a href="https://console.videodb.io?utm_source=n8n" target="_blank" class="n8n-link">VideoDB Console</a>',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			required: true,
			typeOptions: { password: true },
		},
		{
			displayName: 'Base API URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api.videodb.io',
			required: true,
			description: 'The base URL for the VideoDB API.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-access-token': '={{$credentials.apiKey}}',
				'x-videodb-client': 'videodb-python/0.2.14',
				'Content-Type': 'application/json',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			url: '={{$credentials.baseUrl}}/collection',
			method: 'GET',
			headers: {
				'x-access-token': '={{$credentials.apiKey}}',
				'x-videodb-client': 'videodb-python/0.2.14',
				'Content-Type': 'application/json',
			},
		},
	};
}
