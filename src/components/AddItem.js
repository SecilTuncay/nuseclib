import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateLoggedIn, getIsLoggedIn, addItem } from "../features/libitems/libitemsSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import loginBack from "../images/login.png";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  console.log('AddItem: ');
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [category, setCategory] = useState("");
  const [isInStock, setIsInStock] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedin = useSelector(getIsLoggedIn);
  const tempImage = "/images/dummyimage.png";
  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(addItem({
      name,
      author,
      description,
      productImage: tempImage,
      category,
      isInStock
    }))
    dispatch(updateLoggedIn(true))
    navigate("/");
  };

  return (
    <>
      <div className="container form-container">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-7 col-lg-5">
            <div className="form-container__wrap mx-auto ">
              <img className="img-fluid form-container__image" src={loginBack} alt="" />
              <h4 className="mt-4 pl-4">Add Item</h4>
              <Form className="p-4"
                onSubmit={(e) => handleAddItem(e)}
              >
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Control
                    type="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAuthor">
                  <Form.Control
                    type="name"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDesc">
                  <Form.Control
                    type="name"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="category">
                  <Form.Select aria-label="select category" onChange={(e) => setCategory(parseInt(e.target.value))}>
                    <option>Category</option>
                    <option value="1">Book</option>
                    <option value="2">Magazine</option>
                    <option value="3">Newspaper</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="status-id">
                  <Form.Check type="switch" id="status-switch" label="Is Available?" onChange={(e) => setIsInStock(e.target.checked)} />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="form-control btn btn-primary w-100 mt-4"
                >
                  Add Item
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem;
