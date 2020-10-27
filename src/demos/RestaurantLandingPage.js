import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Delicious & Affordable <HighlightedText>Briyani Near You.</HighlightedText></>}
        description="சிக்கன்‌ மற்றூம்‌ மாடன்‌ பிறியயாணி , கலக்கலான கல்யாண பிறியாாணி"
        imageSrc="https://i.ytimg.com/vi/KjIYyi5lRVY/maxresdefault.jpg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />

      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      />

      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "Orders",
            value: "1000+",
          },
          {
            key: "Customers",
            value: "230+"
          },
          {
            key: "Chefs",
            value: "120+"
          }
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="/banner.jpeg"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/3 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />



    </AnimationRevealPage>
  );
}
