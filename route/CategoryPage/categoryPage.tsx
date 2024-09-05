import CategoryGrid from '@/components/CategoryGrid'

const CategoryPage = ({ data }: any) => {
  const showProducts: boolean = data.display_mode !== 'PAGES'

  return (
    <article>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      {showProducts && <CategoryGrid id={data.id} />}
    </article>
  )
}

export default CategoryPage
