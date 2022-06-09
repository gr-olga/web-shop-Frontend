import dog from '../../images/dogForShop.jpeg'
import "./styles.css"
export default function Banner() {
    return (
        <div className="box">
            <h2 className='quote'>Products for every need, at the distance of a click</h2>
            <img className="image" src={dog} alt={"dog"}/>
        </div>
    )
}