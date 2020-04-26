import React, { useState, useEffect }from 'react';
import {Container,Typography,Card,Grid,TextField, Button,Box, CircularProgress} from '@material-ui/core';
import styles from './styles';
import { MovieIcon } from '../../icons';
import { useDispatch, useSelector } from 'react-redux';
//--
import { searchMovie } from '../../redux/actions/search';
import { moviesResults, isSearchLoading } from '../../redux/selectors';
import MovieResult from '../../components/MovieResult';
import { searchAll } from '../../redux/actions/search';
import  Movie  from '../../components/Movie'
//--
export default ({history}) => { 
    //------------------------
    const dispatch = useDispatch();
     const movies = useSelector(state => moviesResults(state));
     console.log('movies: ', movies);
     
     useEffect(() => { 
         if(!movies){
            dispatch(searchAll({}));
         }   
            
     });
    //------------------------
    const [ searchText, setSearchText]= useState('');
    const classes = styles();

    const handleSearchTextChange = event => {
        setSearchText(event.target.value)
    }
    const handleCleanTexClik = event=>{
        setSearchText('');
    }
    const handleSearchTexClik= event=>{
        history.push(`/results?movieName=${searchText}`);
    }
    //console.log(searchText);
    document.body.style = 'background: black;';
    if(movies){
        return(
            <div>  
            <div class="row" style={{ width: '100%' },{backgroundColor:'black'}}>
                <div style={{display: 'inline-block'}}>
                <img src='https://www.clarovideo.com//webclient/sk_core/images/clarovideo-logo-sitio.svg' style={{ width: '300px' }}></img>  
                </div>
                <div style={{display: 'inline-block'}}>
                    <TextField
                        value={searchText}
                        placeholder="buscar"
                        className={classes.textFieldSearch}
                        onChange={handleSearchTextChange}>   
                    </TextField>
                </div>
                <div style={{display: 'inline-block'}}>
                    <Button variant="contained" color="primary" size="large" className={classes.searchButton} onClick={handleSearchTexClik} >Buscar</Button>
                </div>
                <div style={{display: 'inline-block'}}>
                    <Button variant="contained" onClick={handleCleanTexClik} >Limpiar</Button>
                </div>
            </div>
            <div>
                {movies.response.groups.map((value, index) => <Movie key={index} {...value}/>)}
            </div>
            </div>
        )

    }else {
        return(
            <CircularProgress></CircularProgress>
        );
    }
}