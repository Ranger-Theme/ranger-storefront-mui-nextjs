import type { FC } from 'react'
import { useSuspenseQuery } from '@apollo/client'

import { GET_CMS_PAGE } from '@/api/queries/getCmsPage'

interface CmsPageProps {
  identifier: string
}

const CmsPage: FC<CmsPageProps> = ({ identifier }) => {
  const { data } = useSuspenseQuery<{ cmsPage: any }>(GET_CMS_PAGE, {
    variables: { identifier },
    fetchPolicy: 'cache-first',
    errorPolicy: 'ignore'
  })
  const cms: any = data?.cmsPage ?? {}

  return (
    <div>
      <pre>{JSON.stringify(cms, null, 2)}</pre>
    </div>
  )
}

export default CmsPage
