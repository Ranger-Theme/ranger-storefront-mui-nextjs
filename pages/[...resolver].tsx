import { isNull } from 'lodash-es'
import dynamic from 'next/dynamic'

import { GET_ROUTE } from '@/apis/queries/getRoute'
import { routeConf } from '@/config/route'
import { addApolloState, initializeApollo } from '@/lib/apollo/client'
import { fetchGlobalData } from '@/lib/global/fetchGlobal'

const ProductPage = dynamic(() => import('@/route/ProductPage'))
const CategoryPage = dynamic(() => import('@/route/CategoryPage'))
const CmsPage = dynamic(() => import('@/route/CmsPage'))
const NotFoundPage = dynamic(() => import('@/route/NotFoundPage'))

interface ResolverProps {
  type?: string
}

const Resolver = ({ type, ...props }: ResolverProps) => {
  switch (type) {
    case routeConf.CMS_PAGE:
      return <CmsPage {...props} />
    case routeConf.CATEGORY:
      return <CategoryPage {...props} />
    case routeConf.PRODUCT:
      return <ProductPage {...props} />
    default:
      return <NotFoundPage />
  }
}

export default Resolver

export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
  const client = initializeApollo()
  const urlKey: string = resolvedUrl.split('?')?.shift() || ''
  const search: string = resolvedUrl.split('?')?.pop() || ''
  const isClient: boolean = !req || (req.url && req.url.startsWith('/_next/data'))

  const config = await fetchGlobalData(client)

  // Url Resolver Query
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
