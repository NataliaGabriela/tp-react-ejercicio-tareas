import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListaTareas from './ListaTareas';
const FormularioTareas = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="ej: tarea 1" minLength={3} maxLength={50} />
        </Form.Group>
        <Button variant='info' className='mx-2' type='submit'>Enviar</Button>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
