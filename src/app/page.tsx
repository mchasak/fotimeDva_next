import { getHomePageData } from '@/data/loaders'

import { blockRenderer } from '@/lib/block-renderer'
import { Block } from '@/types'

// async function loader() {
//   try {
//     // const authToken = process.env.STRAPI_API_TOKEN;
//     const BASE_URL = getStrapiURL()
//     const path = '/api/home-page'
//     const url = new URL(path, BASE_URL)

//     url.search = homePageQuery

//     const data = await fetchAPI(url.href, {
//       method: 'GET',
//     })

//     if (!data.data) notFound()

//     const blocks = data?.data?.attributes.blocks || []
//     return { blocks }
//   } catch (error) {
//     console.error('Error loading data:', error)
//     notFound()
//   }
// }

export default async function Home() {
  const strapiData = await getHomePageData()
  console.log('getHomepagePdata', getHomePageData())
  // console.dir(strapiData, { depth: null })
  const { blocks } = strapiData?.data || []

  return (
    <main>
      {blocks.map((block: Block, index: number) => blockRenderer(block, index))}
    </main>
  )
}

// export default async function HomeRoute() {
//   const data = await loader()
//   const blocks = data.blocks

//   console.log(blocks, 'blocks')
//   return (
//     <div>
//       {blocks.map((block: Block, index: number) => {
//         return blockRenderer(block, index)
//       })}
//     </div>
//   )
// }
