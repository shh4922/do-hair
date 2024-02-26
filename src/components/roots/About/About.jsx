import React from "react";
import "./about.css"

function About() {
    return (
        <section className="about">
            <div className="about-left">
                <div className="about-left-content">
                    <h2>about</h2>
                    <p>D.O Hair is your companion on a journey to beauty,<br></br> offering top-notch salon and scalp spa services</p>
                    <div>
                        <strong>Decolte & Hot Stone Technic</strong>
                        <p>네이프선, 어깨, 등 마사지를 통한 <br></br> 피로회복 및 혈액순환 효과</p>
                    </div>
                    <div>
                        <strong>Scaling & hairline acupressure</strong>
                        <p>정확한 진단과 검사를 통한<br></br>휴식/케어/치료 목적의 헤드스파</p>
                    </div>
                    <div>
                        <strong>Bubble shampoo technique</strong>
                        <p>이탈리아 유기농 원료 제품으로<br></br>남녀노소 케어가능</p>
                    </div>
                </div>
            </div>
            <div className="about-right">
                <div className="about-right-content">
                    <img src="staticfile/img1.jpeg"></img>
                </div>
            </div>
        </section>
    );
}

export default About;
