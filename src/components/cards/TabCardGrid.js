import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout the Menu",
  tabs = {
    Items: [

      {
        imageSrc:
          "https://almasskitchen.com/wp-content/uploads/2018/08/vlcsnap-2018-08-15-23h42m53s773-2-1.png",
        title: "Mutton - சிறு குடும்பம்",
        content: "1/2 kg (serves 3-4)",
        price: "₹ 1099",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:
          "https://almasskitchen.com/wp-content/uploads/2018/08/vlcsnap-2018-08-15-23h42m53s773-2-1.png",
        title: "Mutton - கூட்டு குடும்பம்",
        content: "1 kg  (serves 7-8)",
        price: "₹ 1999",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },

      {
        imageSrc:
          "https://www.kannammacooks.com/wp-content/uploads/Tamilnadu-muslim-chicken-biriyani.jpg",
        title: "Chicken - சிறு குடும்பம்",
        content: "1/2 kg (serves 3-4)",
        price: "₹ 699",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:
          "https://www.kannammacooks.com/wp-content/uploads/Tamilnadu-muslim-chicken-biriyani.jpg",
        title: "Chicken - கூட்டு குடும்பம்",
        content: "1 kg  (serves 7-8)",
        price: "₹ 1099",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },

      {
        imageSrc:
          "https://static.toiimg.com/thumb/53683545.cms?width=1200&height=900",
        title: "Chicken 65",
        content: "(serves 7-8)",
        price: "₹ 249",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:
          "https://1.bp.blogspot.com/-LX-6tHydlao/XTPz7fzr06I/AAAAAAAAzGY/twjbiUYmOx0_Ln3YCTGxiht1iZMZ-n1xwCEwYBhgL/s1600/6516.jpg",
        title: "kidney Fry",
        content: "(serves 7-8)",
        price: "₹ 249",
        rating: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc:
          "https://www.yummyoyummy.com/wp-content/uploads/2011/02/DSC_0397_thumb5.jpg",
        title: "Liver fry",
        content: "(serves 7-8)",
        price: "₹ 249",
        rating: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        imageSrc:
          "https://hyderabadiruchulu.com/wp-content/uploads/2019/12/Boti-Fry-500x375.jpg",
        title: "Boti fry",
        content: "(serves 7-8)",
        price: "₹ 249",
        rating: "4.6",
        reviews: "12",
        url: "#"
      },
      {
        imageSrc:
          "https://www.spiceindiaonline.com/wp-content/uploads/2018/12/Goat-Brain-Pepper-Fry-1.jpg",
        title: "Brain fry",
        content: "(serves 7-8)",
        price: "₹ 249",
        rating: "4.2",
        reviews: "19",
        url: "#"
      },

    ],


  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Add To Cart</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
