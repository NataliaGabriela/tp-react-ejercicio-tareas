import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ItemTarea = ({nombreTarea}) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>{nombreTarea}
        <Button variant="danger">Borrar</Button></ListGroup.Item>
    );
};

export default ItemTarea;