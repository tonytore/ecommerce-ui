import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col gap-8 items-center md:flex-row md:items-start md:gap-0 md:justify-between bg-gray-800 p-8 rounded-lg'>
       <div className='flex flex-col items-center gap-4 md:items-start'>
          <Link href="/" className='flex items-center'>
        <Image
            src="/logo.png"
            alt='TrendTonytor'
            width={36}
            height={36}
            className='w-6 h-6 md:w-9 md:h-9'
            />
            <p className='hidden md:block text-base font-medium tracking-wider text-white'>TRENDTONYTOR.</p>
        </Link>
        <p className='text-sm text-gray-400'>&copy; 2025 TrendTonytor</p>
        <p className='text-sm text-gray-400'>All rights reserved</p>
       </div>
       <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
            <p className='text-sm text-amber-50'>Links</p>
            <Link href='/' className='hover:underline'>All Products</Link>
            <Link href='/about' className='hover:underline'>New Arrivals</Link>
            <Link href='/contact' className='hover:underline'>Best Sellers</Link>
            <Link href='/privacy' className='hover:underline'>Sale</Link>
       </div>
        <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
            <p className='text-sm text-amber-50'>Links</p>
            <Link href='/' className='hover:underline'>About</Link>
            <Link href='/about' className='hover:underline'>Contact</Link>
            <Link href='/contact' className='hover:underline'>Blog</Link>
            <Link href='/privacy' className='hover:underline'>Affiliate Program</Link>
       </div>
        </div>
  )
}

export default Footer