//action creator

export const selectSong = song => {
  return {
    //action
   type : 'SONG_SELECTED',
   payload: song
  };
};
