import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
    name: string,
    price: number,
    description: string,
    image: File | null
}

const AddProduct = () => {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        price: 0,
        description: "",
        image: null
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const files = (e.target as HTMLInputElement).files;

        if(name === "image" && files) {
            setFormData({...formData, image: files[0]});
        } else {
            setFormData({...formData, [name]: value});
        }
    }

    // FormEvent -> 더 이상 사용하지않음
    // 취소선 : 디프리케이티드(Deprecated)
    /*
        1. <form onSubmit={...}> 폼 제출 이벤트일 때 (가장 흔한 경우)
        // ❌ 기존 방식 (취소선 발생)
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        };

        //  최신 방식 (권장)
        const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        };

        2. <input onChange={...}> 등 값 변경 이벤트일 때값 변경 이벤트는 FormEvent가 아닌 ChangeEvent나 InputEvent를 사용해야 합니다.tsx
        // ❌ 기존 방식 (취소선 발생)
        const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        };

        //  최신 방식 (권장)
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        };
    */
    //const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, price, description, image } = formData;

        if(!name || !price || !description) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        console.log("formData: " , formData);
        alert("상품이 등록되었습니다.");
        
        navigate("/products");
    }

    return (
        <div className="add-product">
            <h2>상품 등록</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">상품명</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="상품명을 입력하세요"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="name">가격</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="가격을 입력하세요"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="name">설명</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="설명을 입력하세요"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="name">이미지</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">등록</button>
            </form>
        </div>
    )
}

export default AddProduct;