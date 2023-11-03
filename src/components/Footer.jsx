import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

import DiscordLogo from '@/images/logos/discord.svg'
import GitHubLogo from '@/images/logos/github.svg'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Features</NavLink>
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
              <Image src={DiscordLogo} width="30" height="30" />
            </Link>
            <Link
              href="https://github.com/EddieHubCommunity"
              className="group"
              aria-label="EddieHub on GitHub"
            >
              <Image src={GitHubLogo} width="30" height="30" />
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
