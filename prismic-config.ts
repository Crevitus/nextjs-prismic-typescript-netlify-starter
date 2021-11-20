export const repoName = process.env.PRISMIC_REPO_NAME;
export const apiEndpoint = `https://${repoName}.prismic.io/api/v2`;
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
    if (doc.type === 'page') {
        return `/${doc.uid}`;
    }
    return '/';
};

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const Router = {
    routes: [
        {
            'type':'page',
            'path':'/:uid'
        },
    ]
};
