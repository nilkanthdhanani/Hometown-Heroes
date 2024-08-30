import React from 'react';
import './theBook.scss';
import { theBook, theBook1, theBook2, theBook3 } from '../../../assets/images/image';

export default function TheBook() {
    return (
        <>
            <div className="book">
                <div className="container9">
                    <div className="the-book">
                        <div className="the-book-div">
                            <h3>THE BOOK</h3>
                            <img src={theBook} alt="theBook" />
                            <div className="the-book-div-text">
                                <p>The Hometown Heroes Photobook is more than just pictures; it's an emotional journey through Cape Town's vibrant life. Across 144 pages, it brings you face-to-face with the hopes and struggles of the people we met. </p>
                                <p>As you flip through, you'll dive into the heart of Cape Town, feeling the authenticity of each image. It's not just a book; it's a commitment to change. </p>
                                <p>Each purchase supports organizations on the ground, making a real impact in the lives we capture. <br />
                                    This is just the beginning. For every Hometown Heroes edition in the future, there will be a corresponding photobook—a captivating coffee table book. </p>
                                <p>Each book purchase continues to make a difference, contributing to organizations dedicated to supporting those in need in each respective country. </p>
                                <p>Join us as we explore the world through our lens, capturing the essence of humanity in every corner of the globe.</p>
                            </div>
                        </div>
                        <h2>SAMPLES</h2>
                        <div className="the-image-book">
                            <img src={theBook1} alt="theBook1" />
                            <img src={theBook2} alt="theBook2" />
                            <img src={theBook3} alt="theBook3" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
