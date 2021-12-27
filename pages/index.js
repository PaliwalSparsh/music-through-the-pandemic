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

{
  /* <div className="hidden max-w-md sm:max-w-full mt-16">
  <div className="h-60 w-full sm:object-cover relative rounded-lg shadow-lg">
    <Image alt="placeholder" layout="fill" src="https://via.placeholder.com/500" />
  </div>
  <p className="mt-8">
    We often associate music with emotions. For example, Uptown Funk is a happy song, Scientist by
    ColdPlay is a sad song.
  </p>
</div>; */
}
