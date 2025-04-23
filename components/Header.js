import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          RingVio
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="text-gray-700 hover:text-indigo-600">
            Features
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-indigo-600">
            About
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-indigo-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
