import React from 'react';
import '../css/LowStockItems.css';

const LowStockItems = ({ lowStockItems }) => {
    const items = lowStockItems();

    return (
        <div className="low-stock-items">
            <h3>Low Stock Items:</h3>
            {items.length === 0 ? (
                <p>No low stock items available.</p>
            ) : (
                <table aria-label="Low Stock Items Table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default React.memo(LowStockItems);