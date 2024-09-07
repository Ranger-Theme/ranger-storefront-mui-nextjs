import { Suspense } from 'react'

import Navigation from '@/components/Navigation'
import SignInModal from '@/components/SignInModal'

import { StyledHeader } from './styled'

const Header = () => {
  return (
    <StyledHeader>
      <Suspense>
        <Navigation />
      </Suspense>
      <SignInModal />
    </StyledHeader>
  )
}

export default Header
