import React from "react"
import styled from "styled-components"
import vendorlogos from "../images/vendorlogos.json"

/*-----------STYLES ------------*/

const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2vw;
  margin: 0 15vw 0;
  padding-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5vw;
    margin: 0 6vw;
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4vw;
    margin: 0 6vw;
  }
`

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 1.5vw;
  align-items: center;
  background: rgba(255, 230, 230, 0.3);
  padding: 10px;
  border-radius: 20px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  transition: 0.2s;

  :hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`

const Logo = styled.img`
  width: 10vw;
  max-width: 60px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
`

const LogoTitle = styled.div`
  font-size: 17px;
  font-size: 1vw;
  justify-self: center;

  @media (max-width: 1366px) {
    font-size: 1.3vw;
  }
  @media (max-width: 1024px) {
    font-size: 2.3vw;
  }
  @media (max-width: 640px) {
    font-size: 3vw;
  }
`
const Background = styled.div`

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(1, 117, 201, 0.35) 22.4%, rgba(255, 79, 184, 0.31) 46.35%, rgba(219, 0, 255, 0.27) 70.83%, rgba(0, 133, 255, 0.22) 91.15%);
`
/*-----------END STYLES ------------*/

function VendorLogoGrid() {
  const logoRows = vendorlogos.logo.map(logo => (
    <RowContainer key={logo.title}>
      {/* WE MUST SUPPLY A key PROP FOR EVERY ITEM IN A MAPPED LIST OR ELSE REACT THROWS AN ERROR (also we can't track potential changes without a key value) */}
      <Logo src={logo.image}></Logo>
      <LogoTitle>{logo.title}</LogoTitle>
    </RowContainer>
  ))

  return (
    <Background>
      <ColumnContainer>{logoRows}</ColumnContainer>
    </Background>
  )
}

export default VendorLogoGrid
