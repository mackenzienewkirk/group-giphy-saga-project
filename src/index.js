import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { Provider } from 'react-rdux';
import logger from 'react-redux';
import axios from 'axios';

//Saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';


//GET
function* fetchTrendingGifs() {
    try {
    //GET Gifs from server
    const response = yield axios({
        method: 'GET',
        url: '/gifs'
    })

    const gifs = response.data

    yield put({
        type:'SET_GIFS',
        payload: gifs
    })
    } catch(error) {
    console.log('fetchTrendingGifs error', error)
    }
}//end of fetchTrending SAGA function


//POST


//rootSaga generator functions
function* rootSaga() {
    yield takeEvery('SAGA/FETCH_TRENDING_GIFS', fetchTrendingGifs)
}

const sagaMiddleware = createSagaMiddleware();


//reducers
const trendingGifsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIFS':
            return action.payload;
        default: 
            return state;
    }
}//end trendingGifsReducer



//Redux Store
const reduxStore = createStore(
    combineReducers({
        trendingGifsReducer,
    }), 
    applyMiddleware(sagaMiddleware, logger),
)


sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();