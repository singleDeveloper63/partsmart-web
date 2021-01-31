import './home.scss';
import {  useEffect } from 'react';
import {  Advantages , Subscribe ,Order , Related , ProductList } from '../../components';
import { useSelector , useDispatch } from 'react-redux';
import { UIActions } from '../../redux/actions';

function Home(){

    const dispatch = useDispatch();
    const { sliders , brands , products } = useSelector(({ ui }) => (ui))

    useEffect(()=>{
        dispatch(UIActions.getBrands());
        dispatch(UIActions.getSlides());
        dispatch(UIActions.getProducts());
    },[])

    useEffect(()=>{
        brands.list.forEach( async (brand) => {
            const res = await dispatch(UIActions.getCarModels(brand.id));
            dispatch(UIActions.setBrandCars({ id : brand.id , cars : res.payload }))
        })
    },[brands])


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