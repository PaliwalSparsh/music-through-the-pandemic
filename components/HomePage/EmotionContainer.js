import Image from "next/image";

function EmotionContainer() {
  return (
    <div className="w-full mt-36 flex flex-wrap flex-col">
      <h1 className="w-full text-4xl font-serif italic">Music and Emotion</h1>
      <div className="w-full pt-2">
        We often<span className="text-orange-500 font-bold"> refer music with the emotion</span> it
        conveys.
      </div>
      <div className="w-full h-[30rem] flex flex-wrap flex-row justify-between">
        <div className="self-center">
          <SongCoverAndComment
            comment="It makes me really"
            emotion="happy"
            emotionColor="text-yellow-500"
            songCoverUrl="/shapeOfYouSongCover.png"
            songCoverAltText="Shape Of You Song Cover"
          />
        </div>
        <div className="self-end">
          <SongCoverAndComment
            comment="That song is"
            emotion="sad"
            emotionColor="text-cyan-500"
            songCoverUrl="/scientistSongCover.png"
            songCoverAltText="Shape Of You Song Cover"
          />
        </div>
        <div className="pt-20">
          <SongCoverAndComment
            comment="That song gets me"
            emotion="excited"
            emotionColor="text-orange-500"
            songCoverUrl="/uptownFunkSongCover.png"
            songCoverAltText="Shape Of You Song Cover"
          />
        </div>
      </div>
    </div>
  );
}

function SongCoverAndComment(props) {
  return (
    <>
      <div className="w-fit rounded-full py-3 px-6 bg-[#191F40]">
        {props.comment} <span className={`${props.emotionColor} font-bold`}>{props.emotion}.</span>
      </div>
      <div className="w-full relative left-14">
        <Image src="/bubblePointer.svg" alt="" width={14.5} height={24} />
      </div>
      <div className="w-full">
        <Image src={props.songCoverUrl} alt={props.songCoverAltText} width={240} height={240} />
      </div>
    </>
  );
}

export default EmotionContainer;
