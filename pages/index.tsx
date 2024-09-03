import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

import { GET_STORE_CONFIG } from '@/api/queries/getStoreConfig'
import { addApolloState, initializeApollo } from '@/lib/apollo/client'

const Home = ({ currency, storeConfig }) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example
        </Typography>
        <Button color="primary" variant="contained">
          <span>Button</span>
        </Button>
        <div>
          <Link href="/cart">Cart</Link>
        </div>
      </Box>
      <div>
        <pre>{JSON.stringify(currency, null, 2)}</pre>
        <pre>{JSON.stringify(storeConfig, null, 2)}</pre>
      </div>
    </Container>
  )
}

export default Home

export const getServerSideProps = async () => {
  const client = initializeApollo()

  const { data } = await client.query({
    query: GET_STORE_CONFIG,
    fetchPolicy: 'cache-first'
  })

  // Pass data to the page via props
  return addApolloState(client, {
    props: { ...data }
  })
}
