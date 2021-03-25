export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE after finished developing
  // token:
  //   'BQDs1XmBgLHtZS3FPxLnyMxq07Kgj7f62hMPOQEgXGJgV3GrW3zgR_9K6AWguhDgGBEG7iQ__W_9u89CIqexDdk_HGkURzfbw9e0tGpENccbSXB3NPLLz4PXP7bFvOVeghLK5OGPb-OA75JD7eKRFenDq2SjNO5_MOw',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
