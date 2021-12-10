import { dataFromSpotifyCharts } from "./fullData";

function remapWeeklyListsForFetchingData(badlyMappedWeeklySongsListsArg) {
  const WeeklyLists = badlyMappedWeeklySongsListsArg.map((weeklySongList) => {
    return weeklySongList["data"];
  });
  const remappedWeeklyList = WeeklyLists.map((week, i) => {
    const listData = week.map((song, j) => {
      return song.data;
    });
    return listData;
  });

  return remappedWeeklyList;
}

export const weeklySongsLists = remapWeeklyListsForFetchingData(
  dataFromSpotifyCharts
);
