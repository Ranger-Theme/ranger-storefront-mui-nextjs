import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyled from '@/components/GlobalStyled'
import Header from '@/components/Header'
import { cache } from '@/config/cache'
import { emotionTheme } from '@/config/emotion'
import { muiTheme } from '@/config/mui'
import EmotionRegistry from '@/lib/emotion/registry'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <EmotionRegistry cacheOptions={cache} muiTheme={muiTheme} emotionTheme={emotionTheme}>
        <GlobalStyled />
        <Header />
        <Component {...pageProps} />
      </EmotionRegistry>
    </>
  )
}
