import Navbar from "@/components/home/navbar/navbar"
import SmallNavbar from "../components/home/small_nav/small_nav"
import Hero from "@/components/home/hero/hero"
import LogoSlider from "@/components/home/logosSlider/logo"
import ShoppingList from "@/components/home/shopingList/list"
import TopSelling from "@/components/home/topSelling/topSelling"
import Footer from "@/components/home/footer/footer"
import BrowseByStyle from "@/components/home/browse/browse"
import StayUptoDate from "@/components/home/stay_up"
import Client from "@/components/home/clients/clients"
import SwipeToSlide from '@/components/home/slider/slider'
export default function Home() {
  return (
    <div>
      <SmallNavbar />
      <Navbar />
      <Hero />
      <LogoSlider />
      <ShoppingList />
      <TopSelling />  <BrowseByStyle />
      <SwipeToSlide />
      <StayUptoDate />
      <Footer />
    </div>
  )
}
