import Link from 'next/link'

interface Props{
    href: string,
    children: string,
}
function NavLink({ children, href }: Props) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a>{children}</a>
    </Link>
  )
}

export default NavLink