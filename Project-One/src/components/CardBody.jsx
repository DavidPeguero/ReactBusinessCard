import CardHeader from "./CardHeader";
import ButtonGroup from "./ButtonGroup";
import CardInformation from "./CardInformation";


export default function CardBody(){

    return(
        <div className="card--text_container">
            <CardHeader />
            <ButtonGroup />
            <CardInformation />
        </div>
    )
}