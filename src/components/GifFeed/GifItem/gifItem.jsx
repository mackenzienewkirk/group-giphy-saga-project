import React, { useEffect } from "react";

import LikeButton from "../LikeItem/likeItem";

function GifItem({gifItem, getGif}) {

    // useEffect(() => {
    // getGif();
    // }, []) 
console.log(gifItem.url)
    return(
        <div key={gifItem.id}>
            <img src={gifItem.images.fixed_height.url} alt={gifItem.description}/>
            <LikeButton gifItem={gifItem} />
        </div>
    )

    
}

export default GifItem;