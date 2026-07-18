import products from "../data/products.json";
import mouse from "../assets/mouse.png";
import keyboard from "../assets/keyboard.png";
import monitor from "../assets/monitor.png";
import usb from "../assets/usb.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const imageMap: Record<string, string> = {
        "mouse.png": mouse,
        "keyboard.png": keyboard,
        "monitor.png": monitor,
        "usb.png": usb
}

const ProductList = () => {

    const [keyword, setKeyword] = useState<string>("");

    const filteredProducts = products.filter((p) => 
        p.name.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <div className="product-list">
            {/* 검색 기능 구현 */}
            <div className="search-area">
                <input 
                    type="text" 
                    placeholder="상품명을 검색하세요"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            
                {
                    filteredProducts.length === 0 ? 
                    (<p className="no-result">검색 결과가 없습니다.</p>) : 
                    (
                        <div className="card-container">
                            {
                                filteredProducts.map((product: any) => (
                                    <Link key={product.id} to={`/products/${product.id}`}>
                                        <div className="card">
                                            <img 
                                                src={imageMap[product.image]} 
                                                alt={product.name} 
                                                className="card-image"
                                            />
                                            <div className="card-body">
                                                <h3 className="card-title">{product.name}</h3>
                                                <p className="card-text">가격: {product.price}원</p>
                                            </div>
                                        </div>                  
                                    </Link>
                                ))
                            }
                        </div>
                    )
                }
        </div>
    )
}

export default ProductList;