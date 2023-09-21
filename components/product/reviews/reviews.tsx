import './reviews.css'
const Reviews = () => {
    return (
        <div className="reviews mt-14 mb-8 flex flex-col  ">
            <div className="reviewsWrapper items-center justify-center   flex flex-col leftPadding gap-12 rightPadding">
                <div className='flex items-center w-full  justify-between pr-24'>
                    <span className="productDetail cursor-pointer">Product Details</span>
                    <span className='rating_review  cursor-pointer'>{"Rating & Reviews"}</span>
                    <span className="faq cursor-pointer">FAQ</span>
                </div>
                <div className="line_"></div>
                <div className='flex w-full mt-8 items-center justify-between'>
                    <div>
                        <span>All Reviews</span>
                        <span>{`(451)`}</span>
                    </div>
                    <div className='flex items-center gap-14'>
                        <button>
                            <img src="/images/reviews/latest.png" alt="" />
                        </button>
                        <button>
                            lastest <img src="/images/reveiews/arrow_down.png" alt="" />
                        </button>
                        <button className='write_a_review'>Write a Review</button>
                    </div>
                </div>
                <div className='flex mt-20  flex-wrap  items-center  justify-center gap-4'>
                    <div className="card_">
                        <div className='flex flex-col w-full gap-4'>
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex items-center justify-center'>
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                </div>
                                <div>
                                    <img className='more_' src="/images/reviews/more_.png" alt="" />
                                </div>
                            </div>

                            <div>
                                <span className='samantha_d'>Samantha D.</span>
                            </div>
                            <div className='reviews_div'>
                                {`
                                I absolutely love this t-shirt!
                                The design is unique and the fabric feels so comfortable. As a fellow designer,
                                I appreciate the attention to detail. It's become my favorite go-to shirt.`}
                            </div>
                        </div>
                    </div>
                    <div className="card_">
                        <div className='flex flex-col w-full gap-4'>
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex items-center justify-center'>
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                </div>
                                <div>
                                    <img className='more_' src="/images/reviews/more_.png" alt="" />
                                </div>
                            </div>

                            <div>
                                <span className='samantha_d'>Samantha D.</span>
                            </div>
                            <div className='reviews_div'>
                                {` I absolutely love this t-shirt!
                                The design is unique and the fabric feels so comfortable. As a fellow designer,
                                I appreciate the attention to detail. It's become my favorite go-to shirt.`}

                            </div>
                        </div>
                    </div>
                    <div className="card_">
                        <div className='flex flex-col w-full gap-4'>
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex items-center justify-center'>
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                </div>
                                <div>
                                    <img className='more_' src="/images/reviews/more_.png" alt="" />
                                </div>
                            </div>

                            <div>
                                <span className='samantha_d'>Samantha D.</span>
                            </div>
                            <div className='reviews_div'>
                                {`  I absolutely love this t-shirt!
                                The design is unique and the fabric feels so comfortable. As a fellow designer,
                                I appreciate the attention to detail. It's become my favorite go-to shirt.`}

                            </div>
                        </div>
                    </div>
                    <div className="card_">
                        <div className='flex flex-col w-full gap-4'>
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex items-center justify-center'>
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                    <img src="/images/stars/Star 1.png" alt="" />
                                </div>
                                <div>
                                    <img className='more_' src="/images/reviews/more_.png" alt="" />
                                </div>
                            </div>

                            <div>
                                <span className='samantha_d'>Samantha D.</span>
                            </div>
                            <div className='reviews_div'>
                                {`  I absolutely love this t-shirt!
                                The design is unique and the fabric feels so comfortable. As a fellow designer,
                                I appreciate the attention to detail. It's become my favorite go-to shirt.`}

                            </div>
                        </div>
                    </div>
                </div>
                <button className='load_more_button'> More Reviews</button>
            </div>
        </div>
    )
}
export default Reviews