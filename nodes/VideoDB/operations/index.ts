import videos from './videos';
import audio from './audio';
import image from './image';
import client from './client';
import collection from './collection';
import timeline from './timeline';

const allOperations = [...videos, ...audio, ...image, ...client, ...collection, ...timeline];

const map = Object.fromEntries(allOperations.map((op) => [op.key, op]));

const allOperationDetails = allOperations.map((op) => op.details);
const allOperationParameters = allOperations.flatMap((op) => op.parameters);

export {
	map as OPERATIONS,
	allOperationDetails as OPERATION_DETAILS,
	allOperationParameters as OPERATION_PARAMETERS,
};
