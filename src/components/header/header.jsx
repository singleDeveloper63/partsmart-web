import { useState , useEffect } from 'react'
import './header.scss';
import logo from '../../assets/images/logo.png';
import ru from '../../assets/images/ru.svg';
import uz from '../../assets/images/uz.svg';
import { HiOutlineTranslate,HiOutlineShoppingCart} from 'react-icons/hi';
import { AiOutlineHeart ,} from 'react-icons/ai'
import { VscAccount , VscMenu  , VscClose } from 'react-icons/vsc';
import { IoIosSearch } from 'react-icons/io';
import { CSSTransition } from 'react-transition-group';
import { Link , Redirect} from 'react-router-dom';
import { SnackbarProvider } from 'react-snackbar-alert';
import { AuthModal , Footer ,Sidebar }  from '../';

function Header(props){

    const [authVisible, setauthVisible] = useState(false);
    const [sidebarOpen , setSidebarOpen] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            const elem = document.getElementById("header")
            if(window.scrollY>40){
                if(elem){
                    elem.classList.add("sticky")
                }
            }else{
                    if(elem){
                        elem.classList.remove("sticky")
                    }
                }
            }
        )
    },[])
    
    useEffect(()=>{
        if(sidebarOpen){
            document.body.classList.add("disableScroll")
        }else{
            document.body.classList.remove("disableScroll")
        }
    },[sidebarOpen])

    return(
        <>
            <nav className="navbar header">
                <div className="container-fluid">
                    <div className="ml-auto d-inline-flex justify-content-end align-items-center">
                        <a href="#" className="nav-link" onClick={()=>{
                            if(localStorage.getItem("partsmartUser")){
                                return(
                                    <Redirect to='/profile'/>
                                )
                            }else{
                                setauthVisible( prev => !prev);
                                document.body.classList.add("disableScroll")
                            }
                        }}>
                            <VscAccount/>  Shaxsiy kabinet
                        </a>
                        <div className="dropdown">
                            <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle wi">
                                <HiOutlineTranslate/> Til
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li className="dropdown-item" >
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
                    <button data-toggle="collapse" data-target="#productSearch" onClick={()=>{
                        document.body.classList.add("disableScroll")
                    }}>
                        <IoIosSearch/>
                    </button>
                </div>
                <Link to='/'><img src={logo} alt="logotip"/></Link>
                <div className="cart-actions">
                    <button>
                        <AiOutlineHeart/>
                    </button>
                    <button>
                        <HiOutlineShoppingCart/>
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
                <button className="close" data-toggle="collapse" data-target="#productSearch" onClick={()=>{
                    document.body.classList.remove("disableScroll")
                }}> <VscClose/></button>
            </div>

            <div className="page">
                <SnackbarProvider position="bottom-right">
                    {
                        props.children
                    }
                </SnackbarProvider>
            </div>
            <Footer/>
            <Sidebar visible={sidebarOpen} onChange={()=>setSidebarOpen(false)}/>
        </>
    )
    
}
export default Header;