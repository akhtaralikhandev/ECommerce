import './cart.css'
const Cart = () => {
    return (
        <div className="cart mb-48">
            <div className="cartWrapper leftPadding rightPadding mt-12">
                <span className="your_cart">Your cart</span>
                <div className='mt-14 flex lg:flex-nowrap flex-wrap items-start gap-8'>
                    <div className='cart_card1 flex-wrap h-full'>
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex gap-8'>
                                <div>
                                    <img className=' rounded-xl' src="/images/cart/dress1.png" alt="" />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <span className="gradient">Gradient Graphic T-shirt</span>
                                    <div className='flex items-center gap-2'>
                                        <span className='size'>Size :</span>
                                        <span className="large_">Large</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span className="color">color :</span>
                                        <span className="large_">white</span>
                                    </div>
                                    <span className="price">$140</span>
                                </div>
                            </div>
                            <div className='flex flex-col  gap-10 items-end  justify-between'>
                                <img className='w-8' src="/images/cart/delete.png" alt="" />
                                <div className='buttons_'>
                                    <span className=' cursor-pointer'>+</span>
                                    <span className=' cursor-pointer'>1</span>
                                    <span className=' cursor-pointer'>-</span>
                                </div>
                            </div>
                        </div>
                        <div className="line_cart"></div>
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex gap-8'>
                                <div>
                                    <img className=' rounded-xl' src="/images/cart/dress1.png" alt="" />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <span className="gradient">Gradient Graphic T-shirt</span>
                                    <div className='flex items-center gap-2'>
                                        <span className='size'>Size :</span>
                                        <span className="large_">Large</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span className="color">color :</span>
                                        <span className="large_">white</span>
                                    </div>
                                    <span className="price">$140</span>
                                </div>
                            </div>
                            <div className='flex flex-col  gap-10 items-end  justify-between'>
                                <img className='w-8' src="/images/cart/delete.png" alt="" />
                                <div className='buttons_'>
                                    <span className=' cursor-pointer'>+</span>
                                    <span className=' cursor-pointer'>1</span>
                                    <span className=' cursor-pointer'>-</span>
                                </div>
                            </div>
                        </div>
                        <div className="line_cart"></div>
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex gap-8'>
                                <div>
                                    <img className=' rounded-xl' src="/images/cart/dress1.png" alt="" />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <span className="gradient">Gradient Graphic T-shirt</span>
                                    <div className='flex items-center gap-2'>
                                        <span className='size'>Size :</span>
                                        <span className="large_">Large</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span className="color">color :</span>
                                        <span className="large_">white</span>
                                    </div>
                                    <span className="price">$140</span>
                                </div>
                            </div>
                            <div className='flex flex-col  gap-10 items-end  justify-between'>
                                <img className='w-8' src="/images/cart/delete.png" alt="" />
                                <div className='buttons_'>
                                    <span className=' cursor-pointer'>+</span>
                                    <span className=' cursor-pointer'>1</span>
                                    <span className=' cursor-pointer'>-</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cart_card2 flex flex-col gap-4'>
                        <span className="order_summary">Order Summary</span>
                        <div className='flex items-center justify-between w-full'>
                            <span className="total_cart">total</span>
                            <span>$560</span>
                        </div>
                        <div className='flex items-center justify-between w-full'>
                            <span className='discount_cart'>{`Discount (-20%)`}</span>
                            <span>-$113</span>
                        </div>
                        <div className='flex items-center justify-between w-full'>
                            <span className="delivery_fee">Delivery Fee</span>
                            <span className='fifteen'>$15</span>
                        </div>
                        <div className="cart_line"></div>
                        <div className='flex items-center justify-between w-full'>
                            <span className="total_cart">Total</span>
                            <span className='dollar_'>$467</span>
                        </div>
                        <div className='flex items-center gap-2 justify-between w-full'>
                            <div className='input_promo pl-4 pr-4 p-1 flex items-center'>
                                <img className=' outline-none' src="/images/cart/promo.png" alt="" />
                                <input type="text" className='p-3 input_cart_apply outline-none' />
                            </div>
                            <button className="apply_">Apply</button>

                        </div>
                        <button className="checkout_cart">
                            Go to Checkout
                            <img src="/images/cart/arrow_right.png" alt="" />

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart