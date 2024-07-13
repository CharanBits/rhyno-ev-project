import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import "./HomePage.css";
import { Carousel } from 'react-bootstrap';
import imag from "../assets/bikespng/golden.png";
import ima2 from "../assets/bikespng/bike.png";
import ima3 from "../assets/bikespng/grp.png";
import ima4 from"../assets/bikespng/wood95.png"


const Home = () => {
  const words = ["Style", "Elegance", "Minimalism", "Comfort"];

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => {
      clearInterval(wordInterval);
    };
  }, [words]);

  return (
    <div className="homepage">
      {/* Front Line */}
      <header className="front-line">
        <h1>
          Let's Elevate Your Ride Experience With Rhyno – Where Superiority
          Meets <span>{words[currentWord]}</span>.
        </h1>
      </header>

      

      {/* Image Slider */}

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imag} className="d-block w-100" alt="Golden Bike"/>
    </div>
    <div className="carousel-item">
      <img src={ima2} className="d-block w-100" alt="Bike"/>
    </div>
    <div className="carousel-item">
      <img src={ima4} className="d-block w-100" alt="Group of Bikes"/>
    </div>

    <div className="carousel-item">
      <img src={ima3} className="d-block w-100" alt="Group of Bikes"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

 {/* check Now Buttons */}

 <div className="button-container">
      <Link to="/product1" className="btn btn-dark">Product 1</Link>
      <Link to="/product2" className="btn btn-dark">Product 2</Link>
      <Link to="/product3" className="btn btn-dark">Product 3</Link>
    </div>
 
{/* slides */}


<Carousel>
      <Carousel.Item>
        <div className="carousel-content">
          <h3>LFP Battery:</h3>
          <p>Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
            renowned for their safety features—eliminating the risk of fire associated with other
            Lithium batteries. These batteries boast a broader temperature range, ideal for the
            diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
            by an Active Balancing Smart Battery Management System (BMS) for extended life
            and reduced maintenance. Each battery undergoes rigorous waterproofing tests
            according to IP76 standards. But it doesn't stop there—our technology goes the extra
            mile in ensuring the battery's lasting durability. Connect with us to discover the
            thoughtful engineering behind our batteries!
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content">
          <h3>Wider Tyres:</h3>
          <p>Now, say goodbye to skidding and embrace the leaning turns!
            Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
            beast that ensures stability on different terrains such as wet roads, mud, and sand.
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content">
          <h3>Range Prediction:</h3>
          <p>Many budget-friendly electric scooters overlook this crucial
            feature, causing riders to experience range anxiety. With Rhyno, you can ride with
            peace of mind, thanks to the scooter providing precise information about the
            remaining battery.
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content">
          <h3>Extraordinary Experience:</h3>
          <p>Rhyno is more than just a mode of transportation. It is
            an experience of sheer comfort and style! A seamless fusion of minimalism,
            sophistication, and a touch of masculinity!
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content">
          <h3>Rugged and Simple Design:</h3>
          <p>We’ve had enough of the EVs looking and feeling like
            fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
            ending up spending weeks and months at service stations for complex repairs. We
            took a bold step of making something raw, rugged, and practical. We kept it so
            simple that even your trusted local mechanic can understand and repair most of it. If
            you have reached this far, why not to take a test ride? Click here to locate your
            nearest dealership or book a test ride at your home!
          </p>
        </div>
      </Carousel.Item>
    </Carousel>



{/* button pre-book */}

<div className="floating-container">
      <Link to="/prebook" className="btn btn-secondary">Pre-Book</Link>
      </div>

     
  </div>
  );
};

export default Home;
