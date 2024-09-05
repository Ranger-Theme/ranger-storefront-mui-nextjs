import Container from '@mui/material/Container'
import { isNull } from 'lodash-es'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { GET_ROUTE } from '@/api/queries/getRoute'
import { addApolloState, initializeApollo } from '@/lib/apollo/client'
import { cache } from '@/utils/cache'

const CategoryPage = dynamic(() => import('@/route/CategoryPage'))
const ProductPage = dynamic(() => import('@/route/ProductPage'))
// const CmsPage = dynamic(() => import('@/route/CmsPage'))

const Resolver = (props: any) => {
  return (
    <Container>
      <p>Resolver Page</p>
      <Link href="/">Home</Link>
      <div>
        <div>
          <Link href="/men/tops-men/jackets-men.html">Jackets - Men</Link>
        </div>
        <div>
          <Link href="/women/tops-women/jackets-women.html">Jacket - Women</Link>
        </div>
        <div>
          <Link href="/montana-wind-jacket.html">Jacket</Link>
        </div>
        <div>
          <Link href="/404">404</Link>
        </div>
      </div>
      {props?.route?.type === 'CATEGORY' && <CategoryPage data={props.route} />}
      {props?.route?.type === 'PRODUCT' && <ProductPage data={props.route} />}
      {/* {data?.type === 'CMS_PAGE' && <CmsPage identifier={} />} */}
    </Container>
  )
}

export default Resolver

export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
  const client = initializeApollo()
  const urlKey: string = resolvedUrl.split('?')?.shift() || ''
  const search: string = resolvedUrl.split('?')?.pop() || ''
  const isClient: boolean = !req || (req.url && req.url.startsWith('/_next/data'))

  const { data } = await client.query({
    query: GET_ROUTE,
    variables: {
      url: urlKey
    }
  })
  const route = data?.route ?? {}

  if (isNull(route) && !isClient) res.statusCode = 404

  return addApolloState(client, {
    props: { route, search, urlKey }
  })
}
