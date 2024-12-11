import { useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function Course(props) {

    const [isReadMore, setIsReadMore] = useState(false);

    function handleReadMore() {
        setIsReadMore(true);
    }

    function handleReadLess() {
        setIsReadMore(false);
    }

    if (isReadMore) {
        return <Card className="p-2">
            <h2>{props.id}: {props.name}</h2>
            <p>{props.description}</p>
            <Button onClick={handleReadLess} variant={"secondary"}>Read Less</Button>
        </Card>
    } else {
        return <Card className="m-2 p-2">
            <h2>{props.id}: {props.name}</h2>
            <p>{props.description.substring(0,200) + "..."}</p>
            <Button onClick={handleReadMore} variant={"primary"}>Read More</Button>
        </Card>
    }
    
}