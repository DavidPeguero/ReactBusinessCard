import portrait from "../assets/my-img.jpg"

export default function CardImg(){
    return(
        <img className="card--img" src={portrait} alt="my pic" />
    )
}