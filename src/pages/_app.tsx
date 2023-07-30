import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import BaseLayout from '@/components/Layouts/Base'
import Post from '@/components/Post'
import { useGlobalStore } from '@/store/global'
import { useEffect } from 'react'
import ScrollToTopButton from '@/components/ScrollToTopButton'

export default function App({ Component, pageProps }: AppProps) {
	const isDarkMode = useGlobalStore(state => state.darkMode);

	useEffect(() => {
		useGlobalStore.persist.rehydrate();
	}, []);

	useEffect(() => {
		console.log('isDarkMode', isDarkMode);
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

	return (
		<>
			<Head>
				<title>Social Seedlings</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<BaseLayout>
				<Component {...pageProps} />
				<ScrollToTopButton />
			</BaseLayout>
		</>
	)
}
