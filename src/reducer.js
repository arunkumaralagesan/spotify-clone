export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after dev
  // token: "BQCnvSSV3kGQViNl-lUx53I5lNScHq9bj7yPNj5cBBHOwfF7pXaMW1uvU22_AE6pazg78uJcXaHMUZZWir2E3a3xuJjebq6-DeygCO3_KDtefPxIw4GnrbCKFCp1niUlwyT8Da8v9FOLnzURaSWyWWFlE28XMFU8tv6kM_-Wc06xdnYIQIQDeWxtbes",
};

const reducer = (state = initialState, action ) => {
  console.log(action);
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
      default:
        return state; 
  }
  
}

export default reducer;