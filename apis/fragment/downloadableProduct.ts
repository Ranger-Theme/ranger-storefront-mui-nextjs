import type { DocumentNode } from '@apollo/client'
import { gql } from '@apollo/client'

export const downloadableProduct: DocumentNode = gql`
  fragment downloadableProduct on DownloadableProduct {
    id
    sku
    name
    url_key
    meta_title
    meta_keyword
    meta_description
    main_image: image {
      label
      url
    }
  }
`
