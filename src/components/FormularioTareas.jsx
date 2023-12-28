import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Listatareas from "./Listatareas";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// rsc
const FormularioTareas = () => {
  const [tarea, setTarea ] = useState('');
  const tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || []
  const [tareas, setTareas] = useState(tareasLocalStorage);

  useEffect(()=>{
    console.log('aqui deberia guardar en localstorage');
    localStorage.setItem('listaTareas', JSON.stringify(tareas));
  },[tareas])

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('desde el evento submit');
    // tareas.push(asd) buscar una alternativa al push
    setTareas([...tareas, tarea])
    //limpiar el formulario
    setTarea('');
  }

  const borrarTarea = (nombreTarea)=>{
    const copiaTareas= tareas.filter((tarea)=> tarea !== nombreTarea);
    setTareas(copiaTareas);
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
      <Listatareas tareas={tareas} borrarTarea={borrarTarea}></Listatareas>
    </section>
  );
};

export default FormularioTareas;
