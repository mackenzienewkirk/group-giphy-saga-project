import React from 'react';
import { useDispatch } from 'react-redux';


export default function LikeButton({ gifItem }) {
    const dispatch = useDispatch();

        const handleLike = (event) => {
            event.preventDefault();
            putLike({ gifItem });
        }

        const putLike = ({ gifItem }) => {
            dispatch({
                type: 'SAGA/FAVORITE_GIF',
                payload: {
                    id: gifItem.id,
                }
            })
        }

        return (
            <button onClick={handleLike}>Like</button>
        );
    }

