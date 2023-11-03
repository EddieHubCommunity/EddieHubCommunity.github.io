import Image from 'next/image'

import EddieHubLogo from '@/images/logos/eddiehub.png'

export function Logo(props) {
  return (
    <Image
      src={EddieHubLogo}
      alt="EddieHub logo"
      width={383}
      height={75}
      {...props}
    />
  )
}
