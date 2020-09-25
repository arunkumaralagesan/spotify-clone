export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "89351602add1412781d5e35710dd6cec";

const scopes = [
  "user-read-private",
  "user-read-email",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-private"
]

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});

}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;