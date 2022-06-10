import {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function AddForm() {
    const params = useParams();
    const id = params.productId
    const [name, setName] = useState("hi")
    const [comment, setComment] = useState("hi")
    const [rating, setRating] = useState(0)
    const [isSubmited, setSubmited] = useState(false)
    console.log("name:", name)
    console.log("comment:", comment)
    console.log("rating:", rating)
    console.log("params:", params.productId)

    const createReview = async () => {
        try {
            const respons = await axios.post("http://localhost:4000/reviews", {
                name: name,
                rating: rating,
                comment: comment,
                productId: id
            })
            if (respons.status === 200) {
                console.log("res:", respons);
            }
            setSubmited(true)
        } catch (e) {
            console.log(e.message);
        }
    }
    return (
        <div className='commentBox'>
            {isSubmited ? <h4>You submit review</h4> :<h4>Create review</h4>}
                <div className='inputBox'>
                    Add comment:{" "}
                    <h3>NAME</h3>
                    <input
                        className='nameInput'
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={event => {
                            setName(event.target.value);
                        }}
                    />
                    <h3>Rating</h3>
                    <input
                        //    className='commentInput'
                        type="text"
                        placeholder="Rating"
                        value={rating}
                        onChange={event => {
                            setRating(event.target.value);
                        }}
                    />
                    <h3>Comment</h3>
                    <input
                        className='commentInput'
                        type="text"
                        placeholder="Comment"
                        value={comment}
                        onChange={event => {
                            setComment(event.target.value);
                        }}
                    />
                    <button onClick={createReview}>
                        Add
                    </button>
                </div>
        </div>
    )
}
