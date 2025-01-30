import type { Block } from '@/types'

import { HeroSection } from '@/components/blocks/HeroSection'
import { Services } from '@/components/blocks/Services'
import { TextBlock } from '@/components/blocks/TextBlock'
import { WorkFlow } from '@/components/blocks/WorkFlow'
import { MiniGallery } from '@/components/blocks/MiniGallery'
import { Reviews } from '@/components/blocks/Reviews'
import { CTA } from '@/components/blocks/CTA'
import { BlogSection } from '@/components/blocks/BlogSection'

export function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case 'layout.hero-section':
      return <HeroSection {...block} key={index} />
    case 'layout.services':
      return <Services {...block} key={index} />
    case 'layout.text-block':
      return <TextBlock {...block} key={index} />
    case 'layout.work-process':
      return <WorkFlow {...block} key={index} />
    case 'layout.mini-gallery':
      return <MiniGallery {...block} key={index} />
    case 'layout.reviews':
      return <Reviews {...block} key={index} />
    case 'layout.blog-section':
      return <BlogSection {...block} key={index} />
    case 'layout.cta':
      return <CTA {...block} key={index} />
    default:
      return null
  }
}
