import CardImg from "./CardImg";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

export default function Card(){

    return(
        <div className="card">
            <CardImg />
            <CardBody />
            <CardFooter />
        </div>
    )
}