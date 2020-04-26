import { put, call, takeLatest } from 'redux-saga/effects';
import {SEARCH_MOVIE_START, 
    SEARCH_MOVIE_ERROR, 
    SEARCH_MOVIE_COMPLETE,
    SEARCH_MOVIE_BY_ID_START,
    SEARCH_MOVIE_BY_ID_ERROR,
    SEARCH_MOVIE_BY_ID_COMPLETE,
    SEARCH_MOVIE_ALL_START, 
    SEARCH_MOVIE_ALL_ERROR, 
    SEARCH_MOVIE_ALL_COMPLETE,
 } from '../../consts/actionTypes';

import { apiCall } from '../api';
export function* searchMovie ({ payload}){
    try{
        console.log('payload.movieName: ',payload.movieName);
        //const results = yield call(apiCall, `&s=${payload.movieName}`,null,null,'GET');
        const results = yield call(apiCall, `/search/predictive?api_version=v5.89&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_so=chrome&device_manufacturer=generic&HKS=avg5e6qacgm6ov7evevitp30j7&filterlist=34429%2C34263%2C34450%2C34451%2C34469%2C35707%2C36018%2C32118%2C35706&suggest=1&movies=4&series=4&live_channels=4&events=4&genres=1&talents=4&users=4&unavailables=0&commontype=full&value=${payload.movieName}`,null,null,'GET');
        yield put ({type: SEARCH_MOVIE_COMPLETE, results});
    } catch(error){
        console.log('error: ',error);
        yield put ({ type: SEARCH_MOVIE_ERROR, error });
    }
}

export function* searchMovieById ({ payload}){
    try{
        console.log('payload.movieName: ',payload.movieName);
        //const movie = yield call(apiCall, `&i=${payload.movieId}`,null,null,'GET');
        const movie = yield call(apiCall, `/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.89&region=mexico&HKS=avg5e6qacgm6ov7evevitp30j7&group_id=${payload.movieId}`,null,null,'GET');
        yield put ({type: SEARCH_MOVIE_BY_ID_COMPLETE, movie});
    } catch(error){
        console.log('error: ',error);
        yield put ({ type: SEARCH_MOVIE_BY_ID_ERROR, error });
    }
}

export function* searchAll ({ payload}){
    try{
        console.log('searchAll');
        //const results = yield call(apiCall, `&s=${payload.movieName}`,null,null,'GET');
        const results = yield call(apiCall, `/content/list?quantity=50&from=0&level_id=GPS&order_way=ASC&order_id=50&filter_id=38704&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.89&region=mexico&HKS=avg5e6qacgm6ov7evevitp30j7`,null,null,'GET');
        console.log('results:', results)
        yield put ({type: SEARCH_MOVIE_ALL_COMPLETE, results});
    } catch(error){
        console.log('error: ',error);
        yield put ({ type: SEARCH_MOVIE_ALL_ERROR, error });
    }
}

export default function* search(){
    yield takeLatest(SEARCH_MOVIE_START, searchMovie);
    yield takeLatest(SEARCH_MOVIE_BY_ID_START, searchMovieById);
    yield takeLatest(SEARCH_MOVIE_ALL_START, searchAll);

}