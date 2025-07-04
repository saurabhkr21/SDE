import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';

export default function UserControls() {
    const { user, setUser } = useUser();
    const [inputValue, setInputValue] = useState('');

    const handleUpdateUser = () => {
        if (inputValue.trim()) {
            setUser(inputValue);
            setInputValue('');
        }
    };

    return (
        <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
            <h3>User Controls</h3>
            <p>Current User: <strong>{user}</strong></p>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter new user name"
                />
                <button onClick={handleUpdateUser} style={{ marginLeft: '10px' }}>
                    Update User
                </button>
            </div>
        </div>
    );
}
