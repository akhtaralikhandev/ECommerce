import Cart from "@/components/cart/cart"
import Footer from "@/components/home/footer/footer"
import Navbar from "@/components/home/navbar/navbar"
import SmallNavbar from "@/components/home/small_nav/small_nav"
import StayUptoDate from "@/components/home/stay_up"

const Page = () => {
    return (
        <div>
            <SmallNavbar />
            <Navbar />
            <Cart />
            <StayUptoDate />
            <Footer />
        </div>
    )
}
export default Page