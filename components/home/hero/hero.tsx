import './hero.css'
const Hero = () => {
    return (
        <div className="hero">
            <div className="heroWrapper leftPadding flex flex-col gap-6  pt-24  rightPadding">
                <div className="find_clothes flex flex-col">
                    <span>FIND CLOTHES</span>
                    <span>THAT MATCHES</span>
                    <span>YOUR STYLE</span>
                </div>
                <div className="hero_words flex flex-col">
                    <span>Browse through our diverse range of meticulously crafted garments, designed</span>
                    <span>to bring out your individuality and cater to your sense of style.</span>
                </div>
                <button className="shop_now">Shop Now</button>
                <div className='flex items-center flex-wrap justify-center md:justify-start mt-8 gap-8'>
                    <div className="numbers_div flex flex-col">
                        <span className="number">200+</span>
                        <span className="word">International Brands</span>
                    </div>
                    <div className="numbers_div flex flex-col">
                        <span className="number">2000+</span>
                        <span className="word">High-Quality Products</span>
                    </div>
                    <div className="numbers_div flex flex-col">
                        <span className="number">30,000+</span>
                        <span className="word">Happy Customers</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Hero