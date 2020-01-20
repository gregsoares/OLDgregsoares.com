import React from 'react';

import { FeaturedContent } from "../FeaturedContent/FeaturedContent";
import { TopHeader } from '../TopHeader/TopHeader';
import { IntroSection } from '../IntroSection/IntroSection';
import { OurServices } from '../OurServices/OurServices';
import { OneLineCTA } from '../OneLineCTA/OneLineCTA';
import { Footer } from '../Footer/Footer';

export const Index = props => {

  return (
    <React.Fragment>

      <TopHeader />
      <IntroSection />
      <section id="maincontent">
        <div className="container">
          <FeaturedContent />
          <OneLineCTA />
          <OurServices />
        </div>
      </section>

      <Footer />

      <script src="assets/js/jquery.js"></script>
      <script src="assets/js/modernizr.js"></script>
      <script src="assets/js/jquery.easing.1.3.js"></script>
      <script src="assets/js/google-code-prettify/prettify.js"></script>
      <script src="assets/js/bootstrap.js"></script>
      <script src="assets/js/jquery.prettyPhoto.js"></script>
      <script src="assets/js/portfolio/jquery.quicksand.js"></script>
      <script src="assets/js/portfolio/setting.js"></script>
      <script src="assets/js/hover/jquery-hover-effect.js"></script>
      <script src="assets/js/jquery.flexslider.js"></script>
      <script src="assets/js/classie.js"></script>
      <script src="assets/js/cbpAnimatedHeader.min.js"></script>
      <script src="assets/js/jquery.refineslide.js"></script>
      <script src="assets/js/jquery.ui.totop.js"></script>

      {/* <!-- Template Custom Javascript File --> */}
      <script src="assets/js/custom.js"></script>

    </React.Fragment>
  );
}