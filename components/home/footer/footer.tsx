import './footer.css'
const Footer = () => {
    return (
        <div className="footer_">
            <div className="footerWrapper_ flex gap-12 flex-col flex-wrap  items-start  pt-20 pb-20 leftPadding rightPadding">
                <div className='flex md:gap-48 gap-24 flex-wrap md:flex-nowrap  items-start '>
                    <div className='flex flex-col gap-4 items-start'>
                        <span className="shop_co">SHOP.CO</span>
                        <div className="shop_co_span flex flex-col">
                            <span>We have clothes that suits your style and </span>
                            <span>{`which you're proud to wear. From`}</span>
                            <span>women to men.</span>
                        </div>
                        <div className='flex gap-8 items-center justify-center'>
                            <span>
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </span>
                            <span>
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </span>
                            <span>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </span>
                            <span>
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 items-start'>
                        <span className="company">
                            company
                        </span>
                        <ul className='flex flex-col gap-4'>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4 items-start'>
                        <span className="company">
                            Help
                        </span>
                        <ul className='flex flex-col gap-4'>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4 items-start'>
                        <span className="company">
                            company
                        </span>
                        <ul className='flex flex-col gap-4'>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4 items-start'>
                        <span className="company">
                            Help
                        </span>
                        <ul className='flex flex-col gap-4'>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <div className="line"></div>
                    <div className='w-full flex items-center justify-between'>
                        <div>
                            <span className='shop_co'>Shop.co © 2000-2023, All Rights Reserved</span>
                        </div>
                        <div className='flex flex-wrap items-center justify-center'>
                            <img src="/images/payment/visa.png" alt="" />
                            <img src="/images/payment/master.png" alt="" />
                            <img src="/images/payment/google.png" alt="" />
                            <img src="/images/payment/paypal.png" alt="" />
                            <img src="/images/payment/apple_pay.png" alt="" />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default Footer