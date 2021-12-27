import TitleContainer from "../components/HomePage/TitleContainer";
import EmotionContainer from "../components/HomePage/EmotionContainer";
import PandemicContainer from "../components/HomePage/PandemicContainer";
import SongContainer from "../components/HomePage/SongContainer";
import VisualizationContainer from "../components/HomePage/VisualizationContainer";
import ConclusionContainer from "../components/HomePage/ConclusionContainer";

import Image from "next/image";

function HomePage() {
  return (
    <main className="flex flex-wrap flex-col text-white m-auto max-w-7xl">
      <TitleContainer />
      <EmotionContainer />
      <PandemicContainer />
      <SongContainer />
      <VisualizationContainer />
      <ConclusionContainer />
    </main>
  );
}

export default HomePage;
