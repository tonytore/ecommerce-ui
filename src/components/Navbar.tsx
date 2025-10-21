import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { Bell, Home, ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b shadow border-gray-200 pb-4'>
        {/* LEFT */}
        <Link href="/" className='flex items-center'>
        <Image
            src="/logo.png"
            alt='TrendTonytor'
            width={36}
            height={36}
            className='w-6 h-6 md:w-9 md:h-9'
            />
            <p className='hidden md:block text-base font-medium tracking-wider'>TRENDTONYTOR.</p>
        </Link>
        {/* RIGHT */}
        <div className='flex items-center gap-6'>
            <SearchBar/>
            <Link href='/' className=''>
            <Home className='w-4 h-4 text-gray-600'/>
            </Link>
            <Bell className='w-4 h-4 text-gray-600'/>
            <ShoppingCart className='w-4 h-4 text-gray-600'/>
            <Link href='/login'>Sign in</Link>
        </div>
    </nav>
  )
}

export default Navbar