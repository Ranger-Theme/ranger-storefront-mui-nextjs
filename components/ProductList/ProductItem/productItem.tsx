// import { useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Link from 'next/link'

import { StyledAction } from './styled'

const ProductItem = ({ product }: any) => {
  const { url_key, name, small_image } = product
  // const storeConfig = useSelector((state: any) => state.app.storeConfig)
  // const suffix: string = storeConfig?.product_url_suffix ?? ''
  const suffix = ''

  return (
    <div className="grid gap-y-2 content-start">
      <Link className="grid" href={`/${url_key}${suffix}`} title={name}>
        <Image src={small_image.url} alt={small_image.label} width={350} height={350} />
      </Link>
      <Link className="font-semibold text-colorDefault" href={`/${url_key}${suffix}`} title={name}>
        <span dangerouslySetInnerHTML={{ __html: name }} />
      </Link>
      <StyledAction>
        <Button variant="contained">
          <span>Add To Cart</span>
        </Button>
      </StyledAction>
    </div>
  )
}

export default ProductItem
