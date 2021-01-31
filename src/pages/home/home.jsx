import './home.scss';
import {  useEffect } from 'react';
import {  Advantages , Subscribe ,Order , Related , ProductList } from '../../components';
import { useSelector , useDispatch } from 'react-redux';
import { UIActions } from '../../redux/actions';

function Home(){

    const dispatch = useDispatch();
    const { sliders , products } = useSelector(({ ui }) => (ui))

    useEffect(()=>{
        dispatch(UIActions.getSlides());
        dispatch(UIActions.getProducts());
    },[])

    return(
        <div className="home">
            <Related sliders={sliders.list} />
            <ProductList products={products.list}/>
            <Order/>
            <Advantages/>
            <Subscribe/>
        </div> 
    )
}


export default Home;