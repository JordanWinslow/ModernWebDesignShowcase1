import React from "react"
import styled from "styled-components"

const FooterGroup = styled.div`
  background: #082126;
  padding: 50px 0;
  display: grid;
  gap: 20px;
`

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: white;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`
const Copyright = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
`

const Button = styled.button`
  background: linear-gradient(
      36deg,
      rgba(177, 177, 177, 0.03) 0%,
      rgba(177, 177, 177, 0.03) 16.667%,
      rgba(95, 95, 95, 0.03) 16.667%,
      rgba(95, 95, 95, 0.03) 33.334%,
      rgba(237, 237, 237, 0.03) 33.334%,
      rgba(237, 237, 237, 0.03) 50.001000000000005%,
      rgba(28, 28, 28, 0.03) 50.001%,
      rgba(28, 28, 28, 0.03) 66.668%,
      rgba(174, 174, 174, 0.03) 66.668%,
      rgba(174, 174, 174, 0.03) 83.33500000000001%,
      rgba(51, 51, 51, 0.03) 83.335%,
      rgba(51, 51, 51, 0.03) 100.002%
    ),
    linear-gradient(
      195deg,
      rgba(11, 11, 11, 0.02) 0%,
      rgba(11, 11, 11, 0.02) 25%,
      rgba(107, 107, 107, 0.02) 25%,
      rgba(107, 107, 107, 0.02) 50%,
      rgba(228, 228, 228, 0.02) 50%,
      rgba(228, 228, 228, 0.02) 75%,
      rgba(155, 155, 155, 0.02) 75%,
      rgba(155, 155, 155, 0.02) 100%
    ),
    linear-gradient(
      262deg,
      rgba(234, 234, 234, 0.03) 0%,
      rgba(234, 234, 234, 0.03) 16.667%,
      rgba(191, 191, 191, 0.03) 16.667%,
      rgba(191, 191, 191, 0.03) 33.334%,
      rgba(236, 236, 236, 0.03) 33.334%,
      rgba(236, 236, 236, 0.03) 50.001000000000005%,
      rgba(85, 85, 85, 0.03) 50.001%,
      rgba(85, 85, 85, 0.03) 66.668%,
      rgba(222, 222, 222, 0.03) 66.668%,
      rgba(222, 222, 222, 0.03) 83.33500000000001%,
      rgba(38, 38, 38, 0.03) 83.335%,
      rgba(38, 38, 38, 0.03) 100.002%
    ),
    linear-gradient(
      34deg,
      rgba(192, 192, 192, 0.03) 0%,
      rgba(192, 192, 192, 0.03) 16.667%,
      rgba(200, 200, 200, 0.03) 16.667%,
      rgba(200, 200, 200, 0.03) 33.334%,
      rgba(23, 23, 23, 0.03) 33.334%,
      rgba(23, 23, 23, 0.03) 50.001000000000005%,
      rgba(224, 224, 224, 0.03) 50.001%,
      rgba(224, 224, 224, 0.03) 66.668%,
      rgba(181, 181, 181, 0.03) 66.668%,
      rgba(181, 181, 181, 0.03) 83.33500000000001%,
      rgba(34, 34, 34, 0.03) 83.335%,
      rgba(34, 34, 34, 0.03) 100.002%
    ),
    linear-gradient(
      281deg,
      rgba(11, 11, 11, 0.03) 0%,
      rgba(11, 11, 11, 0.03) 20%,
      rgba(29, 29, 29, 0.03) 20%,
      rgba(29, 29, 29, 0.03) 40%,
      rgba(91, 91, 91, 0.03) 40%,
      rgba(91, 91, 91, 0.03) 60%,
      rgba(239, 239, 239, 0.03) 60%,
      rgba(239, 239, 239, 0.03) 80%,
      rgba(19, 19, 19, 0.03) 80%,
      rgba(19, 19, 19, 0.03) 100%
    ),
    linear-gradient(
      268deg,
      rgba(211, 211, 211, 0.02) 0%,
      rgba(211, 211, 211, 0.02) 25%,
      rgba(137, 137, 137, 0.02) 25%,
      rgba(137, 137, 137, 0.02) 50%,
      rgba(14, 14, 14, 0.02) 50%,
      rgba(14, 14, 14, 0.02) 75%,
      rgba(220, 220, 220, 0.02) 75%,
      rgba(220, 220, 220, 0.02) 100%
    ),
    linear-gradient(
      139deg,
      rgba(248, 248, 248, 0.03) 0%,
      rgba(248, 248, 248, 0.03) 12.5%,
      rgba(185, 185, 185, 0.03) 12.5%,
      rgba(185, 185, 185, 0.03) 25%,
      rgba(243, 243, 243, 0.03) 25%,
      rgba(243, 243, 243, 0.03) 37.5%,
      rgba(13, 13, 13, 0.03) 37.5%,
      rgba(13, 13, 13, 0.03) 50%,
      rgba(99, 99, 99, 0.03) 50%,
      rgba(99, 99, 99, 0.03) 62.5%,
      rgba(193, 193, 193, 0.03) 62.5%,
      rgba(193, 193, 193, 0.03) 75%,
      rgba(241, 241, 241, 0.03) 75%,
      rgba(241, 241, 241, 0.03) 87.5%,
      rgba(38, 38, 38, 0.03) 87.5%,
      rgba(38, 38, 38, 0.03) 100%
    ),
    linear-gradient(
      52deg,
      rgba(171, 171, 171, 0.02) 0%,
      rgba(171, 171, 171, 0.02) 20%,
      rgba(118, 118, 118, 0.02) 20%,
      rgba(118, 118, 118, 0.02) 40%,
      rgba(7, 7, 7, 0.02) 40%,
      rgba(7, 7, 7, 0.02) 60%,
      rgba(235, 235, 235, 0.02) 60%,
      rgba(235, 235, 235, 0.02) 80%,
      rgba(190, 190, 190, 0.02) 80%,
      rgba(190, 190, 190, 0.02) 100%
    ),
    linear-gradient(90deg, rgb(74, 60, 136), rgb(212, 142, 246));
  border-radius: 25px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
  }
`

const Footer = () => (
  <FooterGroup>
    <Text style={{ cursor: "default" }}>
      Website Programmed From Scratch With Gatsby, React, GraphQL &
      Styled-Components by Jordan Winslow.
    </Text>
    <Copyright style={{ cursor: "default" }}>Copyright ©2019</Copyright>
    <a
      href="https://jordans-portfolio.netlify.com"
      style={{ justifySelf: "center" }}
    >
      <Button>Go Back to Portfolio</Button>
    </a>
  </FooterGroup>
)

export default Footer
