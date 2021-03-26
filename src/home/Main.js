import React, { useEffect } from "react";
import { scrollTo } from "utils";
import TopBar from "./sections/TopBar";
import Intro from "./sections/Intro";
import Footer from "./sections/Footer";
import CallToAction from "./sections/CallToAction";
import Testimonial from "./sections/Testimonial";
import PreOrder from "./sections/PreOrder";
import FAQ from "./sections/FAQ";
import GetStarted from "./sections/GetStarted";
import About from "./sections/About";
import AddPropertyFeature from "./sections/AddPropertyFeature";
import UploadPhotoFeature from "./sections/UploadPhotoFeature";
import MapFeature from "./sections/MapFeature";
import ReminderFeature from "./sections/ReminderFeature";
import VendorFeature from "./sections/VendorFeature";

const Main = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <TopBar />
      <Intro />
      <About />
      <AddPropertyFeature />
      <UploadPhotoFeature />
      <MapFeature />
      <ReminderFeature />
      <VendorFeature />
      <PreOrder />
      {/* <Testimonial /> */}
      <CallToAction />
      {/* <FAQ /> */}
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Main;
