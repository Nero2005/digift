import { Header } from "./Header";
import { Arrivals } from "./Arrivals";
import { Feedback } from "./Feedback";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { TopBanner } from "./TopBanner";

export const Personal = () => {
  return (
    <>
      <Header />
      <TopBanner />
      <Arrivals />
      <Feedback />
      <Banner />
      <Footer />
    </>
  );
};
