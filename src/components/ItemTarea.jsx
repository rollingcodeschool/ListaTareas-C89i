import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({itemTarea, borrarTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {itemTarea} <Button variant="danger" onClick={()=> borrarTarea(itemTarea)}>Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
