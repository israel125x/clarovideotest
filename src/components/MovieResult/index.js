import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import style from './style';

const MovieResult =({title, year, type, id, image_base_horizontal, history })=>{
    const classes = style();

    const handleSeeMovieClick =() =>{
        history.push(`/movie/${id}`);
    }
    document.body.style = 'background: black;';
    return(
        <div style={{display: 'inline-block'}}>
            <div style={{margin: '20px'}}>
                <Card className={classes.carContainer}>
                    <img src={image_base_horizontal} alt={title} className={classes.poster}/>    
                </Card>
                <div style={{textAlign: 'center'}}>
                    <Typography style={{color:'white'}}>{title}</Typography>
                    <Button color="primary" variant="contained" onClick={handleSeeMovieClick}>Ver mas</Button> 
                </div>
            </div>
        </div>
        
    );   
}

export default withRouter(MovieResult);