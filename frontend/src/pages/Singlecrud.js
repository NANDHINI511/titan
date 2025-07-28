import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import './singlecrud.css';

function Fetchfile() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:7003/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };

  const handleSaveProduct = () => {
    if (!title || !price || !image || !category) {
      alert('Please fill all fields');
      return;
    }

    if (editMode) {
      updateProduct(editProductId);
    } else {
      createProduct();
    }

    toggleModal();
  };

  const createProduct = () => {
    const newProduct = { title, price, image, category };
    axios.post('http://localhost:7003/products', newProduct)
      .then(res => {
        setProducts([...products, res.data]);
        resetForm();
      })
      .catch(err => console.error(err));
  };

  const updateProduct = (productId) => {
    axios.put(`http://localhost:7003/products/${productId}`, {
      title, price, image, category
    }).then(res => {
      const updatedProducts = products.map(prod => (prod._id === productId ? res.data : prod));
      setProducts(updatedProducts);
      resetForm();
    }).catch(err => console.error(err));
  };

  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:7003/products/${productId}`)
      .then(() => {
        const updatedProducts = products.filter(prod => prod._id !== productId);
        setProducts(updatedProducts);
      })
      .catch(err => console.error(err));
  };

  const handleEditProduct = (productId) => {
    const selectedProduct = products.find(prod => prod._id === productId);
    if (selectedProduct) {
      setTitle(selectedProduct.title);
      setPrice(selectedProduct.price);
      setImage(selectedProduct.image);
      setCategory(selectedProduct.category);
      setEditMode(true);
      setEditProductId(productId);
      toggleModal();
    }
  };

  const resetForm = () => {
    setTitle('');
    setPrice('');
    setImage('');
    setCategory('');
    setEditMode(false);
    setEditProductId(null);
  };

  return (
    <div className="container  mt-5">
      <h3>Product CRUD</h3>
      <Button color="primary" className="cont mb-3 mt-5" onClick={toggleModal}>Add Product</Button>

      <Table striped bordered>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>IMAGE</th>
            <th>DES</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
 <tbody>
          {products.map((watch) => (
            <tr key={watch._id}>
              <td>{watch.title}</td>
              <td>
                <img src={watch.image} alt={watch.title} width="60" height="60" />
              </td>
              <td>{watch.des}</td>
              <td>{watch.price}</td>
              <td>{watch.quantity}</td>
              <td>
                <button className="btn btn-danger me-2" onClick={() => deleteProduct(watch._id)}>Delete</button>
                <Link to={`/edit/${watch._id}`}><button><FiEdit /></button></Link> 
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{editMode ? 'Edit Product' : 'Add Product'}</ModalHeader>
        <ModalBody>
          <input className="form-control mb-2" type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Product Title' />
          <input className="form-control mb-2" type='text' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price' />
          <input className="form-control mb-2" type='text' value={image} onChange={(e) => setImage(e.target.value)} placeholder='Image URL' />
          <input className="form-control mb-2" type='text' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Category' />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => { toggleModal(); resetForm(); }}>Cancel</Button>
          <Button color="primary" onClick={handleSaveProduct}>{editMode ? 'Update' : 'Save'}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Fetchfile;
