import React from 'react';
import './lebanon.scss';
import { lebanon } from '../../../assets/images/image';

export default function Lebanon() {
    return (
        <section className="lebanon">
            <div className="container4">
                <div className="lebanon-div">
                    <div className="lebanon-text">
                        <p><span>NOVEMBER 2023</span> In November, Hometown Heroes embarks on a transformative journey to Lebanon. Our three-week mission is more than just a trip; it's a commitment to stand with those who have faced immense adversity. </p>
                        <p>The situation in Lebanon is dire. The devastating explosion in Beirut left countless people without homes, and widespread protests reflect the urgency for change in the country. Amidst these challenges, we are determined to make a difference. Collaborating with local organizations, we will document the stories of resilience, hope, and the fight for a better future. </p>
                        <p>By shedding light on the struggles faced by these brave individuals, we aim to inspire change, not only within Lebanon but around the world. Together, we can amplify their voices and support the organizations working tirelessly to rebuild lives and restore hope. Stay tuned for updates on our journey, as we strive to bring about positive change in the lives of those who need it most.</p>
                    </div>
                    <div className="lebanon-head">
                        <h2>HOMETOWN HEROES</h2>
                        <img src={lebanon} alt="lebanon" />
                        <h3>LEBANON</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
