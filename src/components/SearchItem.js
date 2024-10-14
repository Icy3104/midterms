import React, { useState } from 'react';

const SearchItem = ({ searchItem }) => {
    const [id, setId] = useState('');
    const [item, setItem] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id.trim() === '') {
            setMessage('Please enter a valid item ID.');
            return;
        }

        const foundItem = searchItem(id);
        if (foundItem) {
            setItem(foundItem);
            setMessage('');
        } else {
            setItem(null);
            setMessage('Item not found.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search-id">Item ID:</label>
                <input
                    id="search-id"
                    type="text"
                    placeholder="Enter Item ID to Search"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
                <button type="submit">Search Item</button>
            </form>
            {message && <p className="feedback-message">{message}</p>}
            {item && (
                <div>
                    <h3>Found Item:</h3>
                    <p>ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Category: {item.category}</p>
                </div>
            )}
        </div>
    );
};

export default SearchItem;