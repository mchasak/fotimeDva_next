import qs from 'qs'
import { getStrapiURL } from '@/lib/utils'

const baseUrl = getStrapiURL()

async function fetchData(url: string) {
  const authToken = null // we will implement this later getAuthToken() later
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  }

  try {
    const response = await fetch(url, authToken ? headers : {})
    const data = await response.json()
    // console.log('data', data.data.blocks)

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function getHomePageData() {
  const url = new URL('/api/home-page', baseUrl)

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          'layout.hero-section': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              link: {
                populate: true,
              },
              advantages: {
                populate: true,
              },
            },
          },
          'layout.services': {
            populate: {
              service: {
                populate: {
                  image: {
                    fields: ['url', 'alternativeText'],
                  },
                },
              },
            },
          },
          'layout.text-block': {
            populate: {
              link: {
                populate: true,
              },
            },
          },
          'layout.work-process': {
            populate: {
              step: true,
            },
          },
          'layout.mini-gallery': {
            populate: {
              images: {
                fields: ['url', 'alternativeText'],
              },
              link: {
                populate: true,
              },
            },
          },
          'layout.reviews': {
            populate: {
              reviews: {
                populate: {
                  avatar: {
                    fields: ['url', 'alternativeText'],
                  },
                },
              },
            },
          },
          'layout.blog-section': {
            populate: {
              blog: {
                populate: {
                  image: {
                    fields: ['url', 'alternativeText'],
                  },
                },
              },
            },
          },
          'layout.cta': {
            populate: {
              links: {
                populate: true,
              },
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
        },
      },
    },
  })

  return await fetchData(url.href)
}

export async function getGlobalData() {
  const url = new URL('/api/global', baseUrl)

  url.search = qs.stringify({
    populate: {
      header: {
        populate: {
          logo: {
            populate: {
              logo: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          link: {
            populate: true,
          },
          button: {
            populate: true,
          },
        },
      },
      footer: {
        populate: {
          logo: {
            populate: {
              logo: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          socials: {
            populate: {
              link: true,
            },
          },
        },
      },
    },
  })

  return await fetchData(url.href)
}

export async function getGLobalPageMetaData() {
  const url = new URL('/api/global', baseUrl)

  url.search = qs.stringify({
    fields: ['title', 'description'],
  })

  return await fetchData(url.href)
}
