import React, { useEffect } from 'react';
import './App.css';
import { getTokenFromUrl } from './spotify';
import Login from './Login/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player/Player';
import { useStateProviderValue } from './StateProvider';

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcNjqlsm330DB').then(playlist => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: playlist,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
};

export default App;
