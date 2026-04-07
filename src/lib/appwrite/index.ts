import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public';
import { Client, Databases, Functions, Storage } from '@appwrite.io/console';

export const client = new Client();

// During prerender/CI these env vars may be unset. Keep module initialization safe so
// endpoints can decide to short-circuit instead of crashing on import.
const endpoint = PUBLIC_APPWRITE_ENDPOINT?.trim() || 'http://appwrite.test/v1';
const project = PUBLIC_APPWRITE_PROJECT_ID?.trim() || 'placeholder';
client.setEndpoint(endpoint).setProject(project);

export const databases = new Databases(client);
export const functions = new Functions(client);
export const storage = new Storage(client);
