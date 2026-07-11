import products from "../data/products.json";
import mouse from "../assets/mouse.png";
import keyboard from "../assets/keyboard.png";
import monitor from "../assets/monitor.png";
import usb from "../assets/usb.png";
import { Link } from "react-router-dom";

export const imageMap: Record<string, string> = {
        "mouse.png": mouse,
        "keyboard.png": keyboard,
        "monitor.png": monitor,
        "usb.png": usb
}

const ProductList = () => {

    return (
        <div className="product-list">
            <h2>상품 목록</h2>
            <div className="card-container">
                {
                    products.map((product: any) => (
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
        </div>
    )
}

export default ProductList;