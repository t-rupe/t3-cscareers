import { createClient } from 'next-sanity';
import { config } from './sanity.config';
import path from 'path';

const sanityClient = createClient(config);

export const getClient = () => createClient(config);
export const rootFolder = path.join(__dirname, '../');

export default sanityClient;
