import { StrictMode } from "react";
import { addParametersToWeeklySongsLists, getTrackInfo } from "./spotifyHelper";
import ReactDOM from "react-dom";
import App from "./App";
import { weeklySongsLists } from "./data";

// addParametersToWeeklySongsLists(weeklySongsLists);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
