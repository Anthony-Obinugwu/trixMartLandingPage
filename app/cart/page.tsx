'use client'
import { Item } from '@radix-ui/react-accordion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface cartStuffs {
  id: number
  businessName: string
  productName: string
  price: number
  rating: number
  image: string
}

const CartPage = () => {
  const storedItems = localStorage.getItem('cart');
  const cartItems: Array<cartStuffs> = JSON.parse(storedItems ?? '[]');

  return (
    <div className='font-montserrat'>
      <header className='relative flex justify-center px-2 pt-4 mb-7'>
        <Link href="/shop">
          <div className='absolute left-2 flex justify-center items-center w-9 border border-gray-300 rounded-full aspect-square'>
            <Image src='/page-vectors/back-arrow.svg' width={20} height={20} alt='' />
          </div>
        </Link>
        <h1 className='font-bold text-3xl'>Cart</h1>
      </header>

      <main>
        {
          cartItems.map((item) => {
            return <CartItem id={item.id} businessName='' productName={item.productName} price={item.price} rating={item.rating} image={item.image} />
          })
        }
      </main>
    </div>
  )
}

export default CartPage

const CartItem = (props: cartStuffs) => {
  return (
    <div className='mx-4 mb-4'>
      <div className='flex items-stretch gap-x-4 rounded-2xl border border-gray-200 hover:shadow-lg overflow-hidden'>
        <Image src={`${props.image}`} className='w-32 h-32 aspect-square object-cover' width={500} height={500} alt='' />
        <div className='flex-1 flex flex-col justify-center'>
          <h1 className='font-bold text-2xl'>{props.productName}</h1>
          <span className='text-lg'>N {props.price}</span>
        </div>
        <div className='flex justify-center items-center w-24 h-32 border-l border-l-gray-200 hover:bg-red-300 active:bg-red-500'
          onClick={() => { }}>Delete</div>
      </div>
    </div>
  )
}

