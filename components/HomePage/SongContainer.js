function SongContainer() {
  return (
    <div className="w-full flex flex-wrap flex-col">
      <h1 className="text-4xl w-full font-serif italic">Defining Emotion of a Song?</h1>
      <div className="pb-2 pt-4 w-3/5">
        What is the emotion of the song - Shape of You by Ed Sheeran? Spotify can help us define
        emotion of a song programatically.{" "}
        <span className="text-orange-500 font-bold">
          Spotify breaks down songs on its platform into certain psycho-acoustic parameters.
        </span>{" "}
        We can get these parameters using the Spotify API.
      </div>
      <div className="pt-4 w-3/5">
        <span className="text-orange-500 font-bold">Russel’s Circumplex model</span> helps us to
        find{" "}
        <span className="text-orange-500 font-bold">
          emotion of a music based on the Energy and Valence (positiveness) parameters.
        </span>{" "}
        Once, we have these parameters for a song. We can map them on the graph and find out the
        emotion a song conveys. This can be seen in the figures below. The{" "}
        <span className="text-orange-500 font-bold">
          model also helped us to assign colors to emotions.
        </span>{" "}
        For example – Angry is Red, Calm is Blue.
      </div>
      <div className="pt-2 w-3/5">
        We visualized emotions of weekly top 20 songs from 2017 to 2021. Considering 2017 to mid
        2020 as pre-pandemic and everything after that as post-pandemic. Finally, we had{" "}
        <span className="text-orange-500 font-bold">127 weeks </span>
        and <span className="text-orange-500 font-bold">2540 songs.</span>
      </div>
    </div>
  );
}

export default SongContainer;
