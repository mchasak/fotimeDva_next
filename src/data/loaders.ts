import qs from 'qs'
import { getStrapiURL } from '@/lib/utils'

async function fetchData(url: string) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function getAllServicesSlugs() {
  const baseUrl = getStrapiURL()
  if (!baseUrl) return null

  const url = new URL('/api/services', baseUrl)
  url.search = qs.stringify({ fields: ['slug'] })

  return await fetchData(url.href)
}

export async function getGlobalPageMetadata() {
  const fallback = {
    title: 'Fotíme Dva',
    description: 'Profesionální focení',
  }

  const baseUrl = getStrapiURL()
  if (!baseUrl) {
    console.warn('NEXT_PUBLIC_STRAPI_URL is missing')
    return fallback
  }

  try {
    const url = new URL('/api/global', baseUrl)

    url.search = qs.stringify({
      fields: ['title', 'description'],
    })

    const res = await fetch(url.href, {
      next: { revalidate: 60 },
    })

    if (!res.ok) return fallback

    const json = await res.json()

    return {
      title: json?.data?.attributes?.title ?? fallback.title,
      description: json?.data?.attributes?.description ?? fallback.description,
    }
  } catch (err) {
    console.error('Metadata fetch failed:', err)
    return fallback
  }
}

export async function getGlobalData() {
  const baseUrl = getStrapiURL()
  if (!baseUrl) return null

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

export async function getHomePageData() {
  const baseUrl = getStrapiURL()
  if (!baseUrl) return null

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

export async function getAboutUsData() {
  const baseUrl = getStrapiURL()
  if (!baseUrl) return null

  const url = new URL('/api/about-us', baseUrl)

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
          'layout.text-block': {
            populate: {
              link: {
                populate: true,
              },
            },
          },
          'layout.text-image': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          'layout.work-preview': {
            populate: {
              images: {
                fields: ['url', 'alternativeText'],
              },
              link: {
                populate: true,
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

export async function getGalleryData() {
  const baseUrl = getStrapiURL()
  if (!baseUrl) return null

  const url = new URL('/api/gallery-component', baseUrl)

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
          'layout.image-list': {
            populate: {
              image: {
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

export async function getServicePageData(slug: string) {
  const baseUrl = getStrapiURL()
  if (!baseUrl) return null

  const url = new URL(`/api/services`, baseUrl)

  url.search = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
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
          'layout.text-block': {
            populate: {
              link: {
                populate: true,
              },
            },
          },
          'layout.service-item': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              list: {
                populate: true,
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

export async function getServicesData() {
  const baseUrl = getStrapiURL()
  if (!baseUrl) return null

  const url = new URL('/api/service-page', baseUrl)

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

export async function getContactPageData() {
  const baseUrl = getStrapiURL()
  if (!baseUrl) return null

  const url = new URL('/api/contact', baseUrl)

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
          'layout.text-block': {
            populate: {
              link: {
                populate: true,
              },
            },
          },
          'layout.contact-form': {
            populate: {
              socials: {
                populate: {
                  link: true,
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

// export async function getArticles() {
//   const url = new URL('/api/articles', baseUrl)

//   url.search = qs.stringify({
//     populate: {
//       thumbnail: {
//         fields: ['url', 'alternativeText'],
//       },
//       author: {
//         fields: ['name'],
//       },
//     },
//   })

//   return await fetchData(url.href)
// }

// export async function getArticleBySlug(slug: string) {
//   const url = new URL('/api/articles', baseUrl)

//   url.search = qs.stringify({
//     filters: {
//       slug: {
//         $eq: slug,
//       },
//     },
//     populate: {
//       thumbnail: {
//         fields: ['url', 'alternativeText'],
//       },
//       // author: {
//       //   fields: ['name'],
//       // },
//       text: {
//         populate: true,
//       },
//       content: {
//         populate: true, // Pokud máš rich text nebo bloky
//       },
//     },
//   })

//   const data = await fetchData(url.href)
//   return data?.data?.[0] || null
// }
