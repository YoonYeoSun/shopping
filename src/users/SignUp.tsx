import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignUpForm {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

const SignUp = () => {

    const [formData, setFormData] = useState<SignUpForm>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {username, email, password, confirmPassword} = formData;

        if(!username || !email || !password || !confirmPassword) {
            alert("모든 항목을 입력해주세요");
            return;
        }

        if(password != confirmPassword) {
            alert("비밀번호가 일치하지않습니다.");
            return;
        }

        console.log(`입력된 데이터: `, formData);
        alert("회원가입이 완료되었습니다.");
        navigate("/signin");
    }


    return (
        <div className="signup">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">아이디</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="아이디를 입력하세요"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">이메일</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="이메일를 입력하세요"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="비밀번호를 입력하세요"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">비밀번호 확인</label>
                    <input
                        type="text"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="비밀번호를 입력하세요"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">등록</button>   
            </form>
        </div>
    )
}

export default SignUp;