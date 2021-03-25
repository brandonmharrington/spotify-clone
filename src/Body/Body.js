import React from 'react';
import './Body.css';
import Header from '../Header/Header';
import SongRow from '../SongRow/SongRow';
import { PlayCircleFilled, Favorite, MoreHoriz } from '@material-ui/icons';
import { useStateProviderValue } from '../StateProvider';

const Body = ({ spotify }) => {
  const [{ discover_weekly }] = useStateProviderValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>Playlist</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map(item => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
