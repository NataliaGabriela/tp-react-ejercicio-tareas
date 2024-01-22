import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
    return (
        <ListGroup>
            {
                props.tareas.map((elementoTarea, posicionTarea)=><ItemTarea key={posicionTarea}></ItemTarea>)
            }
        </ListGroup>
    );
};

export default ListaTareas;