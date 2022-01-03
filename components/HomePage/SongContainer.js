import Image from "next/image";

function SongContainer() {
  return (
    <div className="mt-36 w-full flex flex-wrap flex-col">
      <h2 className="w-full text-4xl font-serif italic">Defining Emotion of a Song?</h2>

      <div className="w-3/5 pb-2 pt-4 pr-10">
        What is the emotion of the song - Shape of You by Ed Sheeran? Spotify can help us define
        emotion of a song programmatically.{" "}
        <span className="text-orange-500 font-bold">
          Spotify breaks down songs on its platform into certain psycho-acoustic parameters.
        </span>{" "}
        We can get these parameters using the Spotify API.
      </div>

      <div className="w-full flex flex-wrap flex-row justify-center pl-36">
        <div className="self-center">
          <Image
            src="/shapeOfYouSongCover.png"
            alt="Shape Of You Song Cover"
            width={240}
            height={240}
          />
        </div>
        <div className="self-center relative left-16">
          <Image
            src="/arrow.svg"
            alt="Arrow between song cover and acoustic properties"
            width={106}
            height={14}
          />
        </div>
        <div className="self-center relative -left-1">
          <Image
            src="/spotifyLogo.png"
            alt="Spotify logo placed on top of arrow"
            width={30}
            height={28}
          />
        </div>
        <div className="self-center">
          <Image
            src="/acousticParametersForShapeOfYou.svg"
            alt="Acoustic properties of Shape Of You"
            width={687}
            height={489}
          />
        </div>
      </div>

      <div className="w-3/5 pb-2 pt-4 pr-10">
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

      <div className="w-3/5 pb-2 pt-4 pr-10">
        We visualized emotions of weekly top 20 songs from 2017 to 2021. Considering 2017 to mid
        2020 as pre-pandemic and everything after that as post-pandemic. Finally, we had{" "}
        <span className="text-orange-500 font-bold">127 weeks </span>
        and <span className="text-orange-500 font-bold">2540 songs.</span>
      </div>

      <div className="w-full flex flex-wrap flex-row justify-center pl-32">
        <div className="self-center">
          <Image src="/circumplexModel.png" alt="Circumplex Model" width={265} height={230} />
        </div>
        <div className="self-center relative left-16">
          <Image
            src="/arrow.svg"
            alt="Arrow between song cover and acoustic properties"
            width={106}
            height={14}
          />
        </div>
        <div className="self-center">
          <Image
            src="/emotionOfShapeOfYou.svg"
            alt="Emotion of Shape Of You is Happy"
            width={687}
            height={489}
          />
        </div>
      </div>
    </div>
  );
}

export default SongContainer;
