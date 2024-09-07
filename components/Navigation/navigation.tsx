// import { useSelector } from 'react-redux'
import Link from 'next/link'

import { useNavigation } from '@/hooks/Navigation'

import { StyledMenuItem, StyledNav } from './styled'

const Navigation = () => {
  const { menuList } = useNavigation()
  // const storeConfig = useSelector((state: any) => state.app.storeConfig)
  // const suffix: string = storeConfig?.category_url ?? ''
  const suffix = '.html'

  return (
    <StyledNav>
      {menuList.map((menu) => {
        const { url_path, name } = menu
        return (
          <StyledMenuItem key={url_path}>
            <Link className="items-center inline-flex" href={`/${url_path}${suffix}`} title={name}>
              <span dangerouslySetInnerHTML={{ __html: name }} />
            </Link>
          </StyledMenuItem>
        )
      })}
    </StyledNav>
  )
}

export default Navigation
