import { Header } from "./Header";
import { Footer } from "./Footer";
import { GetStarted } from "./GetStarted";
import { BusinessBanner } from "./BusinessBanner";
import { Designed } from "./Designed";

export const Business = () => {
  return (
    <>
      <Header />
      <GetStarted
        title1="Expand the giftcard industry,"
        title2="at a time!"
        blue_high="one card"
        desc="Digift helps businesses connect with customers by letting them offer
        their business gift cards to a large number of people."
      />
      <BusinessBanner />
      <Designed />
      <GetStarted
        title1="Our API is built to be as"
        title2="and efficient as possible."
        blue_high="lightweight"
        desc="We offer client and server libraries in everything from our API"
      />
      <Footer />
    </>
  );
};
