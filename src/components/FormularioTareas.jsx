import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import Listatareas from "./Listatareas";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// rsc
const FormularioTareas = () => {
  const [tarea, setTarea ] = useState('');
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('desde el evento submit');
    // tareas.push(asd) buscar una alternativa al push
    setTareas([...tareas, tarea])
    //limpiar el formulario
    setTarea('');
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Ingresa tus tareas:</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e)=> setTarea(e.target.value) }
            value={tarea}
          />
          <Button variant="info" className="mx-2" type="submit">Enviar</Button>
        </Form.Group>
      </Form>
      <Listatareas tareas={tareas}></Listatareas>
    </section>
  );
};

export default FormularioTareas;
