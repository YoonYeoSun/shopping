import mainImage from "../assets/hero.png";

const Home = () => {
    return (
        <div className="main">
            <h2>컴퓨터기기 쇼핑몰</h2>
            <p>최신 컴퓨터 기기를 착한 가격에 만나보세요!</p>
            <div>
                <img className="main-image" src={mainImage} alt="메인이미지" />
            </div>
        </div>
    )
}

export default Home;