import { useState } from "react";
import mainImage from "../assets/hero.png";

const Home = () => {

    const [showNotice, setShowNotice] = useState<boolean>(true);

    const handleCloseNotice = () => {
        setShowNotice(false);
    }

    return (
        <div className="main">
            {
                showNotice && (
                    <div className="notice-popup">
                    <h3>여름 특가 세일</h3>
                    <p>전 상품 50% 할인!</p>
                    <button onClick={handleCloseNotice}>닫기</button>
                </div>
                )
            }

            <h2>컴퓨터기기 쇼핑몰</h2>
            <p>최신 컴퓨터 기기를 착한 가격에 만나보세요!</p>
            <div>
                <img className="main-image" src={mainImage} alt="메인이미지" />
            </div>
        </div>
    )
}

export default Home;