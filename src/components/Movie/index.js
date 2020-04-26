import React from 'react';
import { Card, Grid, Typography, Button, Link } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import style from './style';

const Movie =({title_original, id, image_base_horizontal, history })=>{
    const classes = style();

    const handleSeeMovieClick =() =>{
        history.push(`/movie/${id}`);
    }

    return(
        <div style={{display: 'inline-block'}}>
            <Card className={classes.carContainer} >
                <Link onClick={handleSeeMovieClick}>
                    <img src={image_base_horizontal} alt={title_original} className={classes.poster}/>
                </Link>
            </Card>
            <div style={{textAlign: 'center'}}>
                <Typography className={classes.titleContainer} >
                {title_original} 
                </Typography> 
            </div>
        </div>      
    );   
}

export default withRouter(Movie);