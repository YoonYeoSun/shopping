import { useState } from "react";
import users from "../data/users.json";
import { Link, useNavigate } from "react-router-dom";

interface SignInForm {
    username: string,
    password: string,
}

interface SignInProps {
    onLogin: (username: string) => void;
}

const SignIn = ({onLogin}: SignInProps) => {

    const [formData, setFormData] = useState<SignInForm>({
        username: "",
        password: "",
    });

    const [loginResult, setLoginResult] = useState<string>("");

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {username, password} = formData;

        if(!username || !password) {
            alert("모든 항목을 입력하세요!");
            return;
        }

        console.log("formData: ", formData);
        
        //const matched = users.find(user => user.username === username && user.password === password);
        const matched = users.find((user) => {
            return user.username === username && user.password === password
        });

        if(matched) {
            setLoginResult("success");
            onLogin(username);
            alert("로그인 되었습니다.");
            navigate("/");
        } else {
            setLoginResult("fail");
            //alert("아이디또는 비밀번호가 올바르지 않습니다!");
            return;
        }
    }

    return (
        <div className="signin">
            <h2>로그인</h2>
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
                <button type="submit">로그인</button>   
            </form>
            <p className="signup-link">
                아직 계정이 없으신가요?
                <Link to="/signup">회원가입</Link>
            </p>
            {
                loginResult === "fail" && 
                    <p className="error">로그인 실패! 다시 시도해 주세요</p>
            }
        </div>
    )
}

export default SignIn;