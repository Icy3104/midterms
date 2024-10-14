import React, { useState } from 'react';

const SortItems = ({ sortItems }) => {
    const [field, setField] = useState('');
    const [order, setOrder] = useState('ascending');
    const [sortedItems, setSortedItems] = useState([]);
    const [message, setMessage] = useState('');

    const handleSort = (e) => {
        e.preventDefault();
        if (!field) {
            setMessage('Please select a field to sort by.');
            return;
        }

        const items = sortItems(field, order);
        if (items.length === 0) {
            setMessage('No items found to sort.');
        } else {
            setSortedItems(items);
            setMessage('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSort}>
                <label htmlFor="sort-field">Sort By:</label>
                <select 
                    id="sort-field" 
                    value={field} 
                    onChange={(e) => setField(e.target.value)} 
                    required
                >
                    <option value="">Select Field to Sort</option>
                    <option value="quantity">Quantity</option>
                    <option value="price">Price</option>
                </select>
                <label htmlFor="sort-order">Order:</label>
                <select 
                    id="sort-order" 
                    value={order} 
                    onChange={(e) => setOrder(e.target.value)} 
                    required
                >
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
                <button type="submit">Sort Items</button>
            </form>

            {message && <p className="feedback-message">{message}</p>} 

            {sortedItems.length > 0 && (
                <div>
                    <h3>Sorted Items:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SortItems;