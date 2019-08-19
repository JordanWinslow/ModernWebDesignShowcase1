import React from "react"
import styled from "styled-components"
import Wave from "./Wave"

/* DEMONSTRATING STYLED COMPONENTS AS A MORE READABLE ALTERNATIVE TO IN-LINE CSS OR IMPORTED CSS. */
const SectionGroup = styled.div`
  background: url(${props => props.image});
  background-size: cover;
  display: grid;
  grid-template-rows: auto auto;
  gap: 20px;
  position: relative;
  padding: 15vw 0;

  @media (max-width: 1024px) {
    padding: 19vw 0;
  }
  @media (max-width: 768px) {
    padding: 27vw 0;
  }
  @media (max-width: 500px) {
    padding: 35vw 0;
  }
`

const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`

const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  margin: 0 40px;
  grid-gap: 40px;
  align-items: center;

  /* NESTED MEDIA QUERIES ARE A GREAT BENEFIT OF STYLED-COMPONENTS */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 4vw;
  margin: 0;
  line-height: 1.2;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 6vw;
  }
  @media (max-width: 768px) {
    font-size: 8vw;
  }
  @media (max-width: 500px) {
    font-size: 10vw;
  }
`

const SectionText = styled.p`
  color: white;
  font-size: 1.55vw;
  line-height: 2.5vw;

  @media (max-width: 1366px) {
    font-size: 2vw;
    line-height: 3vw;
  }
  @media (max-width: 1024px) {
    font-size: 2.5vw;
    line-height: 4vw;
  }
  @media (max-width: 768px) {
    font-size: 3.5vw;
    line-height: 5vw;
  }
  @media (max-width: 500px) {
    font-size: 4.5vw;
    line-height: 6vw;
  }
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
    <WaveBottom>
      <Wave />
    </WaveBottom>
  </SectionGroup>
)

export default Section
