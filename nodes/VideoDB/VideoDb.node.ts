import {
	NodeConnectionType,
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
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

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const results: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const operationKey = this.getNodeParameter('operation', i) as string;
			const operation = OPERATIONS[operationKey];
			const params: Record<string, any> = {};
			for (const param of operation.parameters) {
				params[param.name] = this.getNodeParameter(param.name, i);
			}
			const credentials = await this.getCredentials('videoDBApi');
			const baseUrl = credentials.baseUrl || 'https://api.videodb.io';
			const endpoint =
				typeof operation.endpoint === 'function' ? operation.endpoint(params) : operation.endpoint;
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
			results.push({ json: response });
		}
		return [results];
	}
}
