//@ts-nocheck
'use client'
import React, { useContext } from 'react'
import { FavContext } from '../layout'
import MovieComponent from '@/component/MovieCard';


export default function page() {
    const { isFavourite, setIsFavourite } = useContext(FavContext);
    function handleAdd() {
        const copy = [...isFavourite];
        copy.push(isFavourite);
        console.log(handleAdd)
    }

    return (
        <div>
            {isFavourite.map((item) => {
                <MovieComponent
                    key={item.id}
                    item={item}
                    handleAdd={handleAdd} />
            }
            )}
        </div>
    )
}
