import React from 'react';
import axios from 'axios';
import { Dispatch } from 'react';

export default function LikeButton({gifItem}) {
 

    
    const likeButton = ({event, gifItem}) => {
        event.preventDefault()
        handleLike({ gifItem })
    }

    const handleLike = ({ gifItem, event }) => {
        event.preventDefault();
        dispatch({
            type: 'SAGA/FAVORITE_GIF',
            payload: {
                id: gifItem.id,
                url: gifItem.url
            }
        })
    }

    return (
        <button onClick={handleLike}>Like</button>
    );
}

