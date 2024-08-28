import React from 'react';
import './aussBanner2024.scss';
import { heroBanner } from '../../../assets/images/image';

export default function AussBanner2024() {
  return (
    <>
      <div className="auss-banner2">
        <div className="container5">
            <div className="auss-banner2-div">
                <h2>2024</h2>
                <img src={heroBanner} alt="heroBanner" />
                <div className="auss-banner2-div-intro">
                    <h2>INTRO</h2>
                    <p>“Welcome to this comprehensive document that encapsulates the essence and journey of HOMETOWN HEROES. Within these pages, you will find a vivid portrayal of our mission, our experiences, and our unwavering commitment to driving positive change. Explore how HOMETOWN HEROES, with its roots in the townships of Cape Town, will blossom into a platform of compassion, artistry, and impactful collaborations.“</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
