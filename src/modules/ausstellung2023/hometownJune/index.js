import React from 'react';
import './hometownJune.scss';
import { hometownJune } from '../../../assets/images/image';

export default function HometownJune() {
    return (
        <section className="hometown-june">
            <div className="container3">
                <div className="hometown-june-div">
                    <div className="hometown-june-image">
                        <img src={hometownJune} alt="hometownJune" />
                    </div>
                    <div className="hometown-june-content">
                        <p>In June 2023, Hometown Heroes made its debut with a captivating exhibition at the "qvartr Gallery" in Hamburg. The event garnered remarkable attention, drawing in over 350 guests. In a remarkable collaboration with the organization "Young Bafana" and their Charity Cup from Cape Town, we transformed the gallery into an immersive experience, far from a conventional exhibit.</p>
                        <p> The evening was thoughtfully curated to transport attendees to the vibrant spirit of the people calling Cape Town their home. African food trucks tantalized taste buds, DJs infused the air with infectious Afro-beats, and a tattoo artist worked his craft on-site. Partners such as Knut Hansen, Bolzplatzkind, Canon Germany, OMR, Nivea, Vitamin Well, Vartan Rocks and many more, played a pivotal role, generously donating their services. The tattoo artist, for instance, not only performed his art but also donated all proceeds. Similarly, Knut Hansen sponsored and served Gin & Tonics, with all profits directed to the cause. The DJs, too, played for a greater purpose. </p>
                        <p>Amidst the festivities, 34 of my photographs were showcased and made available for purchase. Additionally, a 144-page photographic masterpiece capturing the essence of Cape Town was offered to attendees. This insightful photobook could be peordered on the spot. </p>
                        <p>Our aim was clear - to transport guests to the heart of Cape Town, to sensitize them to our cause while ensuring they savored every moment of the evening. We sought to create awareness through an enjoyable experience. </p>
                        <p>Looking ahead, we envision replicating these events for each Hometown Heroes Edition coming up in the future, extending beyond Hamburg to several major cities in Germany. This ambitious "Hometown Heroes Tour" will involve collaborations with local sponsors in each city and steadfast partners committed to supporting and financing these impactful initiatives.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
