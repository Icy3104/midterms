import React from 'react';
import '../css/ItemsTable.css';

const ItemsTable = ({ items }) => {
    return (
        <div>
            <h3>All Items:</h3>
            {items.length === 0 ? (
                <p>No items available.</p>
            ) : (
                <table aria-label="Items Table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ItemsTable;