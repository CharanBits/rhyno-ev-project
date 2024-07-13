import React, { useState } from "react";
import styled from "styled-components";
import blueImage from "../assets/bikespng/blue.png";
import goldenImage from "../assets/bikespng/golden.png";
import redImage from "../assets/bikespng/bike.png";
import { Link } from "react-router-dom";

const ProductPage = styled.div`
  text-align: center;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  background-color:#3C3C3C ;
`;

const ProductTitle = styled.h1`
  text-align: left;
  color: white;
  font-size: 2.5rem; 
  margin: 110px 0;
  padding: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #252525;
    border-radius: 9px;
  }

  @media (max-width: 1000px) {
    font-size: 2rem;
    padding: 10px;
    margin: 180px 0;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 10px;
    margin: 140px 0;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 5px;
    margin: 100px 0;
  }
`;



const ProductImage = styled.img`
  max-width: 500px;
  height: auto;
  max-width: 100%;
  margin: 40px auto 2rem;
  object-fit: contain;
`;

const ColorButton = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  color: #FFFFFF;
  font-weight: bold;
  border-radius: 5px;
  transition: opacity 0.3s ease;
`;

const RedButton = styled(ColorButton)`
  background-color: #131313;
`;

const BlueButton = styled(ColorButton)`
  background-color:#131313;
`;

const BlackButton = styled(ColorButton)`
  background-color: #131313;
`;

const Seo3 = styled.p`
  background-color: #414141;
  padding: 1.5rem;
  margin: 1rem auto;
  border-radius: 10px;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 1.1rem;
  line-height: 1.6;
  color: #F2F2F2;
`;

const TableWrapper = styled.div`
  max-width: 100%;
  overflow-x: auto;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #424242;
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #373737;
  }
  &:nth-child(even) {
    background-color: #414141;
  }
`;

const TableHead = styled.th`
  background-color: #202020;
  color: #F9ED32;
  padding: 1rem;
  text-align: left;
`;

const TableData = styled.td`
  padding: 1rem;
  text-align: left;
  border: 1px solid #252525;

  @media (max-width: 768px) {
    display: block;
    text-align: right;
    padding-left: 50%;
    position: relative;
    border: none;

    &::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 45%;
      padding-left: -1rem;
      white-space: nowrap;
      font-weight: bold;
      text-align: left;
    }
  }

  @media (max-width: 480px) {
    padding-left: 40%;

    &::before {
      width: 35%;
    }
  }
`;

const BuyButton = styled.button`
  padding: 0.75rem 1.5rem;
  margin-top: 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: #F9ED32 ;
  color: #252525;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FFF225;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Product3 = () => {
  const [color, setColor] = useState("blue");

  const images = {
    blue: blueImage,
    gold: goldenImage,
    red: redImage
  };

  return (
    <ProductPage>
      <ProductTitle>Rhyno SE03 Max</ProductTitle>
      <ProductImage src={images[color]} alt={`${color} bike`} />

      <div>
        <RedButton onClick={() => setColor("blue")}>Blue</RedButton>
        <BlueButton onClick={() => setColor("gold")}>Golden</BlueButton>
        <BlackButton onClick={() => setColor("red")}>Red</BlackButton>
      </div>

      <Seo3>
      This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches. 
      </Seo3>

      <TableWrapper>
        <Table className="table table-dark table-hover">
          <thead>
            <TableRow>
              <TableHead>Specification</TableHead>
              <TableHead>Rhyno SE03 Lite</TableHead>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableData data-label="Specification">Battery</TableData>
              <TableData data-label="Rhyno SE03 Lite">2.7Kwh</TableData>
            </TableRow>
            <TableRow>
              <TableData data-label="Specification">Battery features</TableData>
              <TableData data-label="Rhyno SE03 Lite">LFP with 1500 cycles</TableData>
            </TableRow>
            <TableRow>
              <TableData></TableData>
              <TableData data-label="Rhyno SE03 Lite">Active Balancing</TableData>
            </TableRow>
            <TableRow>
              <TableData></TableData>
              <TableData data-label="Rhyno SE03 Lite">Waterproof (IP67)</TableData>
            </TableRow>
            <TableRow>
              <TableData data-label="Specification">Battery warranty</TableData>
              <TableData data-label="Rhyno SE03 Lite">3 years</TableData>
            </TableRow>
            <TableRow>
              <TableData data-label="Specification">Charging time</TableData>
              <TableData data-label="Rhyno SE03 Lite">4 hours (12A)</TableData>
            </TableRow>
            <TableRow>
              <TableData data-label="Specification">Motor</TableData>
              <TableData data-label="Rhyno SE03 Lite">2000W</TableData>
            </TableRow>
            <TableRow>
              <TableData data-label="Specification">Max speed</TableData>
              <TableData data-label="Rhyno SE03 Lite">65 km/h</TableData>
            </TableRow>
            <TableRow>
              <TableData data-label="Specification">Warranty on electronics</TableData>
              <TableData data-label="Rhyno SE03 Lite">1 year</TableData>
            </TableRow>
            <TableRow>
              <TableData data-label="Specification">Max range (@30km/h)</TableData>
              <TableData data-label="Rhyno SE03 Lite">120 km</TableData>
            </TableRow>
            <TableRow>
              <TableData data-label="Specification">Max range (@45km/h)</TableData>
              <TableData data-label="Rhyno SE03 Lite">100 km</TableData>
            </TableRow>
            <TableRow>
              <TableData data-label="Specification">Max range (@full speed)</TableData>
              <TableData data-label="Rhyno SE03 Lite">80 km</TableData>
            </TableRow>
            <TableRow>
              <TableData data-label="Specification">Other key benefits</TableData>
              <TableData data-label="Rhyno SE03 Lite">Fire-safe Battery</TableData>
            </TableRow>
            <TableRow>
              <TableData></TableData>
              <TableData data-label="Rhyno SE03 Lite">Range prediction</TableData>
            </TableRow>
            <TableRow>
              <TableData></TableData>
              <TableData data-label="Rhyno SE03 Lite">Comfortable ride</TableData>
            </TableRow>
            <TableRow>
              <TableData></TableData>
              <TableData data-label="Rhyno SE03 Lite">Stable and safe</TableData>
            </TableRow>
          </tbody>
        </Table>
      </TableWrapper>

      <BuyButton>
        <Link to="/prebook">Buy Now</Link>
      </BuyButton>
    </ProductPage>
  );
};

export default Product3;
