import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { button as buttonStyles } from '@nextui-org/theme'

import { siteConfig } from '@/src/config/site'
import { title, subtitle } from '@/src/components/primitives'
import { GithubIcon } from '@/src/components/icons'
import Categories from './products/_components/Categories'
import Shops from './shop/_components/Shops'

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='justify-center inline-block max-w-xl text-center'>
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: 'violet' })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: 'mt-4' })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className='flex gap-3'>
        <Link
          isExternal
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'shadow',
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
      <Categories />
      <Shops />
    </section>
  )
}
