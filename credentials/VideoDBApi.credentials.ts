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
	documentationUrl = 'https://docs.videodb.io/';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			required: true,
			typeOptions: { password: true },
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
			url: 'https://api.videodb.io/collection',
			method: 'GET',
			headers: {
				'x-access-token': '={{$credentials.apiKey}}',
				'x-videodb-client': 'videodb-python/0.2.14',
				'Content-Type': 'application/json',
			},
		},
	};
}
