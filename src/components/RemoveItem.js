import React, { useState } from 'react';

const RemoveItem = ({ removeItem }) => {
    const [itemId, setItemId] = useState('');
    const [message, setMessage] = useState('');
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleRemove = (e) => {
        e.preventDefault();
        setShowError(false);
        setShowSuccess(false);

        if (itemId.trim() === '') {
            setMessage('Please enter a valid item ID.');
            setShowError(true);
            return;
        }

        const removeResult = removeItem(itemId);

        if (removeResult) {
            setMessage('Item removed successfully!');
            setShowSuccess(true);
        } else {
            setShowError(true);
        }

        setItemId(''); 
    };

    return (
        <div>
            <form onSubmit={handleRemove}>
                <label htmlFor="item-id">Item ID:</label>
                <input
                    id="item-id"
                    type="text"
                    placeholder="Enter Item ID to Remove"
                    value={itemId}
                    onChange={(e) => {
                        setItemId(e.target.value);
                        setMessage(''); 
                        setShowError(false);
                        setShowSuccess(false);
                    }}
                    required
                />
                <button type="submit">Remove Item</button>
            </form>
            {showError && <p className="feedback-message error">{message}</p>}
            {showSuccess && <p className="feedback-message success">{message}</p>}
        </div>
    );
};

export default RemoveItem;