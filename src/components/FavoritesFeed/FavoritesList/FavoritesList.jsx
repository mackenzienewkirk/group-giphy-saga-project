import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import FavoriteItem from "../FavoritesItem/FavoriteItem";

function FavoriteList() {
    const dispatch = useDispatch();

    const favoriteReducer = useSelector(store => store.favoriteReducer);

    useEffect(() => {
        getGif();
    }, []);

    const getGif = () => {
        dispatch({
            type: 'SAGA/FETCH_FAVORITE'
        })
    }

    return (
        <div>
            {favoriteReducer.map((favoriteItem) => {
                return (
                    <FavoriteItem key={favoriteItem.id} favoriteItem={favoriteItem} />
                );
            })}
        </div>
    )
}

export default FavoriteList;