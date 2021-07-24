import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'

const metaDescription = 'GIF searching!'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>GIF search</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content={metaDescription} />
			</Head>

			<Component {...pageProps} />
		</>
	)
}
