import React from 'react';
import './aussBanner2024.scss';
import { heroBanner } from '../../../assets/images/image';

export default function AussBanner2024() {
  return (
    <section className="auss-banner2">
      <div className="container5">
        <div className="auss-banner2-div">
          <div className="auss-banner2-head">
            <h1>2024</h1>
          </div>
          <div className="auss-banner2-image">
            <img src={heroBanner} alt="heroBanner" />
          </div>
          <div className="auss-banner2-div-intro">
            <h1>INTRO</h1>
            <p>“Welcome to this comprehensive document that encapsulates the essence and journey of HOMETOWN HEROES. Within these pages, you will find a vivid portrayal of our mission, our experiences, and our unwavering commitment to driving positive change. Explore how HOMETOWN HEROES, with its roots in the townships of Cape Town, will blossom into a platform of compassion, artistry, and impactful collaborations.“</p>
          </div>
        </div>
      </div>
    </section>
  )
}
