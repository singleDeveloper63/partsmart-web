import { useState , useEffect, createRef } from 'react'
import './header.scss';
import logo from '../../assets/images/logo.png';
import ru from '../../assets/images/ru.svg';
import uz from '../../assets/images/uz.svg';
import { HiOutlineTranslate } from 'react-icons/hi';
import { AiOutlineShoppingCart , AiOutlineHeart } from 'react-icons/ai'
import { VscAccount , VscMenu  , VscClose , VscKey , VscMail , VscSearch} from 'react-icons/vsc';
import { IoIosSearch } from 'react-icons/io';
function Header(props){

    const [authVisible, setauthVisible] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            const elem = document.getElementById("header")
            if(window.scrollY>40){
                elem.classList.add("sticky")
            }else{
                elem.classList.remove("sticky")
                }
            }
        )
    },[])
    return(
        <>
            <nav className="navbar header">
                <div className="container-fluid">
                    <div className="ml-auto d-inline-flex justify-content-end align-items-center">
                        <a href="#" className="nav-link" onClick={()=>{
                            setauthVisible( prev => !prev);
                        }}>
                            <VscAccount/>  <span className="d-none d-sm-inline-block">Shaxsiy kabinet</span>
                        </a>
                        <div className="dropdown">
                            <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle wi">
                                <HiOutlineTranslate/> Til
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li className="dropdown-item">
                                    <a href="#"><img src={uz} alt="uzbekish"/>  O'zbek</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#"><img src={ru} alt="russian"/>  Rus</a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <a href="#" data-toggle="collapse" data-target="#search" className="nav-link">
                                <IoIosSearch/> VIN
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <AuthModal visible={authVisible} onChange={()=>setauthVisible(false)}/>
            <div className="collapse vinsearch" id="search">
                <div className="input-group">
                    <input type="search" placeholder="VIN Raqami bo'yicha izlash" className="form-control"/>
                    <div className="input-group-append">
                        <button className="btn input-group-btn">Izlash</button>
                    </div>
                </div>
            </div>
            <div className="header-navbar" id="header">
                <div className="left">
                    <button>
                        <VscMenu/>
                    </button>
                    <button data-toggle="collapse" data-target="#productSearch">
                        <IoIosSearch/>
                    </button>
                </div>
                <img src={logo} alt="logotip"/>
                <div className="cart-actions">
                    <button>
                        <AiOutlineHeart/>
                    </button>
                    <button>
                        <AiOutlineShoppingCart/>
                    </button>
                </div>
            </div>
            <div className="collapse productSearch" id="productSearch">
                <div className="input-group">
                    <input type="text" placeholder="Izlash" className="form-control"/>
                    <div className="input-group-append">
                        <button className="input-group-btn">Izlash</button>
                    </div>
                </div>
                <button className="close" data-toggle="collapse" data-target="#productSearch"> <VscClose/></button>
            </div>

            <div className="page">
                {
                    props.children
                }
            </div>
        </>
    )

    
function AuthModal({visible , onChange}){
    useEffect(()=>{
        
    },[])
    
    const [authType,setAUthType] = useState("signin");
    const [isVisible , setIsVisible] = useState(visible);

    return(
        <div className={`auth-modal ${isVisible ? "aModalVisible" : ""}`}>
            <div className="overlay" onClick={()=>{
                setIsVisible(false)
                onChange()
            }}></div>
            <div className="auth-modal-toggler">
                <button className={authType === "signin" ? "active" : ""} onClick={()=>setAUthType("signin")}>KIRISH</button>
                <button className={authType === "signup" ? "active" : ""} onClick={()=>setAUthType("signup")}>RO'YXATDAN O'TISH</button>
            </div>

            <button className="close" onClick={()=>{
                    setIsVisible(false);
                    onChange()
                }}> <VscClose/> </button>

            <div className="auth-modal-content">
                <div className={`signin ${authType === "signin" ? "aVisible" : ""}`}>
                    <div className="form-group">
                        <label htmlFor="login"><VscMail/> Elektron pochta</label>
                        <input type="text" className="form-control" id="login"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="parol"><VscKey/> Parol</label>
                        <input type="password" className="form-control" id="parol"/>
                    </div>
                    <button className="signinBtn">Kirish</button>
                </div>

                <div className={`signup ${authType === 'signup' ? 'aVisible' : "" }`}>
                    <div className="form-group">
                        <label htmlFor="username"><VscMail/>  Elektron pochta</label>
                        <input type="email" className="form-control" id="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><VscKey/>  Parol</label>
                        <input type="password" id="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="retype"><VscKey/>  Parolni qayta kiriting</label>
                        <input type="password" className="form-control" id="retype"/>
                    </div>
                    <button className="signupBtn">Ro'yxatdan o'tish</button>
                </div>
            </div>
        </div>
    )
}
}


export default Header;