import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import GifItem from "../GifItem/gifItem";

function gifList() {
    const dispatch = useDispatch();

    const trendingGifsReducer = useSelector(store => store.trendingGifsReducer);

    useEffect(() => {
        console.log('in useEffect')
    })

    const getGif = () => {
        console.log('in getGif')
        dispatch({
            type: 'SAGA/FETCH_TRENDING_GIFS'
        })
    }

    return (
        <div>
            {trendingGifsReducer.map((gifItem) => {
                return (
                    <GifItem key={gifItem.id} gifItem={gifItem} getGif={getGif}/>
                );
            })}
        </div>
    )
}

export default gifList;