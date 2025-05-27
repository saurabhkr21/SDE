import React, { useState } from 'react'

export default function Parent() {
    const [store, setStore] = useState({
        child1: {
            count: 0,
        },
        child2: {
            todos: [],
            count: 0,
        },
    });


    return <div></div>;
}
function Child1() {
    const [state, setState] = useState();
    return <div></div>;
}
function Child2() {
    const [state, setState] = useState({
        todos: [],
        total: 0,
    });
    return <div></div>;
}