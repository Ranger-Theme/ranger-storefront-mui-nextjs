import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import { GET_STORE_CONFIG } from '@/apis/queries/getStoreConfig'
import { lruCache } from '@/utils/cache'

export const fetchGlobalData = async (client: ApolloClient<NormalizedCacheObject>) => {
  try {
    const cacheKey: string = 'AppConfig'
    const cachedData = lruCache.get(cacheKey)

    if (!cachedData) {
      const { data } = await client.query({
        query: GET_STORE_CONFIG,
        fetchPolicy: 'cache-first'
      })

      // Save app config to cache
      lruCache.set(cacheKey, data)

      return data
    }

    return cachedData
  } catch (error) {
    console.error('Error fetching global data:', error)
    return null
  }
}
