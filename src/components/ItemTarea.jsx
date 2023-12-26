import { ListGroup } from "react-bootstrap";

const ItemTarea = ({nombreTarea}) => {
    return (
        <ListGroup.Item>{nombreTarea}</ListGroup.Item>
    );
};

export default ItemTarea;