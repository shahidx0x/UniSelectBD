import { Statistic } from "@/components/Statistics";
import Blogs from "../components/Blogs";
import ContactUs from "../components/ContactUs";

import { Faq } from "../components/Faq";
import Hero from "../components/Hero";
import InfoBox from "../components/InfoBox";
import UniversityList from "../components/UniversityList";

const Home = () => {
  return (
    <div>
      <Hero />
      <Statistic />
      <UniversityList />
      <InfoBox />
      <Blogs />
      <Faq />
      <ContactUs />
    </div>
  );
};

export default Home;
