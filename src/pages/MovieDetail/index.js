import React, { useEffect } from 'react';
import { Container, CircularProgress, Typography } from '@material-ui/core';
import { useDispatch, useSelector} from 'react-redux';

import {movieResult as movieResultSelector} from '../../redux/selectors';
import { searchMovieById } from '../../redux/actions/search';

export default ({match}) => {
    const dispatch = useDispatch();
    const movieResult = useSelector(state => movieResultSelector(state));
    document.body.style = 'background: black;';
    console.log('movieResult: ',movieResult);
    useEffect(()=>{
        const movieId = match.params.id;
        console.log('movieId: ',movieId);
        console.log('movieResult-> ',movieResult)
        if(!movieResult || movieResult && movieResult.response.group.common.id !== movieId){
            //corregir
            dispatch(searchMovieById({movieId}));
        }
    });

    if(!movieResult){
        return <CircularProgress size={100} color="primary"></CircularProgress>
    }

    return(
        <Container style={{backgroundColor: 'black'}}>
            <Typography style={{color: 'white'}} variant="h3">{movieResult.response.group.common.extendedcommon.media.originaltitle}</Typography>
            <img src={movieResult.response.group.common.image_large} alt={movieResult.Title}></img>
            <Typography style={{color: 'white'}} ><strong>Año: </strong>{movieResult.response.group.common.extendedcommon.media.publishyear}</Typography>
            <Typography style={{color: 'white'}} ><strong>Pais: </strong>{movieResult.response.group.common.extendedcommon.media.countryoforigin.desc}</Typography>
            <Typography style={{color: 'white'}} ><strong>Clasificacion: </strong>{movieResult.response.group.common.extendedcommon.media.rating.desc}</Typography>
            <Typography style={{color: 'white'}} ><strong>Duracion: </strong>{movieResult.response.group.common.extendedcommon.media.duration}</Typography>
            <Typography style={{color: 'white'}} ><strong>Sinopsis: </strong>{movieResult.response.group.common.extendedcommon.media.description_extended}</Typography>
        </Container>
    );
}