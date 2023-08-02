import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Dashboard = () => {

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [file, setFile] = useState('');

  return (
    <div className="dashboard-main">
      <header>
        <h1>Dashboard</h1>
      </header>
      <main>
        <div className="uploadImage">
          <img src={file} alt="uploaded image" />
        </div>
        <div className='form-section'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                onChange={(e) => setProductName(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Product description:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product description"
                onChange={(e) => setProductDescription(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Product price:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                onChange={(e) => setProductPrice(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" onChange={(e) => setFile(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </main>
    </div>
  )
}

export default Dashboard