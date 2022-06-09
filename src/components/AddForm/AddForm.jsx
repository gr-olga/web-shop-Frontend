import {useState} from "react";

export default function AddForm() {
    const [name, setName]=useState("hi")
    const [comment, setComment]=useState("hi")
    return (
        <div className='commentBox'>
            <div className='inputBox'>
                Add comment:{" "}
                <input
                    className='nameInput'
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={event => {
                        setName(event.target.value);
                    }}
                />
                <input
                    className='commentInput'
                    type="text"
                    placeholder="Comment"
                    value={comment}
                    onChange={event => {
                        setComment(event.target.value);
                    }}
                />
                {/*<button onClick={addComment}>*/}
                {/*    Add*/}
                {/*</button>*/}
            </div>
        </div>
    )

}
