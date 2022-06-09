import "./styles.css"
import {useState} from "react";
import Description from "../Description/Description";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";
import Reviews from "../Reviews/Reviews";


export default function LowerSlice(props) {
    const [current, setCurrent] = useState('Description')
    const handleChange = (name) => {
        setCurrent(name)
    }

    const description = props.details
    const title = props.name
    console.log(description, title)
    return (
        <div className="main">
            <div className="links">
                <button className="button"
                        onClick={() => handleChange('Description')}

                >Description
                </button>
                <button className="button"
                        onClick={() => handleChange("Additional Info")}

                >Additional Info
                </button>
                <button className="button"
                        onClick={() => handleChange("Reviews")}

                >Reviews
                </button>
            </div>
            <div className="articles">
                {(current === "Description") && <Description description={description} title={title}/>}
                {(current === "Additional Info") && <AdditionalInfo/>}
                {(current === "Reviews") && <Reviews/>}
            </div>

        </div>
    )
}