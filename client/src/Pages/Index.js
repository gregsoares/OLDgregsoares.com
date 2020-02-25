import React from 'react'

// Components
import { IntroCarousel } from "../Components/IntroCarousel/IntroCarousel";
import { MainContent } from "../Components/MainContent/MainContent";
import { FeaturedServices } from "../Components/FeaturedServices/FeatureServices";

// Content
import { featuredServicesContent } from "../Store/Content";

const Index = () => {
  return (
    //  <MainContent>
    <div id="main">
      <IntroCarousel />
      <FeaturedServices content={featuredServicesContent}/>
    </div>
    //  </MainContent> 
  )
}

export default Index;