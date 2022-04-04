import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { sliderItems } from "../data";
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Discripttion,
  Button,
} from "../styledComponent/slider.styled";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    console.log(slideIndex);
    if (direction === "left") {
      setSlideIndex((slideIndex) =>
        slideIndex >= 0 ? slideIndex - 1 : sliderItems.length - 1
      );
    } else {
      setSlideIndex((sliderIndex) =>
        slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0
      );
    }
  };
  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <NavigateBeforeIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide key={item.id} bg={item.bg}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Discripttion>{item.desc}</Discripttion>
                <Button>Shop Now</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ChevronRightIcon />
        </Arrow>
      </Container>
    </>
  );
};
export default Slider;
