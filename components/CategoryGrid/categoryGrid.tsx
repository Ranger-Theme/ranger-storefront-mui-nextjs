import { useSuspenseQuery } from '@apollo/client'

import { GET_FILTER_INPUTS } from '@/api/queries/getFilterInputs'
import ProductList from '@/components/ProductList'

const CategoryGrid = ({ id }) => {
  const { data } = useSuspenseQuery<{ __type: any }>(GET_FILTER_INPUTS)
  const inputs: any[] = data?.__type?.inputFields ?? []

  return (
    <div>
      {inputs.length > 0 && (
        <div>
          <ProductList inputs={inputs} id={id} />
        </div>
      )}
    </div>
  )
}

export default CategoryGrid
