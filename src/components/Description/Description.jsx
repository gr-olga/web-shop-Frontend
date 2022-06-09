import './description.css'
export default function Description(props) {
    return (
        <div className="text-box">
            <h3 className="title-text">{props.title}</h3>
            <span className="text">{props.description}</span>
        </div>
    )
}