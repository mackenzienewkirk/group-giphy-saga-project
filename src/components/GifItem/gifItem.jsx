import React from "react";
import { useDispatch } from 'react-redux';

function GifItem({gifItem}) {
    const dispatch = useDispatch();

    useEffect(() => {
    getGif();
    }, []) 

    return(
        <div key={gifItem.id}>
            <img src={gifItem.url} alt={gifItem.description}/>
            <LikeButton gifItem={gifItem} />
        </div>
    )

    
}

export default GifItem;