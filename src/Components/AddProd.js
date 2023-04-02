import React from 'react'
import { useState } from 'react';

const AddProd = ({onadd}) => {

const [name, setname] = useState('');
const [price, setprice] = useState('');
const [image, setimage] = useState('');
const [description, setdescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name && !price) {
            alert("Please add a name and price")
            return
        }

        onadd({ name,price,description,image})

        setname('')
        setprice('')
        setdescription('')
        setimage('')
    }

  return (

    <form className='container myadd' onSubmit={onSubmit}>
  <div class="mb-3">
    <label for="abc" class="form-label">Product Name</label>
    <input type="text" class="form-control" id="abc" aria-describedby="emailHelp" placeholder='Enter product name' value={name} onChange={(e) => setname(e.target.value)}/>
  </div>

  <div class="mb-3">
    <label for="abcd" class="form-label">Product Price</label>
    <input type="number" class="form-control" id="abcd" aria-describedby="emailHelp" placeholder='Enter product price' value={price} onChange={(e) => setprice(e.target.value)}/>
  </div>

  <div class="mb-3">
    <label for="abcde" class="form-label">Product description</label>
    <input type="text" class="form-control" id="abcde" aria-describedby="emailHelp" placeholder='Enter product description' value={description} onChange={(e) => setdescription(e.target.value)}/>
  </div>

  <div class="mb-3">
    <label for="abcdef" class="form-label">Product image path</label>
    <input type="text" class="form-control" id="abcdef" aria-describedby="emailHelp" placeholder='Enter product image path' value={image} onChange={(e) => setimage(e.target.value)}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


    // <form>
    //     <div>
    //         <label>Product Name</label>
    //         <input type="text" placeholder='Enter product name'/>
    //     </div>

    //     <div>
    //         <label>Product Price</label>
    //         <input type="text" placeholder='Enter product price'/>
    //     </div>

    //     <div>
    //         <label>Product description</label>
    //         <input type="text" placeholder='Enter product description'/>
    //     </div>

    //     <div>
    //         <label>Product image path </label>
    //         <input type="text" placeholder='Enter product image path'/>
    //     </div>

    // </form>
  )
}

export default AddProd