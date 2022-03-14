import { CssBaseline, ThemeProvider } from '@mui/material';
import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { theme } from 'src/styles/theme';

import { linkResolver, repositoryName } from '../services/prismic';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <PrismicProvider
                    linkResolver={linkResolver as any}
                    internalLinkComponent={({ href, children, ...props }) => (
                        <Link href={href}>
                            <a {...props} />
                        </Link>
                    )}
                >
                    <PrismicPreview repositoryName={repositoryName}>
                        <Component {...pageProps} />
                    </PrismicPreview>
                </PrismicProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
