import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import BaseLayout from '@/components/Layouts/Base'
import Post from '@/components/Post'
import { useGlobalStore } from '@/store/global'
import { useEffect } from 'react'
import ScrollToTopButton from '@/common/ScrollToTopButton'

export default function App({ Component, pageProps }: AppProps) {
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
