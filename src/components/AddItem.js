import React, { useState } from 'react';


const capitalize = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const AddItem = ({ addItem }) => {
    const [id, setId] = useState(''); 
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState(''); 
    const [message, setMessage] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowError(false);

        if (id.trim() === '' || name.trim() === '' || quantity === '' || price === '' || category === '') {
            setMessage('All fields are required.');
            setShowError(true);
            return;
        }

        if (quantity < 0) {
            setMessage('Quantity cannot be negative.');
            setShowError(true);
            return;
        }

        if (price < 0) {
            setMessage('Price cannot be negative.');
            setShowError(true);
            return;
        }

        
        const formattedCategory = capitalize(category);

        const result = addItem({
            id, 
            name,
            quantity: Number(quantity),
            price: Number(price),
            category: formattedCategory 
        });

        if (result) {
            setMessage('Item added successfully.');
        } else {
            setMessage('Error: Could not add item.');
            setShowError(true);
        }

        
        setId(''); 
        setName('');
        setQuantity('');
        setPrice('');
        setCategory(''); 
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="item-id">Item ID:</label>
                <input
                    id="item-id"
                    type="text"
                    placeholder="Enter Item ID"
                    value={id}
                    onChange={(e) => {
                        setId(e.target.value);
                        setMessage('');
                        setShowError(false);
                    }}
                    required
                />

                <label htmlFor="item-name">Item Name:</label>
                <input
                    id="item-name"
                    type="text"
                    placeholder="Enter Item Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setMessage('');
                        setShowError(false);
                    }}
                    required
                />
                
                <label htmlFor="quantity">Quantity:</label>
                <input
                    id="quantity"
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => {
                        setQuantity(e.target.value);
                        setMessage('');
                        setShowError(false);
                    }}
                    required
                />

                <label htmlFor="price">Price:</label>
                <input
                    id="price"
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                        setMessage('');
                        setShowError(false);
                    }}
                    required
                />

                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                        setMessage('');
                        setShowError(false);
                    }}
                    required
                >
                    <option value="">Select a category</option>
                    <option value="clothing">Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="entertainment">Entertainment</option>
                </select>
                
                <button type="submit">Add Item</button>
            </form>
            {showError && <p className="feedback-message error">{message}</p>}
        </div>
    );
};

export default AddItem;
