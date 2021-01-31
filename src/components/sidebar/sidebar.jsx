import React  from 'react';
import logo from '../../assets/images/logo.png';
import { useSelector  } from 'react-redux';
import {  AiOutlineDown } from 'react-icons/ai';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

    function Sidebar({visible , onChange}){

        const { cars } = useSelector(({ui})=>(ui));

        return(
            <>
                <div className={`sidebar ${visible && "svisible" }`}>
                    <img src={logo} alt="logotip" className="sidebar_logo d-block mx-auto"/>

                    <ul className="sidebar-menu">
                        {
                            cars.list.map((carM)=>{
                                return(
                                    <li key={v4()}>
                                        <div>
                                            <Link onClick={onChange} to={`/products?brand=${carM.brand.id}`}>
                                                <span>
                                                    <img src={carM.brand.image} alt=""/> {carM.brand.name}
                                                </span>
                                            </Link>
                                            <button data-toggle="collapse" data-target={`#${carM.brand.name}`}>
                                                <AiOutlineDown/>
                                            </button>
                                        </div>
                                        <ul className="collapse" id={carM.brand.name}>
                                            {
                                                carM.cars.map((car)=>{
                                                    return(
                                                        <li key={v4()}> 
                                                            <Link onClick={onChange} to={`/products?brand=${carM.brand.id}&car=${car.id}`}>
                                                                {car.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button className="close" onClick={onChange}> <span>&times;</span> </button>
                </div>
                <div className="sidebar_overlay" onClick={onChange}></div>
            </>
        )
    }

export default Sidebar;