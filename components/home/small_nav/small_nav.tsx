
import './small_nav.css'
import { Poppins } from 'next/font/google'
const Poppin = Poppins({ weight: "100", subsets: ["latin"] })
const SmallNavbar = () => {
    return (
        <div className={`${Poppin} bg-black w-full `}>
            <div className="small_nav_wrapper md:pt-2 md:pb-2 leftPadding rightPadding  flex items-center justify-center">
                <div style={{ flex: "2" }} className="left flex md:gap-4   items-center justify-end">Sign up and get 20% off to your first order. <span className="signUpNow cursor-pointer">Sign Up Now</span> </div>
                <div style={{ flex: "1" }} className="right flex items-center justify-end">
                    <img src="/images/navbar/x.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default SmallNavbar