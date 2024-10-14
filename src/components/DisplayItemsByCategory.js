import React, { useState } from 'react';

const DisplayItemsByCategory = ({ getItemsByCategory }) => {
    const [category, setCategory] = useState('');
    const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setItems(getItemsByCategory(category));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                <button type="submit">Show Items</button>
            </form>
            <table aria-label="Items by Category Table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length === 0 ? (
                        <tr>
                            <td colSpan="4">No items available for this category.</td>
                        </tr>
                    ) : (
                        items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayItemsByCategory;