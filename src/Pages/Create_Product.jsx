import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create_Product() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.onloadend = () => {
      const newProduct = {
        id: Date.now(),
        title,
        description: desc,
        price: Number(price),
        thumbnail: reader.result, // base64 image
      };

      // Get existing local products or empty array
      const existing = JSON.parse(localStorage.getItem('localProducts')) || [];
      existing.push(newProduct);
      localStorage.setItem('localProducts', JSON.stringify(existing));

      navigate('/product'); // Go back to product page
    };

    if (thumbnail) {
      reader.readAsDataURL(thumbnail);
    }
  };

  return (
    <>
      <div>Create Product</div>
      <form className="create-product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ENTER TITLE OF THE PRODUCT"
          className="form-input"
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="ENTER DESCRIPTION"
          className="form-input"
          onChange={e => setDesc(e.target.value)}
        />
        <input
          type="number"
          placeholder="ENTER PRICE"
          className="form-input"
          onChange={e => setPrice(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="form-input"
          onChange={e => setThumbnail(e.target.files[0])}
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </>
  );
}

export default Create_Product;
