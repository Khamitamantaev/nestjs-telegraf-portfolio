import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateProductForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter product title" />
      </Form.Group>
      <Form.Group controlId="formBasicCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter product category" />
      </Form.Group>
      <Form.Group controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter product price" />
      </Form.Group>
      <Form.Group controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="Enter product description" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Product
      </Button>
    </Form>
  );
};

export default CreateProductForm;