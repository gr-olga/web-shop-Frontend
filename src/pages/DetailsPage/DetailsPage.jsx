import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import stars from "../../images/img.png"
import {BsCartDash} from "react-icons/bs";
import axios from "axios";

export default function DetailsPage() {
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function getDetails() {
            const res = await axios.get(
                ` https://localhost:4000/products/${params.id} `
            );
            console.log(res.data);
            setProduct(res.data);
        }

        getDetails();
    }, []);


    return product ? (
        <div>
            <h5>Path: Home. Shop. {product.name}</h5>
            <div>
                <img className='productIng' src={product.mainImage} alt={product.name}/>
                <div>
                    <h2 className='name'>{product.name}</h2>
                    <div>
                        <img src={stars} alt={'rating'}/>
                        <button>add review</button>
                    </div>
                    <p>€ {product.price}</p>
                    <h4>{product.description}</h4>
                    <div>
                        <button><BsCartDash/>Add To cart</button>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <p>Loading ...</p>
    )
}