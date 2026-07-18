import { NavLink, useNavigate } from "react-router-dom";

interface HeaderProps {
    isLoggedIn: boolean,
    userId: string | null, 
    userRole: string | null,
    onLogout: () => void
}

const Header = ({isLoggedIn, userId, userRole, onLogout}: HeaderProps) => {

    const navigate = useNavigate();

    return (
        <header className="header">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">상품목록</NavLink>
                <NavLink to="/products/add">상품등록</NavLink>
                {
                    userRole === "admin" &&
                    <NavLink to="/dashboard">관리자</NavLink>
                }                
                {isLoggedIn ? 
                    (
                        <div className="header-user">
                            <span>{userId}님</span>
                            <button
                                onClick={() => {
                                    onLogout();
                                    navigate("/");
                                }}
                                className="logout-btn"
                            >
                                로그아웃
                            </button>
                        </div>
                    ) : 
                    (
                        <NavLink to="/signIn">로그인</NavLink>
                    )
                }
            </nav>
        </header>
    )
}

export default Header;