import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from 'styled-components'
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px" };
  right: ${props => props.direction === "right" && "10px" };
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: transform 1.5s ease;
    transform: translateX(${props => props.currentSlide * -100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg}
`

const ImageConainer = styled.div`
    height: 100%; 
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`

const InfoConainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Burtton = styled.button`
    font-size: 20px;
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2);
        } else {
            setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0);
        }
    }

  return (
    <Container>
      <Arrow  direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper currentSlide={currentSlide}>
        {sliderItems.map(item => (
        <Slide bg={item.bg} key={item.id}>
            <ImageConainer>
                <Image src={item.img} />
            </ImageConainer>
            <InfoConainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Burtton>Shop Now</Burtton>
            </InfoConainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow  direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
