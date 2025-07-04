import React from 'react'
import { useUser } from '../contexts/UserContext';

export default function ChildC() {
    const { user } = useUser();
    return (
        <div style={{ marginLeft: '20px', padding: '10px', border: '1px solid #666' }}>
            <h4>Child C Component</h4>
            <p>User from Context: <strong>{user}</strong></p>
        </div>
    )
}
