import React, { useContext, useEffect } from "react";

import { CardSection } from "../Components/CardSection/CardSection";
import { FeaturedSection } from "../Components/FeaturedSection/FeaturedSection";
import { HeroCTA } from "../Components/HeroCTA/HeroCTA";
import { Modal } from "../Components/Modal/Modal";
import { ContactForm } from "../Components/ContactForm/ContactForm";
import { Topnav } from "../Components/Topnav/Topnav";
import { TopNavContext } from "../assets/store/TopNavContext";

/* FIREBASE headers

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.17.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.17.1/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
*/

// TODO: import ../Components/assets/js/scollPosition and run to return to same place onReload
const Index = () => {
  const context = useContext(TopNavContext);
  console.debug(`Result from context: 
  width: ${context.width}
  activePage: ${context.activeage}
  `);
  const checkWindowSize = () => {
    context.setWidth(window.innerWidth);
  };

  useEffect(
    (e) => {
      window.addEventListener("resize", checkWindowSize());

      return () => {
        window.removeEventListener("resize", false);
      };
    },
    [context.width]
  );
  return (
    <main
      className="p-0 m-0"
      id="IndexPage"
      onLoad={console.log(window.innerWidth)}
      data-testid="IndexPageContainer"
    >
      <Topnav activePage="home" width={context.width} />

      <Modal
        contentLabel="HelloWorld something TRUE"
        className="shadow-inner py-2 px-4 my-1 mx-2 border bg-gray-300"
        isOpen={false}
      />
      <HeroCTA />
      <FeaturedSection />
      <ContactForm />
      <CardSection />
    </main>
  );
};

export default Index;
