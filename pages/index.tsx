import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

import { GET_STORE_CONFIG } from '@/apis/queries/getStoreConfig'
import { addApolloState, initializeApollo } from '@/lib/apollo/client'
import CmsPage from '@/route/CmsPage'
import { lruCache } from '@/utils/cache'

const Home = ({ currency, storeConfig }) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example
        </Typography>
        <div>
          <div>
            <Link href="/men/tops-men/jackets-men.html">Jackets - Men</Link>
          </div>
          <div>
            <Link href="/montana-wind-jacket.html">Jacket</Link>
          </div>
        </div>
      </Box>
      <div>
        <pre>{JSON.stringify(currency, null, 2)}</pre>
        <pre>{JSON.stringify(storeConfig, null, 2)}</pre>
      </div>
      <CmsPage identifier={storeConfig.cms_page} />
    </Container>
  )
}

export default Home

export const getServerSideProps = async () => {
  const client = initializeApollo()
  const cacheKey: string = 'AppConfig'
  const cachedData = lruCache.get(cacheKey)

  if (!cachedData) {
    const { data } = await client.query({
      query: GET_STORE_CONFIG,
      fetchPolicy: 'cache-first'
    })

    // Save app config to cache
    lruCache.set(cacheKey, data)

    // Pass data to the page props
    return addApolloState(client, {
      props: { ...data }
    })
  }

  return {
    props: { ...cachedData }
  }
}
