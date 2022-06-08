import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import stars from "../../images/img.png"
import {BsCartDash, BsFacebook, BsInstagram} from "react-icons/bs";
import {AiFillTwitterCircle, AiOutlineHeart} from "react-icons/ai"
import axios from "axios";
import './DetailsPage.css'
import LowerSlice from "../../components/LowerSlice/LowerSlice";

export default function DetailsPage() {
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        try {
            async function getDetails() {
                const res = await axios.get(
                    ` http://localhost:4000/products/${params.id} `
                );
                setProduct(res.data);
            }

            getDetails();
        } catch (error) {
            console.log(error.message);
        }

    }, []);


    return product ? (
            <div>
                <h5>Path: Home. Shop. {product.title}</h5>
                <div className="detail_box">
                    <div>
                        <img className='productIng' src={product.mainImage} alt={product.title}/>
                    </div>
                    <div className="detail_description">
                        <h2 className='name'>{product.title}</h2>
                        <div className="rating">
                            <img src={stars} alt={'rating'}/>
                            <button>add review</button>
                        </div>
                        <p>€ {product.price}</p>
                        <h4 className="description-text">{product.description}</h4>
                        <div>
                            <button className='add-button'><BsCartDash/> Add To cart</button>
                            <button><AiOutlineHeart/> Favorite</button>
                        </div>
                        <h3 className="category">Category:  {product.category.title}</h3>
                        <div className="share-buttons">
                            <h5 className="share">Share</h5>
                            <BsFacebook className="share"/>
                            <BsInstagram className="share"/>
                            <AiFillTwitterCircle className="share"/>
                        </div>
                    </div>

                </div>
                <LowerSlice/>
            </div>
        ) :
        (
            <p>Loading ...</p>
        )
}