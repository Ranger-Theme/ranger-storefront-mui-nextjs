import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

import CmsPage from '@/components/CmsPage'
import { addApolloState, initializeApollo } from '@/lib/apollo/client'
import { fetchGlobalData } from '@/lib/global/fetchGlobal'

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
  const config = await fetchGlobalData(client)

  return addApolloState(client, {
    props: { ...config }
  })
}
