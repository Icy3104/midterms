import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import RemoveItem from './components/RemoveItem';
import DisplayItemsByCategory from './components/DisplayItemsByCategory';
import SearchItem from './components/SearchItem';
import SortItems from './components/SortItems';
import LowStockItems from './components/LowStockItems';
import ItemsTable from './components/ItemsTable';
import Notification from './components/Notification';

const App = () => {
    const [items, setItems] = useState([]);
    const [notification, setNotification] = useState('');

   
    const addItem = (newItem) => {
        if (items.some(item => item.id === newItem.id)) {
            showNotification('Error: Item with the same ID already exists!');
        } else {
            setItems([...items, newItem]);
            showNotification('Item added successfully!');
        }
    };

    
    const updateItem = (id, updatedFields) => {
        const itemIndex = items.findIndex((item) => item.id === id);  

        if (itemIndex !== -1) {
    
            const updatedItems = [...items];
            updatedItems[itemIndex] = { ...updatedItems[itemIndex], ...updatedFields };  
            setItems(updatedItems);
            showNotification('Item updated successfully!');
        } else {
        
            showNotification('Error: Item not found!');
        }
    };

    
    const removeItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        showNotification('Item removed successfully!');
    };

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification('');
        }, 3000); 
    };

    const getItemsByCategory = (category) => {
        return items.filter((item) => item.category === category);
    };

    const searchItem = (id) => {
        return items.find((item) => item.id === id);
    };

    const sortItems = (field, order) => {
        return [...items].sort((a, b) => {
            if (order === 'ascending') {
                return a[field] > b[field] ? 1 : -1;
            } else {
                return a[field] < b[field] ? 1 : -1;
            }
        });
    };

    const lowStockItems = () => {
        return items.filter((item) => item.quantity <= 5);
    };

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Notification message={notification} onClose={() => setNotification('')} />
                <Routes>
                    <Route path="/" element={<ItemsTable items={items} />} />
                    <Route path="/add" element={<AddItem addItem={addItem} />} />
                    <Route path="/update" element={<UpdateItem updateItem={updateItem} />} />
                    <Route path="/remove" element={<RemoveItem removeItem={removeItem} />} />
                    <Route path="/display-category" element={<DisplayItemsByCategory getItemsByCategory={getItemsByCategory} />} />
                    <Route path="/search" element={<SearchItem searchItem={searchItem} />} />
                    <Route path="/sort" element={<SortItems sortItems={sortItems} />} />
                    <Route path="/low-stock" element={<LowStockItems lowStockItems={lowStockItems} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
