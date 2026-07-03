import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Innovation from "../components/Innovation/Innovation";
import Specialists from "../components/Specialists/Specialists";
import Reviews from "../components/Reviews/Reviews";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Innovation />
      <Specialists />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;