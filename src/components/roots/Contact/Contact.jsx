import React, { useEffect, useRef } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import "./contact.css"

function Contact() {
    return (
        <section className="contact">
            <div className="contact-left-content">
                <div>
                    <strong>Zip-code</strong>
                    <p>61725</p>
                </div>
                <div>
                    <strong>Address</strong>
                    <p>광주 남구 서문대로 701번길 2 2층 디오헤어</p>
                </div>
                <div>
                    <strong>Phone</strong>
                    <p>0507-1415-0023</p>
                </div>
                <div>
                    <strong>Time</strong>
                    <p>10:00 - 20:00</p>
                </div>
                <div>
                    <strong>Parking</strong>
                    <p>Available</p>
                </div>
            </div>
            <Map className="map" center={{ lat: 35.1221880, lng: 126.8979354 }} >
                <MapMarker position={{ lat: 35.1221880, lng: 126.8979354 }}>
                </MapMarker>
            </Map>

        </section>
    );
}

export default Contact;
