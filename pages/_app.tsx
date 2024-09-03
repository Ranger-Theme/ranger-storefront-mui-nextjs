import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyled from '@/components/GlobalStyled'
import Header from '@/components/Header'
import { cache } from '@/config/cache'
import { emotionTheme } from '@/config/emotion'
import { muiTheme } from '@/config/mui'
import { useApollo } from '@/lib/apollo/client'
import AppProvider from '@/lib/app/registry'
import EmotionRegistry from '@/lib/emotion/registry'

const App = (props: AppProps) => {
  const { Component, pageProps } = props
  const client = useApollo(pageProps)

  return (
    <ApolloProvider client={client}>
      <AppProvider value={pageProps.globalData}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <EmotionRegistry cacheOptions={cache} muiTheme={muiTheme} emotionTheme={emotionTheme}>
          <GlobalStyled />
          <Header />
          <Component {...pageProps} />
        </EmotionRegistry>
      </AppProvider>
    </ApolloProvider>
  )
}

export default App
