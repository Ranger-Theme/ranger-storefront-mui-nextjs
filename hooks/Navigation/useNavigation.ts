import { useSuspenseQuery } from '@apollo/client'

import { GET_NAV_MENUS } from '@/apis/queries/getNavMenus'

export const useNavigation = () => {
  const { data } = useSuspenseQuery<{ navMenus: any }>(GET_NAV_MENUS)
  const menuList: any[] = data?.navMenus?.[0]?.children ?? []

  return {
    menuList
  }
}
