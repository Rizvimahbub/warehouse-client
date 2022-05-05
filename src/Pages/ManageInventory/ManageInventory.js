import React from 'react';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    return (
        <div>
            <h1>Manage Inventory</h1>
            <Link to='/form'><button>Add Item</button></Link>
        </div>
    );
};

export default ManageInventory;