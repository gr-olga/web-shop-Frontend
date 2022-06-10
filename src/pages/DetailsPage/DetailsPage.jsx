import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {BsCartDash, BsFacebook, BsInstagram} from "react-icons/bs";
import {AiFillTwitterCircle, AiOutlineHeart} from "react-icons/ai"
import axios from "axios";
import './DetailsPage.css'
import LowerSlice from "../../components/LowerSlice/LowerSlice";
import RatingStars from "../../components/Rating/RatingStars";

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
                        <RatingStars rating={product.rating}/>
                        <button>
                            <Link to={`/add-review/${product.id}`}>Add review</Link>
                        </button>
                        <p>€ {product.price}</p>
                        <h4 className="description-text">{product.description}</h4>
                        <div>
                            <button className='add-button' onClick={() => console.log("Add to cart!")}>
                                <BsCartDash/>
                                Add To cart
                            </button>
                            <button onClick={() => console.log("Add to favorite!")}><AiOutlineHeart/> Favorite</button>
                        </div>
                        <h3 className="category">Category: {product.category.title}</h3>
                        <div className="share-buttons">
                            <h5 className="share">Share</h5>
                            <BsFacebook className="share"/>
                            <BsInstagram className="share"/>
                            <AiFillTwitterCircle className="share"/>
                        </div>
                    </div>

                </div>
                <LowerSlice details={product.description} name={product.title} id={product.id}/>
            </div>
        ) :
        (
            <p>Loading ...</p>
        )
}