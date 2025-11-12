'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface cartStuffs {
  id: number
  businessName: string
  productName: string
  price: number
  rating: number
  image: string
  handleDelete: Function
}

const page = () => {
  const storedItems = localStorage.getItem('cart');
  const [cartItems, setCartItems] = useState<cartStuffs[]>(JSON.parse(storedItems ?? '[]'));
  const [cartTotal, setCartTotal] = useState<number>(0);

  function refreshPage() {
    const storedStuff = localStorage.getItem('cart');
    setCartItems(JSON.parse(storedStuff ?? '[]'));
  }

  useEffect(() => {
    let tempCartTotal = 0;
    cartItems.forEach((item) => {
      tempCartTotal += item.price;
      setCartTotal(tempCartTotal);
    });
  }, [cartItems]);

  const myStyles = `:root {
  --accent-color-1: white;
  --accent-color-2: rgb(255, 17, 17);
  --accent-color-3: #05ff00;
  --accent-color-4: black;
  --accent-color-5: rgb(250, 250, 250);
  --accent-background: linear-gradient(
    to right,
    rgb(255, 2, 2),
    rgb(230, 0, 255),
    rgb(0, 255, 81)
  );
  --font-size-1: 16px;
  --font-size-2: 14px;
  --button-border-radius: 0px;
  --image-border-radius: 10px;
  --product-border-radius: 10px;
  --grid-column-gap: 10px;
  --grid-row-gap: 20px;
}
* {
  margin: 0px;
  padding: 0px;
}
body {
  font-family: Arial;
  padding-top: 68px;
}
header {
  display: grid;
  grid-template-columns: 155px 1fr max-content;
  border: 1px solid var(--accent-color-2);
  padding: 14px 10px;

  background-color: white;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
}
.error-container {
  display: none;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 50;
}

.error-message {
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  min-width: 200px;
  justify-content: center;
  align-items: center;
  background-color: var(--accent-color-1);
  color: var(--accent-color-4);
  padding: 40px;
  border: 5px solid black;
  border-radius: 20px;
}
.header-title {
  font-size: 25px;
}
.title-accent-colour {
  color: var(--accent-color-2);
  /* background: var(--accent-background); */
  /* background-clip: text; */
  /* color: transparent; */
}
.right-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
}
.link-style {
  color: var(--accent-color-4);
  text-decoration: none;
}
.header-link-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-right: 10px;
}
.header-link {
  font-size: var(--font-size-1);
  font-weight: bold;
  margin: 0px 10px;
  color: var(--accent-color-4);
  text-decoration: none;
  cursor: pointer;
}
.cart-link {
  position: relative;
}
.cart-num {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
  right: -5px;
  border-radius: 8px;
  /* width: 15px;
  height: 15px; */
  padding: 1px;
  color: white;
  font-size: 12px;
  background-color: red;
}
.header-button1 {
  position: relative;
  background: none;
  font-size: var(--font-size-2);
  font-weight: bold;
  border: 2px solid var(--accent-color-3);
  border-radius: var(--button-border-radius);
  padding: 7px 16px;
  margin-right: 5px;
  cursor: pointer;
}
.header-button1::before {
  content: '';
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  background: var(--accent-color-3);
  width: 100%;
  height: 100%;
  transform-origin: 0%;
  transform: scaleX(0%);
  transition: transform 0.5s;
  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
  z-index: -1;
}
.header-button1:hover::before {
  transform: scaleX(100%);
}
.header-button1:active {
  background: var(--accent-color-1);
  color: var(--accent-color-4);
}
.header-button2 {
  position: relative;
  font-size: var(--font-size-2);
  font-weight: bold;
  /* background-color: var(--accent-color-3); */
  background: transparent;
  border: 2px solid var(--accent-color-3);
  border-radius: var(--button-border-radius);
  padding: 7px 17px;
  cursor: pointer;
}
.header-button2::after {
  content: '';
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  background: var(--accent-color-3);
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  z-index: -2;
}
.header-button2::before {
  content: '';
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  background: var(--accent-color-1);
  width: 100%;
  height: 100%;
  transform-origin: 0%;
  transform: scaleX(0%);
  transition: transform 0.5s;
  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
  z-index: -1;
}
.header-button2:hover::before {
  transform: scaleX(100%);
}
.header-button2:active::before {
  background-color: var(--accent-color-3);
}
.error-button1 {
  position: relative;
  background: none;
  font-size: var(--font-size-2);
  font-weight: bold;
  border: 2px solid var(--accent-color-3);
  border-radius: var(--button-border-radius);
  padding: 7px 16px;
  margin: 20px 0px 0px;
  /* margin-right: 5px; */
  cursor: pointer;
}
.error-button1::before {
  display: flex;
  justify-content: center;
  align-items: center;
  content: 'Sign in';
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  background: var(--accent-color-3);
  width: 100%;
  height: 100%;
  transform-origin: 0%;
  transform: scaleX(0%);
  transition: transform 0.5s;
  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
  z-index: 9;
}
.error-button1:hover::before {
  transform: scaleX(100%);
}
.error-button1:active {
  background: var(--accent-color-1);
  color: var(--accent-color-4);
}
.site-setting {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  background-color: var(--accent-color-4);
  color: var(--accent-color-1);
  margin-bottom: 20px;
}
.site-setting p {
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;
}
.site-setting select {
  background-color: var(--accent-color-4);
  color: var(--accent-color-1);
  margin: 0px 5px;
  border: none;
  cursor: pointer;
}
.site-setting-select-container {
  white-space: nowrap;
}
@media (max-width: 695px) {
  .header-link {
    display: none;
  }
}
main {
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 12px;
  margin: 0px 20px;
}

.cart-item-container,
.payment-summary {
  border: 1px solid rgb(222, 222, 222);
  border-radius: 4px;
  padding: 18px;
  height: fit-content;
}

.cart-item-container {
  margin-bottom: 12px;
}

.cart-item-rating-count {
  margin-left: 10px;
  background: var(--accent-background);
  background-clip: text;
  color: transparent;
}

.payment-summary {
  padding-bottom: 5px;
}

@media (max-width: 820px) {
  .payment-summary {
    /* grid-row: 1 means this element will be placed into row
      1 in the grid. (Normally, the row that an element is
      placed in is determined by the order of the elements in
      the HTML. grid-row overrides this default ordering). */
    grid-row: 1;
    margin-bottom: 12px;
  }
  main {
    grid-template-columns: 1fr;
  }
}

.delivery-date {
  color: var(--accent-color-4);
  font-weight: 700;
  font-size: 19px;
  margin-top: 5px;
  margin-bottom: 22px;
}

.cart-item-details-grid {
  display: grid;
  /* 100px 1fr 1fr; means the 2nd and 3rd column will
     take up half the remaining space in the grid
     (they will divide up the remaining space evenly). */
  grid-template-columns: 100px 1fr 1fr;
  column-gap: 25px;
}

@media (max-width: 1000px) {
  .cart-item-details-grid {
    grid-template-columns: 100px 1fr;
    row-gap: 30px;
  }
}

.product-image {
  max-width: 100%;
  max-height: 120px;

  /* margin-left: auto;
     margin-right auto;
     Is a trick for centering an element horizontally
     without needing a container. */
  margin-left: auto;
  margin-right: auto;
}

.product-name {
  font-weight: 700;
  margin-bottom: 8px;
}

.product-price {
  color: rgb(29, 175, 0);
  font-weight: 700;
  margin-bottom: 5px;
}

.delete-div {
  color: red;
  margin: 5px 0px;
  cursor: pointer;
}

.product-quantity .link-primary {
  margin-left: 3px;
}

@media (max-width: 1000px) {
  .delivery-options {
    /* grid-column: 1 means this element will be placed
       in column 1 in the grid. (Normally, the column that
       an element is placed in is determined by the order
       of the elements in the HTML. grid-column overrides
       this default ordering).
       
       / span 2 means this element will take up 2 columns
       in the grid (Normally, each element takes up 1
       column in the grid). */
    grid-column: 1 / span 2;
  }
}

.delivery-options-title {
  font-weight: 700;
  margin-bottom: 10px;
}

.delivery-option {
  display: grid;
  grid-template-columns: 24px 1fr;
  margin-bottom: 12px;
  cursor: pointer;
}

.delivery-option-input {
  margin-left: 0px;
  cursor: pointer;
}

.delivery-option-date {
  color: var(--accent-color-4);
  font-weight: 500;
  margin-bottom: 3px;
}

.delivery-option-price {
  color: rgb(120, 120, 120);
  font-size: 15px;
}

.payment-summary-title {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 12px;
}

.payment-summary-row {
  display: grid;
  /* 1fr auto; means the width of the 2nd column will be
     determined by the elements inside the column (auto).
     The 1st column will take up the remaining space. */
  grid-template-columns: 1fr auto;

  font-size: 15px;
  margin-bottom: 9px;
}

.payment-summary-money {
  text-align: right;
}

.subtotal-row .payment-summary-money {
  border-top: 1px solid rgb(222, 222, 222);
}

.subtotal-row div {
  padding-top: 9px;
}

.total-row {
  color: rgb(177, 39, 4);
  font-weight: 700;
  font-size: 18px;

  border-top: 1px solid rgb(222, 222, 222);
  padding-top: 18px;
}

.place-order-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent-color-4);
  color: var(--accent-color-1);
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 8px;

  margin-top: 11px;
  margin-bottom: 15px;
  transition: background-color 0.15s, color 0.15s;
}

.place-order-button:hover {
  background-color: var(--accent-color-1);
  color: var(--accent-color-4);
}
.place-order-button:active {
  background-color: rgb(218, 218, 218);
}

footer {
  background-color: var(--accent-color-4);
}
.main-footer {
  display: flex;
  justify-content: space-between;
  margin: 100px 0px 0px 0px;
  padding: 40px;
}
.partners-header,
.social-media-header {
  margin: 0px 0px 10%;
  color: var(--accent-color-5);
}
.social-media-header {
  text-align: end;
}
.partners-identity-container {
  padding-left: 30px;
  border-left: 5px solid var(--accent-color-5);
}
.social-media-container {
  padding-right: 30px;
  border-right: 5px solid var(--accent-color-5);
}
.partners-identity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  max-width: 340px;
}
.social-media-icons {
  display: flex;
  justify-content: space-between;
  width: 30vw;
  max-width: 340px;
}
.footer-info {
  text-align: center;
  color: var(--accent-color-5);
  padding-bottom: 40px;
}
@media (max-width: 580px) {
  .remove {
    display: none;
  }
}`

  return (
    <div>
      <header className='relative flex justify-center px-2 pt-4 mb-7'>
        <Link href="/shop">
          <div className='absolute left-2 flex justify-center items-center w-9 border border-gray-300 rounded-full aspect-square'>
            <Image src='/page-vectors/back-arrow.svg' width={20} height={20} alt='' />
          </div>
        </Link>
        <h1 className='font-bold text-3xl'>Checkout</h1>
      </header>
      <main id="js-main-section">
        <style>
          {myStyles}
        </style>
        <div className="cart-items js-cart-items">
          {
            cartItems.map((item) => {
              return <article className="cart-item-container">
                <div className="delivery-date">
                  Delivery date: <span>20th November, 2025</span>
                </div>

                <div className="cart-item-details-grid">
                  <Image width={200} height={50} className="product-image"
                    src={`${item.image}`} alt=''></Image>

                  <div className="cart-item-details">
                    <div className="product-name">
                      <span>{item.productName}</span>
                    </div>
                    <div className="product-price">
                      <span>{item.price}</span>
                    </div>
                    <div className="product-quantity">
                      <span>
                        Quantity: <span className="quantity-label"><span>1</span></span>
                      </span>
                      <span className="delete-quantity-link link-primary">
                        Delete
                      </span>
                    </div>
                  </div>

                  <div className="delivery-options">
                    <div className="delivery-options-title">
                      Choose a delivery option:
                    </div>

                    <div className="delivery-option">
                      <input type="radio" className="delivery-option-input"
                        name="delivery-option-2" data-feeId="0"></input>
                      <div>
                        <div className="delivery-option-date">
                          Tuesday, June 21
                        </div>
                        <div className="delivery-option-price">
                          FREE Shipping
                        </div>
                      </div>
                    </div>
                    <div className="delivery-option">
                      <input type="radio" checked className="delivery-option-input"
                        name="delivery-option-2" data-feeId="1"></input>
                      <div>
                        <div className="delivery-option-date">
                          Wednesday, June 15
                        </div>
                        <div className="delivery-option-price">
                          $4.99 - Shipping
                        </div>
                      </div>
                    </div>
                    <div className="delivery-option">
                      <input type="radio" className="delivery-option-input"
                        name="delivery-option-2" data-feeId="2"></input>
                      <div>
                        <div className="delivery-option-date">
                          Monday, June 13
                        </div>
                        <div className="delivery-option-price">
                          $9.99 - Shipping
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            })
          }
        </div>
        <div className="payment-summary">
          <div className="payment-summary-title">
            Order Summary
          </div>

          <div className="payment-summary-row">
            <div className="js-item-count">Items ({cartItems.length}):</div>
            <div className="payment-summary-money js-total-items-payment">N{cartTotal}</div>
          </div>

          <div className="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div className="payment-summary-money js-shipping-fee">N1000</div>
          </div>

          <div className="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div className="payment-summary-money js-total-before-tax">N{cartTotal + 1000}</div>
          </div>

          <div className="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div className="payment-summary-money js-estimated-tax">N{30}</div>
          </div>

          <div className="payment-summary-row total-row">
            <div>Order total:</div>
            <div className="payment-summary-money js-order-total">N{cartTotal + 1030}</div>
          </div>

          <Link href='/shop'>
            <button className="place-order-button button-primary js-place-order-button hover:bg-[#006ED3]">
              Place your order
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default page
