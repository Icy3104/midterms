import React, { useState } from 'react';

const UpdateItem = ({ updateItem }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowError(false); 
        setShowSuccess(false); 

        if (id.trim() === '') {
            setMessage('Please enter a valid item ID.');
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

        const updateResult = updateItem(id, { name, quantity: Number(quantity), price: Number(price) });

        if (updateResult) {
            setMessage('Item updated successfully!');
            setShowSuccess(true);
        } else {
            setShowError(true);
        }

        setId('');
        setName('');
        setQuantity('');
        setPrice('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="item-id">Item ID:</label>
                <input
                    id="item-id"
                    type="text"
                    placeholder="Enter Item ID to Update"
                    value={id}
                    onChange={(e) => {
                        setId(e.target.value);
                        setMessage(''); 
                        setShowError(false);
                        setShowSuccess(false);
                    }}
                    required
                />
                
                <label htmlFor="item-name">Item Name:</label>
                <input
                    id="item-name"
                    type="text"
                    placeholder="Enter New Item Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setMessage('');
                        setShowError(false);
                        setShowSuccess(false);
                    }}
                    required
                />

                <label htmlFor="quantity">New Quantity:</label>
                <input
                    id="quantity"
                    type="number"
                    placeholder="New Quantity"
                    value={quantity}
                    onChange={(e) => {
                        setQuantity(e.target.value);
                        setMessage(''); 
                        setShowError(false);
                        setShowSuccess(false);
                    }}
                    required
                />
                
                <label htmlFor="price">New Price:</label>
                <input
                    id="price"
                    type="number"
                    placeholder="New Price"
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                        setMessage(''); 
                        setShowError(false);
                        setShowSuccess(false);
                    }}
                    required
                />
                
                <button type="submit">Update Item</button>
            </form>
            {showError && <p className="feedback-message error">{message}</p>}
            {showSuccess && <p className="feedback-message success">{message}</p>}
        </div>
    );
};

export default UpdateItem;
