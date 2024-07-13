import React from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from '../assets/Images/footer.png';  
const FooterContainer = styled.footer`
  background: var(--black-3);
  color: var(--white-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem;
    text-align: left;
  }
`;

const Logo = styled.img`
  width: 160px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
  }
`;

const Section = styled.div`
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Company Logo" />
      <FooterContent>
        <Section>
          <h4 className="policy">Policies</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/refund-policy">Refund Policy</Link>
          <Link to="/website-policy" className="website">Website Policy</Link>
        </Section>
        <Section>
          <h4 className="policy">Links</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/compare">Products</Link>
          <a
            href="https://linkedin.com" rel="login page"  target="_blank"
          >
            Careers
          </a>
          <Link to="/rentals">Rentals</Link>
        </Section>
        <Section>
          <h4 className="policy">Social Media</h4>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="login page"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="login page"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </Section>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
