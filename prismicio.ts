import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import { PrismicDocument } from '@prismicio/types';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);
export const apiEndpoint = `https://${repositoryName}.prismic.io/api/v2`;
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

// eslint-disable-next-line import/extensions
import sm from './sm.json';

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc: PrismicDocument) {
    switch (doc.type) {
        case 'homepage':
            return '/';
        case 'page':
            return `/${doc.uid}`;
        default:
            return '/';
    }
}

// This factory function allows smooth preview setup
export function createClient(config: any) {
    const client = prismic.createClient(endpoint, {
        ...config,
    });

    enableAutoPreviews({
        client,
        context: config.context,
        req: config.req,
    } as any);

    return client;
}
