import type { FC } from 'react'

interface CmsPageProps {
  data: any
}

const CmsPage: FC<CmsPageProps> = ({ data }) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default CmsPage
