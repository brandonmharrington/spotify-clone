import React from 'react';
import './Footer.css';
import {
  PlayCircleOutline,
  SkipNext,
  SkipPrevious,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://upload.wikimedia.org/wikipedia/en/b/ba/Snoh_Aalegra_-_Ugh%2C_Those_Feels_Again.png"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>I Want You Around</h4>
          <p>Snoh Aalegra</p>
        </div>
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
