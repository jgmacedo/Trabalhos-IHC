import Link from "next/link"

interface NavigationProps {
  activeLink?: string
}

export default function Navigation({ activeLink }: NavigationProps) {
  return (
    <nav className="w-full max-w-4xl mx-auto flex flex-wrap justify-center md:justify-between items-center p-4 border-b border-gray-800">
      <Link href="/" className={`nav-link ${activeLink === "home" ? "text-yellow-200" : ""}`}>
        Home
      </Link>
      <Link href="/mythology" className={`nav-link ${activeLink === "mythology" ? "text-yellow-200" : ""}`}>
        Mythology
      </Link>
      <Link href="/filmmakers" className={`nav-link ${activeLink === "filmmakers" ? "text-yellow-200" : ""}`}>
        Filmmakers
      </Link>
      <Link href="/aftermath" className={`nav-link ${activeLink === "aftermath" ? "text-yellow-200" : ""}`}>
        Aftermath
      </Link>
      <Link href="/legacy" className={`nav-link ${activeLink === "legacy" ? "text-yellow-200" : ""}`}>
        Legacy
      </Link>
      <Link href="/timeline" className={`nav-link ${activeLink === "timeline" ? "text-yellow-200" : ""}`}>
        Timeline
      </Link>
    </nav>
  )
}
