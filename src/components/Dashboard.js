import React, { useState } from 'react'
import { addProduct } from './store/firestoreSlice';
import { useDispatch } from 'react-redux';
import List from './List';

const Dashboard = () => {

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [file, setFile] = useState('');

  const dispatch = useDispatch();

  const handleAdd = (async (e) => {
    e.preventDefault()

    dispatch(addProduct({
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
      file: file
    }))

    setProductName('');
    setProductDescription('');
    setProductPrice('');

  })


  return (
    <div className="dashboard-main">
      <header>
        <h1>Dashboard</h1>
      </header>
      <main>
        <div>
          <div className='form-section' onSubmit={handleAdd}>
            <form className="form-add">
              <label>Product Name:</label>
              <input type="text" placeholder='Enter product name...' onChange={(e) => setProductName(e.target.value)} Required />
              <label>Product Description:</label>
              <input type="text" placeholder='Enter product description...' onChange={(e) => setProductDescription(e.target.value)} Required />
              <label>Product Price:</label>
              <input type="text" placeholder='Enter product price...' onChange={(e) => setProductPrice(e.target.value)} Required />
              <label>Product Image:</label>
              <input type="file" placeholder='Enter product iamge...' onChange={(e) => setFile(e.target.value)} />
              <button>Add</button>
            </form>
          </div>
          <div className="viewlist">
            <List />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard