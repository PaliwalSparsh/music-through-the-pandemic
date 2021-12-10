import SpotifyWebApi from "spotify-web-api-js";
const ACCESS_TOKEN =
  "BQArIpOLmzJpdSQ6-96DauA07QYeTxFuz638zz5ATte6f1M_GJeBaEr7Tnqr5ayulorseYpwW5CmPHezVNg";

// Access Token expires in 3600 seconds.
var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(ACCESS_TOKEN);

export async function addParametersToWeeklySongsLists(weeklySongsLists) {
  const allSongIds = getAllSongIds(weeklySongsLists);

  let audioFeaturesMappedToIds = await getAudioFeaturesMappedToIds(allSongIds);

  const weeklySongsListsWithParameters = weeklySongsLists.map((songsLists) => {
    return songsLists.map((song) => {
      return { ...song, ...audioFeaturesMappedToIds[song.id] };
    });
  });
  console.log(
    "weeklySongsListsWithParameters: ",
    weeklySongsListsWithParameters
  );
  return weeklySongsListsWithParameters;
}

export async function getTrackInfo(trackId) {
  console.log("here");
  const response = await spotifyApi.getTrack(trackId);
  console.log("response", response);
  return response;
}

export async function getTrackAudioFeatures(trackId) {
  const response = await spotifyApi.getAudioFeaturesForTrack(trackId);
  return response;
}

export async function getMultipleTracksAudioFeatures(trackIdArray) {
  console.log(trackIdArray);
  const response = await spotifyApi.getAudioFeaturesForTracks(trackIdArray);
  return response["audio_features"];
}

function getAllSongIds(weeklySongsLists) {
  let allSongIds = [];
  weeklySongsLists.forEach((songsLists) => {
    songsLists.forEach((song) => {
      return allSongIds.push(song.id);
    });
  });
  return allSongIds;
}

async function getAudioFeaturesMappedToIds(allSongIds) {
  // const totalAudioFeaturesAPICalls = Math.ceil(allSongIds.length / 100);
  const audioFeaturesMappedToIds = {};
  for (
    let songCount = 0;
    songCount <= allSongIds.length;
    songCount = songCount + 100
  ) {
    const currentSetOfIds = allSongIds.slice(songCount, songCount + 100);
    let audioFeaturesFor100Songs = await getMultipleTracksAudioFeatures(
      currentSetOfIds
    );
    audioFeaturesFor100Songs.forEach((song) => {
      // for missed counts in the above for loop
      if (song === null) return;
      audioFeaturesMappedToIds[song.id] = song;
    });
  }
  return audioFeaturesMappedToIds;
}
