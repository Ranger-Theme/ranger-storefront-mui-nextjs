import Link from 'next/link'

const ProductPage = ({ data }: any) => {
  return (
    <div>
      <Link href="/women/bottoms-women/pants-women.html">
        <span>Pants - Bottoms - Women</span>
      </Link>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}

export default ProductPage
