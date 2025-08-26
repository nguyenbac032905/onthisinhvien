
import BannerPanel from "../../components/BannerPanel";
import "./home.scss";
import Statistic from "../../components/Statistic";
import SchoolCategory from "../../components/SchoolCategory";
import WhyChooseWrapper from "../../components/WhyChooseWrapper";
import IframePanel from "../../components/IframePanel";
import FeedbackPanel from "../../components/FeedbackPanel";
import SocialWrapper from "../../components/SocialWrapper";
import TabPanel from "../../components/TabPanel";
function Home() {
  return (
    <>
      <div className="home">
        <BannerPanel />
        <Statistic />
        <SchoolCategory />
        <WhyChooseWrapper />
        <IframePanel />
        <FeedbackPanel />
        <SocialWrapper />
        <TabPanel />
      </div>
    </>
  );
}
export default Home;
