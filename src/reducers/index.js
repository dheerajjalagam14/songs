//reducers
import {combineReducers} from 'redux';


const songsReducer = () => {
  return [
    {title:'Its my life', duration:'4.05'},
    {title:'Numb', duration:'3.02'},
    {title:'One Love', duration:'3.59'},
    {title:'Now or never', duration:'3.10'}
  ];
};


const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
};


export default combineReducers({
  songs:songsReducer,
  selectedSong:selectedSongReducer
});
