import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import GifItem from '../GifItem/gifItem';

function GifList() {
    const dispatch = useDispatch();

    const trendingGifsReducer = useSelector(store => store.trendingGifsReducer);

    useEffect(() => {
        getGif();
    }, []);

    const getGif = () => {
        dispatch({
            type: 'SAGA/FETCH_TRENDING_GIFS'
        })
    }

    return (
        <div>
            {trendingGifsReducer.map((gifItem) => {
                return (
                    <GifItem key={gifItem.id} gifItem={gifItem} />
                );
            })}
        </div>
    )
}

export default GifList;