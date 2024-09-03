import Container from '@mui/material/Container'

const Cart = ({ globalData }) => {
  return (
    <Container maxWidth="sm">
      <div>
        <pre>{JSON.stringify(globalData, null, 2)}</pre>
      </div>
    </Container>
  )
}

export default Cart

export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { globalData: data } }
}
