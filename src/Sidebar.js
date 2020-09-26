import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from './DataLayer';

function SideBar({ spotify }) {
  const [{ playlists }, dispatch ] = useDataLayerValue();

  const getSongsInPlayList  = (uri) => {
    spotify.getPlaylist(uri.split(":")[2]).then(response => {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response,
      });
    })
  }

  return (
    <div className="sidebar">
       <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS </strong>
      <hr />
      {playlists?.items?.map(playlist => {
        return <SidebarOption title={playlist.name} getSongsInPlayList={getSongsInPlayList} uri={playlist.uri}/>;
      })}
    </div>
  )
}

export default SideBar
