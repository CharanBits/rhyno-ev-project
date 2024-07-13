import React from 'react';
import redfinal from"../assets/bikespng/redfinal168.png"
import group from "../assets/bikespng/sixbikes.png";
import bike1 from "../assets/bikespng/final177.png";
import "./About.css";

const About = ()=> {
return (
  <div className='about'>
      <h1 className='heading'>About Us</h1>
      <p className='para'>Established in 2019 by an automotive engineer with a vision for sustainable and robust
mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
of young individuals passionately driving innovation in the electric vehicle industry. We
believe in engineering solutions that solve problems.<br />With our first product, we've taken a bold step to create something more than just a vehicle;
it's a unique experience of elegance, comfort and style, addressing the pitfalls of
conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and
ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet
operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically
appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new
era in sustainable and dependable electric transportation.</p>
<img src={bike1} className="img-fluid" alt="bikes"/>
<img src={redfinal} className="img-fluid" alt="bikes"/>
<img src={group} className="img-fluid" alt="bikes"/>
</div>
)
}

export default About;