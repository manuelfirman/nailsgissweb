import { BestBusiness } from "@/components/BestBusiness";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <ChooseYourCards />
      {/* <BestBusiness /> */}
      {/* <Testimonials /> */}
      <Footer />
    </>
  )
}
