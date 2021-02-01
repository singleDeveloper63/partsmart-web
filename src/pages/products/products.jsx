import React , { useState , useEffect } from 'react';
import { FullLoad , ProductCard , Radio } from '../../components';
import './products.scss';
import { useDispatch , useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { ProductActions }  from '../../redux/actions';
import { AiOutlineSearch } from 'react-icons/ai';
import nodata from '../../assets/images/nodata.jpg';


function Products(){
    const dispatch = useDispatch();
    const { pending , list } = useSelector(({main}) => (main.products));
    const [products,setProducts] = useState(list);
    const [load, setLoad] = useState(pending);

    useEffect(()=>{
        dispatch(ProductActions.getProductsWithFilter());
        dispatch(ProductActions.resetFilter());
    },[])

    useEffect(()=>{
        setProducts(list)
    },[list])

    useEffect(()=>{
        setLoad(pending);
    },[pending])

    if(load){
        return <FullLoad/>
    }else{
        return(
            <div className="products">
                <Filters/>
                <div className="productss-list">
                    {
                        products.length>0 ?
                            products.map((product) => {
                                
                                const { price , image , title , id } = product;
                                const data = { image : image , title : title.uz , price : price , id : id };

                                return(
                                    <ProductCard key={v4()} data={data}/>
                                )
                            })
                        :
                        <div className="no-content">
                            <img src={nodata} alt="Not found"/>
                            <h1> Berilgan parametrlar bo'yicha maxsulot topilmadi </h1>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

function Filters(){
    const dispatch = useDispatch();
    const { cars , categories } = useSelector(({ui})=>(ui));
    const { filters } = useSelector(({main})=>(main));

    const [catChecked , setCatChecked] = useState(filters.device_type);
    const [brChecked , setBrChecked] = useState(filters.brand);
    const [carChecked , setCarChecked] = useState(filters.car_model);
    const [yearChecked , setYearChecked] = useState(filters.year);

    const [ carModels , setCarModels ] = useState([]);
    const [years, setYears] = useState([]);

    useEffect(()=>{
        setBrChecked(filters.brand);
        setCatChecked(filters.device_type);
        if(filters.brand !== ""){
            setCarChecked(filters.car_model);
        }else{
            setCarChecked("")
        }
        setYearChecked(filters.year);

        if(filters.car_model !== ""){
            carModels.forEach((cm)=>{
                if(cm.id === filters.car_model ){
                    setYears([].concat(cm.years))
                }
            })
        }else{
            setYears([])
        }
    },[filters]);

    useEffect(()=>{
        setCarChecked("");
        dispatch(ProductActions.setFilter({car_model : ""}))
        cars.list.forEach((car)=>{
            if(car.brand.id === brChecked){
                setCarModels(()=>(car.cars))
            }
        })
    },[brChecked])

    useEffect(()=>{
        if(carModels.length<0){
            dispatch(ProductActions.setFilter({car_model : ""}));
            setCarChecked("");
        }
        carModels.forEach((cm)=>{
            if(cm.id === filters.car_model){
                setYears([].concat(cm.years))
            }
        })
    },[carModels]);

    return(
        <div className="filters">
            <div className="filter-item">
                <div className="filter-item-toggler" data-toggle="collapse" data-target="#bfi">
                    Brandlar
                </div>
                <div className="collapse show" aria-expanded="false" id="bfi">
                    {
                        cars.list.map((car,index)=>{
                            return(
                                <div key={v4()} className="filter">
                                    <Radio value={car.brand.id} group="brand" id={`brand-${index}`}
                                        checked={brChecked === car.brand.id}
                                        onChange={val => {
                                            dispatch(ProductActions.setFilter({brand : car.brand.id }))
                                        }}/>
                                    <label className="lb" htmlFor={`brand-${index}`}>
                                        { car.brand.name }
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
                /** Car models filter */
            }
            <div className="filter-item">
                <div className="filter-item-toggler" data-toggle="collapse" data-target="#cmfi">
                    Avtomobil modellari
                </div>
                <div className="collapse show" aria-expanded="false" id="cmfi">
                    {
                        carModels.map((carM,index)=>{
                            return(
                                <div key={v4()} className="filter">
                                    <Radio group="carModel" id={`carMod-${index}`} checked={ carChecked === carM.id }
                                        onChange={()=>{
                                            dispatch(ProductActions.setFilter({car_model : carM.id}))
                                        }}/>
                                    <label className="lb" htmlFor={`carMod-${index}`}>
                                        { carM.name }
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
                /**  Years filter */
            }
            <div className="filter-item">
                <div className="filter-item-toggler" data-toggle="collapse" data-target="#yearfi">
                    Yillar
                </div>
                <div className="collapse show" aria-expanded="false" id="yearfi">
                    {
                        years.map((year,index)=>{
                            return(
                                <div key={v4()} className="filter">
                                    <Radio group="yearsFilter" id={`year-${index}`} checked={ yearChecked === year }
                                        onChange={()=>{
                                            dispatch(ProductActions.setFilter({year : year}))
                                        }}/>
                                    <label className="lb" htmlFor={`year-${index}`}>
                                        { year }
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
                /** Category filters */
            }
            <div className="filter-item">
                <div className="filter-item-toggler" data-toggle="collapse" data-target="#cfi">
                    Kategoriyalar
                </div>
                <div className="collapse show" aria-expanded="false" id="cfi">
                    {
                        categories.list.map((cat,index)=>{
                            return(
                                <div key={v4()} className="filter">
                                    <Radio group="category" id={`cat-${index}`} checked={catChecked === cat.id}
                                        onChange={()=>{
                                            dispatch(ProductActions.setFilter({device_type : cat.id}))
                                        }}/>
                                    <label className="lb" htmlFor={`cat-${index}`}>
                                        { cat.name.uz }
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <button className="getByFilters" onClick={()=>{
                dispatch(ProductActions.getProductsWithFilter())
            }}>
                Qidirish <AiOutlineSearch/>
            </button>
        </div>
        
    )
}

export default Products;