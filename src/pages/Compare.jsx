import React from "react";
import { Link } from "react-router-dom";
import sixbikes from "../assets/bikespng/sixbikes.png";
import wood from "../assets/bikespng/wood95.png";
import final from "../assets/bikespng/final177.png";
import blue from "../assets/bikespng/blue.png";
import "./Compare.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Compare = () => {
  return (
    <div className="compare">
      <h1>Compare All Models</h1>
      <img src={sixbikes} className="img-fluid" alt="bikes photo" />
      <img src={wood} className="img-fluid" alt="bikes photo" />
      <img src={final} className="img-fluid" alt="bikes photo" />
      <img src={blue} className="img-fluid" alt="bikes photo" />

      <Link to="/prebook">Buy Now</Link>

      <table>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Rhyno SE03 Lite</th>
            <th>Rhyno SE03</th>
            <th>Rhyno SE03 Max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Specification">Battery</td>
            <td data-label="Rhyno SE03 Lite">1.8Kwh</td>
            <td data-label="Rhyno SE03">2.7Kwh</td>
            <td data-label="Rhyno SE03 Max">2.7Kwh</td>
          </tr>
          <tr>
            <td data-label="Specification">Battery features</td>
            <td data-label="Rhyno SE03 Lite">LFP with 1500 cycles</td>
            <td data-label="Rhyno SE03">LFP with 1500 cycles</td>
            <td data-label="Rhyno SE03 Max">LFP with 1500 cycles</td>
          </tr>
          <tr>
            <td data-label="Specification"></td>
            <td data-label="Rhyno SE03 Lite">Active Balancing</td>
            <td data-label="Rhyno SE03">Active Balancing</td>
            <td data-label="Rhyno SE03 Max">Active Balancing</td>
          </tr>
          <tr>
            <td data-label="Specification"></td>
            <td data-label="Rhyno SE03 Lite">Waterproof (IP67)</td>
            <td data-label="Rhyno SE03">Waterproof (IP67)</td>
            <td data-label="Rhyno SE03 Max">Waterproof (IP67)</td>
          </tr>
          <tr>
            <td data-label="Specification">Battery warranty</td>
            <td data-label="Rhyno SE03 Lite">3 years</td>
            <td data-label="Rhyno SE03">3 Years</td>
            <td data-label="Rhyno SE03 Max">3 Years</td>
          </tr>
          <tr>
            <td data-label="Specification">Charging time</td>
            <td data-label="Rhyno SE03 Lite">3 hours (12A)</td>
            <td data-label="Rhyno SE03">4 hours (12A)</td>
            <td data-label="Rhyno SE03 Max">4 hours (12A)</td>
          </tr>
          <tr>
            <td data-label="Specification">Motor</td>
            <td data-label="Rhyno SE03 Lite">1500W</td>
            <td data-label="Rhyno SE03">1500W</td>
            <td data-label="Rhyno SE03 Max">2000W</td>
          </tr>
          <tr>
            <td data-label="Specification">Max speed</td>
            <td data-label="Rhyno SE03 Lite">55 km/h</td>
            <td data-label="Rhyno SE03">55 km/h</td>
            <td data-label="Rhyno SE03 Max">65 km/h</td>
          </tr>
          <tr>
            <td data-label="Specification">Warranty on electronics</td>
            <td data-label="Rhyno SE03 Lite">1 year</td>
            <td data-label="Rhyno SE03">1 year</td>
            <td data-label="Rhyno SE03 Max">1 year</td>
          </tr>
          <tr>
            <td data-label="Specification">Max range (@30km/h)</td>
            <td data-label="Rhyno SE03 Lite">100 km</td>
            <td data-label="Rhyno SE03">150 km</td>
            <td data-label="Rhyno SE03 Max">120 km</td>
          </tr>
          <tr>
            <td data-label="Specification">Max range (@45km/h)</td>
            <td data-label="Rhyno SE03 Lite">90 km</td>
            <td data-label="Rhyno SE03">110 km</td>
            <td data-label="Rhyno SE03 Max">100 km</td>
          </tr>
          <tr>
            <td data-label="Specification">Max range (@full speed)</td>
            <td data-label="Rhyno SE03 Lite">60 km</td>
            <td data-label="Rhyno SE03">90 km</td>
            <td data-label="Rhyno SE03 Max">80 km</td>
          </tr>
          <tr>
            <td data-label="Specification">Other key benefits</td>
            <td data-label="Rhyno SE03 Lite">Fire-safe Battery</td>
            <td data-label="Rhyno SE03">Fire-safe Battery</td>
            <td data-label="Rhyno SE03 Max">Fire-safe Battery</td>
          </tr>
          <tr>
            <td data-label="Specification"></td>
            <td data-label="Rhyno SE03 Lite">Range prediction</td>
            <td data-label="Rhyno SE03">Range prediction</td>
            <td data-label="Rhyno SE03 Max">Range prediction</td>
          </tr>
          <tr>
            <td data-label="Specification"></td>
            <td data-label="Rhyno SE03 Lite">Comfortable ride</td>
            <td data-label="Rhyno SE03">Comfortable ride</td>
            <td data-label="Rhyno SE03 Max">Comfortable ride</td>
          </tr>
          <tr>
            <td data-label="Specification"></td>
            <td data-label="Rhyno SE03 Lite">Stable and safe</td>
            <td data-label="Rhyno SE03">Stable and safe</td>
            <td data-label="Rhyno SE03 Max">Stable and safe</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Compare;
