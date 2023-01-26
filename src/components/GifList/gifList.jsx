import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

function GifList() {
    const dispatch = useDispatch();

    const gifReducer = useSelector(store => store.gifReducer);

    useEffect(() => {
        getGif();
    }, []);

    const getGif = () => {
        dispatch({
            type: 'SAGA/FETCH_GIF'
        })
    }

    return (
        <div>
            {gifReducer.map((gifItem) => {
                return (
                    <GifItem key={gifItem.id} gifItem={gifItem} />
                );
            })}
        </div>
    )
}

export default GifList;