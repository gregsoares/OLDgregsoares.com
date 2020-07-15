import React from "react";

// import { CardSection } from "../Components/CardSection/CardSection";
import { FeaturedSection } from "../Components/FeaturedSection/FeaturedSection";
import { HeroCTA } from "../Components/HeroCTA/HeroCTA";
// import { Modal } from "../Components/Modal/Modal";
// import { Intro } from "../Components/Intro/Intro";

// TODO: import ../Components/assets/js/scollPosition and run to return to same place onReload
const Index = () => {
  return (
    <main
      className="w-full h-full p-0 m-0"
      id="IndexPage"
      data-testid="IndexPageContainer"
    >
      {/* <Intro /> */}
      {/* <Modal contentLabel="HelloWorld something TRUE" className="shadow-inner w-2 h-2 py-2 px-4 my-1 mx-2 border bg-gray-300" isOpen={true} /> */}
      <HeroCTA />
      <FeaturedSection />
      {/* <CardSection /> */}
    </main>
  );
};

export default Index;
