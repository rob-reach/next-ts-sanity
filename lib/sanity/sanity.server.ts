import {createClient} from 'next-sanity';
import {config} from './config';

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Helper function to get the sanity client
export const getClient = () => (sanityClient)