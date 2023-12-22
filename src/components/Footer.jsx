import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faDiscord, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import WeMakeDevs from '@/images/logos/WeMakeDevs.jpg'
import ContentCreators4Cs from '@/images/logos/ContentCreators4Cs.jpg'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="text-center">
          <p className="font-display text-base text-slate-900">
            Community Partners: Other great communities we collaborate with
          </p>
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {[
              [
                { name: 'WeMakeDevs', logo: WeMakeDevs },
                { name: '4C', logo: ContentCreators4Cs },
              ],
            ].map((group, groupIndex) => (
              <li key={groupIndex}>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  {group.map((company) => (
                    <li key={company.name} className="flex">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        unoptimized
                        width="50"
                      />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#moderators">Moderators</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://discord.com/invite/jZQs6Wu/"
              className="group"
              aria-label="EddieHub on Discord"
            >
              <FontAwesomeIcon icon={faDiscord} size='xl' />
            </Link>
            <Link
              href="https://github.com/EddieHubCommunity"
              className="group"
              aria-label="EddieHub on GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size='xl' />
            </Link>
            <Link
              href="https://twitter.com/eddiejaoude"
              className="group"
              aria-label="EddieHub on Twitter"
            >
              <FontAwesomeIcon icon={faXTwitter} size='xl' />
            </Link>
            <Link
              href="https://www.linkedin.com/company/eddiehub/"
              className="group"
              aria-label="EddieHub on LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size='xl' />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} JaoudeStudios Ltd
          </p>
        </div>
      </Container>
    </footer>
  )
}
