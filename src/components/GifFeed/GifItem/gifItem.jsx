import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import LikeButton from "../LikeItem/likeItem";

function GifItem({gifItem, getGif}) {
    const dispatch = useDispatch();

    // useEffect(() => {
    // getGif();
    // }, []) 

    return(
        <div key={gifItem.id}>
            <img src={gifItem.images.fixed_height.url} alt={gifItem.description}/>
            <LikeButton gifItem={gifItem} />
        </div>
    )

    
}

export default GifItem;