import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SelectUniversityPage = () => {
  return (
    <div>
      <header className='relative flex items-center justify-between px-12 pt-4 mb-7'>
        <Link href="/shop">
          <div className='flex justify-center items-center w-9 border border-gray-300 rounded-full aspect-square'>
            <Image src='/page-vectors/back-arrow.svg' width={20} height={20} alt='' />
          </div>
        </Link>
        <Link href="/">
          <div className=''>
            <Image src='/Trix-Mart-Logo-Blue.png' className='w-32' width={700} height={700} alt='' />
          </div>
        </Link>
      </header>

      <section className='mt-16 mb-20'>
        <h1 className='font-bold text-2xl text-center'>Select where you go</h1>
        <p className='text-lg text-center'>Choose the university you go to find amazing deals and shop</p>
      </section>

      <section className='flex justify-center gap-x-4 gap-y-7 flex-wrap'>
        <div className='bg-gray-200 w-32 h-32 rounded-xl overflow-hidden'>
          <Image src='/nile-logo.png' className='w-full h-full object-cover hover:scale-110 transition-transform' width={700} height={700} alt='' />
        </div>
        <div className='bg-gray-200 w-32 h-32 rounded-xl'>
          <Image src='/Trix-Mart-Logo-Blue.png' className='' width={700} height={700} alt='' />
        </div>
        <div className='bg-gray-200 w-32 h-32 rounded-xl'>
          <Image src='/veritas.png' className='w-full h-full object-cover hover:scale-110 transition-transform' width={700} height={700} alt='' />
        </div>
        <div className='bg-gray-200 w-32 h-32 rounded-xl'>
          <Image src='/Trix-Mart-Logo-Blue.png' className='' width={700} height={700} alt='' />
        </div>
        <div className='bg-gray-200 w-32 h-32 rounded-xl'>
          <Image src='/Trix-Mart-Logo-Blue.png' className='' width={700} height={700} alt='' />
        </div>
      </section>
    </div>
  )
}

export default SelectUniversityPage
