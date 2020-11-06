import { useState , useEffect, createRef } from 'react'
import './header.scss';
import logo from '../../assets/images/logo.png';
import ru from '../../assets/images/ru.svg';
import uz from '../../assets/images/uz.svg';
import { HiMail, HiOutlineTranslate, HiPhone } from 'react-icons/hi';
import chevro from '../../assets/images/chevro.svg';
import daewoo from '../../assets/images/daewoo.svg';
import ravon from '../../assets/images/ravon.png';
import { AiOutlineShoppingCart , AiOutlineDown,AiOutlineHeart , AiOutlineFacebook , AiOutlineTwitter , AiOutlineInstagram, AiOutlineClose  } from 'react-icons/ai'
import { VscAccount , VscMenu  , VscClose , VscKey , VscMail } from 'react-icons/vsc';
import { IoIosSearch } from 'react-icons/io';
import { CSSTransition } from 'react-transition-group';


function Header(props){

    const [authVisible, setauthVisible] = useState(false);
    const [sidebarOpen , setSidebarOpen] = useState(false)
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
                            document.body.classList.add("disableScroll")
                        }}>
                            <VscAccount/>  Shaxsiy kabinet
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
            <CSSTransition in={authVisible} timeout={400} classNames="fade">
                <AuthModal visible={authVisible} onChange={()=>setauthVisible(false)}/>
            </CSSTransition>

            <div className="collapse vinsearch" id="search">
                <div className="input-group">
                    <input type="search" placeholder="VIN Raqami bo'yicha izlash" className="form-control"/>
                    <div className="input-group-append">
                        <button className="btn input-group-btn">Izlash </button>
                    </div>
                </div>
            </div>
            <div className="header-navbar" id="header">
                <div className="left">
                    <button onClick={()=>setSidebarOpen(true)}>
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
                        <button className="input-group-btn"> <span className="d-inline d-sm-none"> <IoIosSearch size="50"/> </span> <span className="d-none d-sm-inline">Izlash</span></button>
                    </div>
                </div>
                <button className="close" data-toggle="collapse" data-target="#productSearch"> <VscClose/></button>
            </div>

            <div className="page">
                {
                    props.children
                }
            </div>
            <Footer/>
            <Sidebar visible={sidebarOpen}/>
        </>
    )


    function Footer(){
        return(
            <div className="footer">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4>Bizning manzilimiz</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <h4>Aloqa</h4>
                        <ul>
                            <li><HiMail/> singledeveloper63@gmail.com</li>
                            <li><HiPhone/> +998 (93) 772-07-49</li>
                            <li><HiPhone/> +998 (99) 035-93-54</li>
                            <li><i className="fab fa-fw fa-telegram-plane"></i>  <a href="https://t.me/singledeveloper63">Telegram</a></li>
                        </ul>
                    </div>

                    
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4>Havolalar</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <h4>Biz ijtimoiy tarmoqlarda</h4>
                        <ul>
                            <li><AiOutlineFacebook/>  Facebook</li>
                            <li><AiOutlineInstagram/> Instagram</li>
                            <li><AiOutlineTwitter/> Twitter</li>
                            <li><i className="fab fa-fw fa-telegram-plane"></i> Telegram</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
        
    function AuthModal({visible , onChange}){
        
        const [authType,setAUthType] = useState("signin");
        const [isVisible , setIsVisible] = useState(visible);

        return(
            <div className={`auth-modal ${isVisible ? "aModalVisible" : ""}`}>
                <div className="auth-modal-toggler">
                    <button className={authType === "signin" ? "active" : ""} onClick={()=>setAUthType("signin")}>KIRISH</button>
                    <button className={authType === "signup" ? "active" : ""} onClick={()=>setAUthType("signup")}>RO'YXATDAN O'TISH</button>
                </div>

                <button className="close" onClick={()=>{
                        setIsVisible(false);
                        document.body.classList.remove("disableScroll");
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

    function Sidebar({visible}){
        const [open,setOpen] = useState(visible);

        return(
            <>
                <div className={`sidebar ${open && "svisible" }`}>
                    <img src={logo} alt="logotip" className="sidebar_logo d-block mx-auto"/>

                    <ul className="sidebar-menu">
                        <li>
                            <div data-toggle="collapse" data-target="#daewoo"><img src={daewoo} alt="Daewoo"/> <span>Daewoo / Ravon / Chevrolet</span>  <AiOutlineDown/></div>
                            <ul className="collapse" id="daewoo">
                                <li>Matiz</li>
                                <li>Gentra / Lacetti</li>
                            </ul>
                        </li>
                        <li>
                            <div data-toggle="collapse" data-target="#ravon"><img src={ravon} alt="Ravon"/><span>Chevrolet / Ravon</span> <AiOutlineDown/></div>
                            <ul className="collapse" id="ravon">
                                <li>Nexia / Nexia R3</li>
                                <li>SPARK / R2</li>
                                <li>COBALT / R4</li>
                                <li>TRACKER</li>
                            </ul>
                        </li>
                        <li>
                            <div data-toggle="collapse" data-target="#chevrolet"><img src={chevro} alt="Chevrolet"/>  <span>Chevrolet</span>  <AiOutlineDown/></div>
                            <ul className="collapse" id="chevrolet">
                                <li>Damas / Labo</li>
                                <li>EQUINOX</li>
                                <li>TRAILBLAZER</li>
                                <li>TRAVERSE</li>
                            </ul>
                        </li>
                    </ul>
                    <button className="close" onClick={()=>{
                        setOpen(false);
                        setSidebarOpen(false)
                    }}> <span>&times;</span> </button>
                </div>
                <div className="sidebar_overlay" onClick={()=>{
                        setOpen(false);
                        setSidebarOpen(false)
                }}></div>
            </>
        )
    }

}


export default Header;