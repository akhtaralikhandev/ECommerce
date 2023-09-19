"use client"
import { useState } from 'react'
import './topSelling.css'
const TopSelling = () => {
    const [showMore, setShowMore] = useState(false)
    return (
        <div className="shoppingList mt-20 mb-20">
            <div className="shoppingListWrapper gap-14 flex-col w-full flex items-center justify-center flex-wrap leftPadding rightPadding">
                <span className="new_arrival ">
                    Top Selling
                </span>
                <div className='flex items-center card_lists justify-center md:gap-14 gap-8 flex-wrap'>
                    <div className="card flex flex-col gap-3 items-start justify-center">
                        <img className=' rounded-2xl' src="/images/arrivals/image1.png" alt="" />
                        <div className="t_shirt">T-SHIRT WITH TAPE DETAILS</div>
                        <div className='flex items-center justify-center'>
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                        </div>
                    </div>
                    <div className="card flex flex-col gap-3 items-start justify-center">
                        <img className=' rounded-2xl' src="/images/arrivals/image 8.png" alt="" />
                        <div className="t_shirt">T-SHIRT WITH TAPE DETAILS</div>
                        <div className='flex items-center justify-center'>
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                        </div>
                    </div>
                    <div className="card flex flex-col gap-3 items-start justify-center">
                        <img className=' rounded-2xl' src="/images/arrivals/image 9.png" alt="" />
                        <div className="t_shirt">T-SHIRT WITH TAPE DETAILS</div>
                        <div className='flex items-center justify-center'>
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                        </div>
                    </div>
                </div>
                {showMore && <div className='flex items-center  justify-center md:gap-14 gap-8 flex-wrap'>
                    <div className="card flex flex-col gap-3 items-start justify-center">
                        <img className=' rounded-2xl' src="/images/arrivals/image1.png" alt="" />
                        <div className="t_shirt">T-SHIRT WITH TAPE DETAILS</div>
                        <div className='flex items-center justify-center'>
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                        </div>
                    </div>
                    <div className="card flex flex-col gap-3 items-start justify-center">
                        <img className=' rounded-2xl' src="/images/arrivals/image 8.png" alt="" />
                        <div className="t_shirt">T-SHIRT WITH TAPE DETAILS</div>
                        <div className='flex items-center justify-center'>
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                        </div>
                    </div>
                    <div className="card flex flex-col gap-3 items-start justify-center">
                        <img className=' rounded-2xl' src="/images/arrivals/image 9.png" alt="" />
                        <div className="t_shirt">T-SHIRT WITH TAPE DETAILS</div>
                        <div className='flex items-center justify-center'>
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                            <img src="/images/stars/Star 1.png" alt="" />
                        </div>
                    </div>
                </div>}

                <button onClick={() => setShowMore(!showMore)} className="view_all">
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    )
}
export default TopSelling