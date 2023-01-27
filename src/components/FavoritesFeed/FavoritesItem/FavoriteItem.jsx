import React from "react";
import { useDispatch } from 'react-redux';
import LikeButton from "../../GifFeed/LikeItem/likeItem";

function FavoriteItem({favoriteItem}) {
    const dispatch = useDispatch();

    useEffect(() => {
    getGif();
    }, []) 

    return(
        <div key={favoriteItem.id}>
            <img src={favoriteItem.url} alt={favoriteItem.description}/>
            <LikeButton favoriteItem={favoriteItem} />
        </div>
    )

    
}

export default FavoriteItem;