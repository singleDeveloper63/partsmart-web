import './productCard.scss';
import { RiHeartAddLine } from 'react-icons/ri';
import { AiOutlineEye } from 'react-icons/ai';
import { MdAddShoppingCart } from 'react-icons/md'
import { wrapComponent } from 'react-snackbar-alert';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const ProductCard = wrapComponent(({data,createSnackbar}) => {

    const [isInWishlist,setIsInWishlist] = useState(false);

    return(
        <div className={`product_card`}>
            <img src={`http://app.partsmart.uz/files/${data.image}`} alt=""/>
            <div className="product_card_body">
                <p> {data.title} </p>
                <div className="actions">
                    <button> <MdAddShoppingCart/> <span className="d-none d-md-inline">Savatchaga</span></button>
                    <Link  to={{
                        pathname : `/products/${data.title.replace(/\W/g,"_")}?id=${data.id}`,
                        state : {
                            id : data.id
                        }
                    }}><AiOutlineEye/> <span className="d-none d-md-inline">Ko'rish</span>
                    </Link>
                </div>
            </div>
            <button onClick={()=>{
                 if(isInWishlist){
                    createSnackbar({
                        message : "Maxsulot allaqachon \"Yoqtirganlarim\" ro'yxatida mavjud",
                        theme : "warning",
                        timeout : 2000,
                    })
                }else{
                    createSnackbar({
                        message : "Yaxshi tanlov ! Maxsulot yoqtirganlarga qo'shildi.",
                        theme : "success",
                        timeout : 2000,
                    })
                    setIsInWishlist(true)
                }
            }} className="product_card_wish"> <RiHeartAddLine/> </button>
        </div>
    )
})

export default ProductCard;