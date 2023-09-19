import './logo.css'
const LogoSlider = () => {
    return (
        <div className="logoSlider">
            <div className="logoSliderWrapper gap-28 flex items-center h-full leftPadding">
                <img src="/images/logos/logo1.png" alt="" />
                <img src="/images/logos/logo2.png" alt="" />
                <img src="/images/logos/logo3.png" alt="" />
                <img src="/images/logos/logo4.png" alt="" />
                <img src="/images/logos/logo5.png" alt="" />

                {/* <!-- Duplicate the images to create the looping effect --> */}
                <img src="/images/logos/logo1.png" alt="" />
                <img src="/images/logos/logo2.png" alt="" />
                <img src="/images/logos/logo3.png" alt="" />
                <img src="/images/logos/logo4.png" alt="" />
                <img src="/images/logos/logo5.png" alt="" />
            </div>
        </div>

    )
}
export default LogoSlider