import React, { useEffect , useState} from 'react';
import './productActions.scss';
import { useLocation } from 'react-router-dom';
import { FullLoad } from '../../components';
import qs from 'query-string';
import { useSelector , useDispatch } from 'react-redux';
import { UIActions } from '../../redux/actions';
import General from './general/prodGen';
import Helmet from 'react-helmet';
import Additional from './additional/additional';

function ProductActions(props){
    const dispatch = useDispatch();
    const product = useSelector(({ui}) => (ui.currentProd));
    const { state  } = useLocation();
    const [loading , setLoading] = useState(true);
    const [prod , setProd] = useState(product.data);
    const [stId , setStId] = useState(state && state.id ? state.id : "");
    const [qsId,  setQsId] = useState(qs.parse(props.location.search).id);
    useEffect(()=>{
        setStId(state && state.id ? state.id : "");
    },[state])

    useEffect(()=>{
        const id = qs.parse(props.location.search).id;
        setQsId(id);
    },[props.location.search])

    useEffect(()=>{
        dispatch(UIActions.setActiveProduct( stId ? stId : qsId));

        return () => {
            dispatch(UIActions.setActiveToDefault())
        }
    },[])

    useEffect(()=>{
        setLoading(product.pending)
        setProd(product.data);
    },[product])

    if(loading){
        return <FullLoad/>
    }else{
        return(
            <div className="productActions">
                <Helmet>
                    <title> { prod.product.title.uz } </title>
                    <meta name="description" content={`Partsmartdan sotib oling , avtomobilingiz uchun eng yaxshi ehtiyot qismlari : ${prod.product.title.uz}`}/>
                    <meta name="keywords" content={prod.product.seo.keywords.join(',')}/>
                </Helmet>
                <General data={prod}/>
                <Additional/>
            </div>
        )
    }
}

export default ProductActions;