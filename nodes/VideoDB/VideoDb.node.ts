import {
	NodeConnectionType,
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
	type ILoadOptionsFunctions,
	type INodePropertyOptions,
	NodeApiError,
	JsonObject,
	NodeOperationError,
} from 'n8n-workflow';
import { OPERATIONS, OPERATION_DETAILS, OPERATION_PARAMETERS } from './operations';

export class VideoDb implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'VideoDB',
		name: 'videoDb',
		group: ['transform'],
		icon: 'file:VideoDB.svg',
		version: 1,
		subtitle: '={{ $parameter["operation"] }}',
		description: 'Interact with the VideoDB API',
		defaults: { name: 'VideoDB' },
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [{ name: 'videoDBApi', required: true }],
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: OPERATION_DETAILS,
				default: 'fetchVideos',
				required: true,
			},
			...OPERATION_PARAMETERS,
		],
	};

	methods = {
		loadOptions: {
			async getCollections(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('videoDBApi');
				const baseUrl = credentials.baseUrl || 'https://api.videodb.io';
				const response = await this.helpers.httpRequestWithAuthentication.call(this, 'videoDBApi', {
					method: 'GET',
					url: `${baseUrl}/collection`,
					json: true,
				});

				if (!response?.data?.collections || !Array.isArray(response?.data?.collections)) {
					return [];
				}

				return response.data.collections.map((collection: any) => ({
					name: collection.name,
					value: collection.id,
					description: 'ID: ' + collection.id,
				}));
			},
			async getVideosInCollection(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const collectionId = this.getCurrentNodeParameter('collection_id') as string;
				if (!collectionId) {
					return [];
				}
				const credentials = await this.getCredentials('videoDBApi');
				const baseUrl = credentials.baseUrl || 'https://api.videodb.io';
				const response = await this.helpers.httpRequestWithAuthentication.call(this, 'videoDBApi', {
					method: 'GET',
					url: `${baseUrl}/video`,
					qs: {
						collection_id: collectionId,
					},
					json: true,
				});

				if (!response?.data?.videos || !Array.isArray(response?.data?.videos)) {
					return [];
				}

				return response.data.videos.map((video: any) => ({
					name: video.name || video.id,
					value: video.id,
					description: 'ID: ' + video.id,
				}));
			},
			async getAudiosInCollection(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const collectionId = this.getCurrentNodeParameter('collection_id') as string;
				if (!collectionId) {
					return [];
				}
				const credentials = await this.getCredentials('videoDBApi');
				const baseUrl = credentials.baseUrl || 'https://api.videodb.io';
				const response = await this.helpers.httpRequestWithAuthentication.call(this, 'videoDBApi', {
					method: 'GET',
					url: `${baseUrl}/audio`,
					qs: {
						collection_id: collectionId,
					},
					json: true,
				});

				if (!response?.data?.audios || !Array.isArray(response?.data?.audios)) {
					return [];
				}

				return response.data.audios.map((audio: any) => ({
					name: audio.name || audio.id,
					value: audio.id,
					description: 'ID: ' + audio.id,
				}));
			},
			async getImagesInCollection(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const collectionId = this.getCurrentNodeParameter('collection_id') as string;
				if (!collectionId) {
					return [];
				}
				const credentials = await this.getCredentials('videoDBApi');
				const baseUrl = credentials.baseUrl || 'https://api.videodb.io';
				const response = await this.helpers.httpRequestWithAuthentication.call(this, 'videoDBApi', {
					method: 'GET',
					url: `${baseUrl}/image`,
					qs: {
						collection_id: collectionId,
					},
					json: true,
				});

				if (!response?.data?.images || !Array.isArray(response?.data?.images)) {
					return [];
				}

				return response.data.images.map((image: any) => ({
					name: image.name || image.id,
					value: image.id,
					description: 'ID: ' + image.id,
				}));
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const results: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			try {
				const operationKey = this.getNodeParameter('operation', i) as string;
				const operation = OPERATIONS[operationKey];
				if (!operation) {
					throw new NodeOperationError(this.getNode(), `Unknown operation: ${operationKey}`, {
						itemIndex: i,
					});
				}
				const params: Record<string, any> = {};
				for (const param of operation.parameters) {
					params[param.name] = this.getNodeParameter(param.name, i);
				}
				const credentials = await this.getCredentials('videoDBApi');
				const baseUrl = credentials.baseUrl || 'https://api.videodb.io';
				const endpoint =
					typeof operation.endpoint === 'function'
						? operation.endpoint(params)
						: operation.endpoint;
				const requestOptions: any = {
					method: operation.method,
					url: `${baseUrl}${endpoint}`,
					headers: {
						'x-access-token': credentials.apiKey!,
					},
				};
				if (operation.method === 'GET') {
					requestOptions.qs = operation.buildQuery(params);
				} else {
					requestOptions.body = operation.buildBody(params);
					requestOptions.json = true;
				}
				const response = await this.helpers.httpRequestWithAuthentication.call(
					this,
					'videoDBApi',
					requestOptions,
				);
				results.push({ json: response, pairedItem: { item: i } });
			} catch (error) {
				if (this.continueOnFail()) {
					results.push({
						json: { error: error.message ?? 'Unknown error occurred' },
						pairedItem: { item: i },
					});
					continue;
				}
				throw new NodeApiError(this.getNode(), error as JsonObject);
			}
		}
		return [results];
	}
}
