import MainComponent from "@/components/product/detail/detail"
import SmallNavbar from "@/components/home/small_nav/small_nav"
import Navbar from "@/components/home/navbar/navbar"
import Reviews from "@/components/product/reviews/reviews"
import ShoppingList from "@/components/home/shopingList/list"
import StayUptoDate from "@/components/home/stay_up"
import Footer from "@/components/home/footer/footer"
const Page = () => {
    return (
        <div >
            <SmallNavbar />
            <Navbar />
            <MainComponent />
            <Reviews />
            <ShoppingList />
            <StayUptoDate />
            <Footer />
        </div>
    )
}
export default Page