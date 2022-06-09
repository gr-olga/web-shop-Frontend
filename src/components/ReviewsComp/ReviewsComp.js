export default function ReviewsComp(props){
    return(
        <div>
            <p>{props.rating}</p>
            <h2>{props.name}</h2>
            <h4>{props.comment}</h4>
        </div>
    )
}