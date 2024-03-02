import React from "react";
import "./service.css"

function Service() {
    return (
        <section className="service">
            <div className="service-content">
                <div>
                    <strong>Hair</strong>
                    <p>최신 헤어 트렌드를 반영한 다양한 커트로 새로운 변화를 경험하세요.
                        <br></br>
                        <br></br>
                        전문 스타일리스트가 고객 개개인에 맞는 세련된 스타일링을 제안합니다.
                    </p>
                    <img alt="광주 디오헤어 미용실 내부" src="staticfile/img4.jpeg"></img>
                </div>
                <div >
                    <strong>Spa</strong>
                    <p>광주 대표 정통헤드스파 도입매장으로써,
                        디자이너가 아닌 디플로마를 취득한 스파전문 직원이 시술하는 정통헤드스파 입니다.
                        <br></br>
                        <br></br>
                        디오헤어 헤드스파의 제품은
                        이탈리아 유기농 경작 테라피 제품으로써,
                        동물 임상 실험이 아닌 사람에게 직접 임상 성공하였습니다.</p>
                    <img alt="광주 디오헤어 헤드스파 기계" src="staticfile/img2.jpeg"></img>
                </div>
                <div >
                    <strong>Massage</strong>
                    <p>데콜테&핫스톤 테크닉으로 풍부한 마사지 경험을 선사합니다.
                        <br></br>
                        <br></br>
                        편안함과 아름다움을 동시에 즐길 수 있는 특별한 서비스를 만나보세요."
                    </p>
                    <img alt="마사지를 받는 사람" src="staticfile/img6.jpeg"></img>
                </div>
            </div>
        </section>
    );
}

export default Service;
