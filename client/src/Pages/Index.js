import React from "react";

import { CardSection } from "../Components/CardSection/CardSection";
import { FeaturedSection } from "../Components/FeaturedSection/FeaturedSection";
import { HeroCTA } from "../Components/HeroCTA/HeroCTA";
import { Modal } from "../Components/Modal/Modal";
import { ContactForm } from "../Components/ContactForm/ContactForm";

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
  return (
    <main
      className="w-full h-full p-0 m-0"
      id="IndexPage"
      data-testid="IndexPageContainer"
    >
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
