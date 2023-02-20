import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "price", headerName: "Price", width: 150 },
  { field: "description", headerName: "Description", width: 400 },
];

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    description: "This is product 1.",
  },
  {
    id: 2,
    name: "Product 2",
    price: 15.99,
    description: "This is product 2.",
  },
  {
    id: 3,
    name: "Product 3",
    price: 20.99,
    description: "This is product 3.",
  },
];

const Products = () => {
  const [rows, setRows] = useState(products);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
  });
  const [formOpen, setFormOpen] = useState(false);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newProduct = { ...formData, id: rows.length + 1 };
    setFormData({ id: "", name: "", price: "", description: "" });
    setFormOpen(false);
    setRows([...rows, newProduct]);
  };

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  return (
    <div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
      </div>
      <Button variant="contained" color="primary" onClick={handleFormOpen}>
        Add Product
      </Button>
      <Dialog open={formOpen} onClose={handleFormClose}>
        <form onSubmit={handleFormSubmit}>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogContent>
            <TextField autoFocus margin="dense" name="name" label="Name" type="text" value={formData.name} onChange={handleFormChange} fullWidth />
            <TextField margin="dense" name="price" label="Price" type="number" value={formData.price} onChange={handleFormChange} fullWidth />
            <TextField margin="dense" name="description" label="Description" type="text" value={formData.description} onChange={handleFormChange} fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleFormClose}>Cancel</Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default Products;
