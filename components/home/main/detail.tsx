import './main.css'
import Image from 'next/image'
const Main = () => {
    return (
        <div className="main_ mt-8">
            <div className="mainWrapper leftPadding rightPadding">
                <div className="line"></div>
                <div className='flex mt-8 items-start justify-center gap-14'>
                    <div className='flex items-start justify-start gap-4'>
                        <div className='flex flex-col gap-4'>
                            <img src="/images/product/dress4.png" alt="" />
                            <img src="/images/product/dress2.png" alt="" />
                            <img src="/images/product/dress3.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/product/dress.png" alt="" />
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 items-start justify-start'>
                        <span className='one_life'>One Life Graphic T-shirt</span>
                        <div className='flex gap-2 items-center'>
                            <div className='flex items-center justify-center'>
                                <img src="/images/stars/Star 1.png" alt="" />
                                <img src="/images/stars/Star 1.png" alt="" />
                                <img src="/images/stars/Star 1.png" alt="" />
                                <img src="/images/stars/Star 1.png" alt="" />
                                <img src="/images/stars/Star 1.png" alt="" />
                            </div>
                            <div className='rating_number'>4.5/5</div>
                        </div>
                        <div className='flex items-center gap-6'>
                            <span className='dollar_260'>$260</span>
                            <span className='dollar_300'>$300</span>
                            <span className='percent_40'>-40%</span>
                        </div>
                        <div className='graphic_words flex flex-col items-start justify-start'>
                            <span>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and </span>
                            <span>breathable fabric, it offers superior comfort and style.</span>
                        </div>
                        <div className="line"></div>
                        <div className="span_color">Select Colors</div>
                        <div className='flex items-center gap-4'>
                            <div className='gray_color rounded-full'></div>
                            <div className='fabric rounded-full '></div>
                            <div className='blue rounded-full'></div>
                        </div>
                        <div className="line"></div>
                        <div className='mt-8'>
                            <span>Choose size</span>
                            <div className='flex items-center gap-4'>
                                <button className='small_button'>Small</button>
                                <button className='medium'>Medium</button>
                                <button className='large'>Large</button>
                                <button className='xl_large'>X large</button>
                            </div>
                        </div>
                        <div className='flex mb-4 items-center justify-center mt-12 gap-4'>
                            <div className='cart_number flex items-center gap-4'>
                                <span>+</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                            <button className='add_to_cart  rounded-lg'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main