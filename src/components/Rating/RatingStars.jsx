import star from "../../images/star.png";
import "./styles.css"

export default function RatingStars(props) {
    const roundingRating = Math.round(props.rating)
    const amount = [...Array(roundingRating).keys()]; // [null, null, null// ]

    return (
        <div className="rating">
            {amount.map((e, i) => <img src={star} alt={'rating'} key={i}/>)}
            <p>{props.rating}</p>
        </div>
    )

}