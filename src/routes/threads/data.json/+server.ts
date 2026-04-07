import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public';
import { iterateAllThreads } from '../helpers';

/* short-circuit for build runs on CI from external contributors */
function shouldSkipThreadsPrerender(): boolean {
    const endpoint = PUBLIC_APPWRITE_ENDPOINT;
    const project = PUBLIC_APPWRITE_PROJECT_ID;
    return (
        !endpoint ||
        !project ||
        project === 'placeholder' ||
        endpoint.includes('appwrite.test')
    );
}

export const prerender = true;

export const GET: RequestHandler = async () => {
    if (shouldSkipThreadsPrerender()) {
        return json([]);
    }

    try {
        const ids = [];
        for await (const thread of iterateAllThreads()) {
            ids.push(thread.$id);
        }
        return json(ids);
    } catch {
        // During static builds, Appwrite credentials may be invalid/missing; never fail prerender.
        return json([]);
    }
};
