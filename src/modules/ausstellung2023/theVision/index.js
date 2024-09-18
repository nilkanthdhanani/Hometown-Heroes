import React from 'react';
import './theVision.scss'
import { theVision } from '../../../assets/images/image';

export default function TheVision() {
    return (
        <section className="the-vision">
            <div className="container3">
                <div className="the-vision-div"> 
                    <div className="the-vision-div1">
                        <img src={theVision} alt="theVision" />
                        <h2>THE VISION</h2>
                    </div>
                    <div className="the-vision-div2">
                        <p>We believe in the power of collective action. Consequently, we want to work closely with established local organizations to facilitate lasting changes and positive impacts in each country.</p>
                        <p>As we set our sights on the future, our vision includes orchestrating exhibitions across Germany, leveraging our robust network of partners, clients, and friends. Our aspiration is to showcase each unique edition in key cities throughout the nation, mirroring the immersive experiences we've thoughtfully curated. These events will encompass galleries and collaborative sponsorships, aiming to infuse the essence of Hometown Heroes into local communities, fostering awareness, solidarity, and impactful change. Moreover, these gatherings will serve as impactful platforms for raising funds, which will also be channeled to organizations within the respective countries. These organizations are dedicated to supporting and aiding the individuals whose stories we document and whose lives we aim to improve.</p>
                    </div>
                </div>
                <form>
                    <label>Username:</label> <br />
                    <input type="text" id='text' name='text' autoFocus />
                    <input type="checkbox" checked id='text' name='text' autoComplete='text' />
                    <input type="submit" />
                </form>
            </div>
        </section>
    )
}
