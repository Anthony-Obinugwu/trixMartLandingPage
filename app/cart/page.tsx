'use client'
import { Item } from '@radix-ui/react-accordion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

interface cartStuffs {
  id: number
  businessName: string
  productName: string
  price: number
  rating: number
  image: string
  handleDelete: Function
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<cartStuffs[]>([])

  useEffect(() => {
    const storedItems = localStorage.getItem('cart');
    setCartItems(JSON.parse(storedItems ?? '[]'));
  }, [])

  function refreshPage() {
    const storedItems = localStorage.getItem('cart');
    setCartItems(JSON.parse(storedItems ?? '[]'));
  }

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
            return <CartItem id={item.id} businessName='' productName={item.productName} price={item.price} rating={item.rating} image={item.image} handleDelete={() => refreshPage()} />
          })
        }
      </main>
    </div>
  )
}

export default CartPage

const CartItem = (props: cartStuffs,) => {
  return (
    <div className='mx-4 mb-4'>
      <div className='flex items-stretch gap-x-4 rounded-2xl border border-gray-200 hover:shadow-lg overflow-hidden'>
        <Image src={`${props.image}`} className='w-32 h-32 aspect-square object-cover' width={500} height={500} alt='' />
        <div className='flex-1 flex flex-col justify-center'>
          <h1 className='font-bold text-2xl'>{props.productName}</h1>
          <span className='text-lg'>N {props.price}</span>
        </div>
        <div className='flex justify-center items-center w-24 h-32 border-l border-l-gray-200 hover:bg-red-300 active:bg-red-500'
          onClick={() => {
            const storedJsonItems: string = localStorage.getItem('cart') ?? '[]';
            const storedCart: any = JSON.parse(storedJsonItems);

            const newArray = storedCart.filter((item: cartStuffs) => {
              if (item.id !== props.id) {
                return item;
              }
            })

            localStorage.setItem('cart', JSON.stringify(newArray));
            props.handleDelete();
          }}>Delete</div>
      </div>
    </div>
  )
}

