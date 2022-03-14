import * as prismic from '@prismicio/client';
import { Client, ClientConfig } from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import { PrismicDocument } from '@prismicio/types';

// eslint-disable-next-line import/extensions
import sm from '../../sm.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);
export const apiEndpoint = `https://${repositoryName}.prismic.io/api/v2`;
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

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

export function getPrismicClient(config: ClientConfig): Client {
    const client = prismic.createClient(endpoint, {
        ...config,
        accessToken: accessToken,
    });

    const autoPreviewConfig = config as any;
    enableAutoPreviews({
        client,
        context: autoPreviewConfig.context,
        req: autoPreviewConfig.req,
    } as any);

    return client;
}
