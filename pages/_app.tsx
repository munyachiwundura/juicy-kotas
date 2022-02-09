import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <SessionProvider session={pageProps.session}>
  <Head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"/>
  </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </SessionProvider>
  </>
  )
}

export default MyApp
