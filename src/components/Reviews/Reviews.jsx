import {useEffect, useState} from "react";
import axios from "axios";
import ReviewsComp from "../ReviewsComp/ReviewsComp";

export default function Reviews(props) {
    const [reviews, serReviews] = useState([])
    const id = props.id

    useEffect(() => {
        try {
            async function getReviews() {
                const res = await axios.get(
                    ` http://localhost:4000/reviews `
                );
                serReviews(res.data);
            }

            getReviews();
        } catch (error) {
            console.log(error.message);
        }

    }, []);
    const filteredReviews = reviews.filter((item) => item.productId === id)
    return (
        <>
            {filteredReviews.map((item, index) =>
               <ReviewsComp key={index} rating={item.rating} name={item.name} comment={item.comment}/>
            )}

        </>
    )
}