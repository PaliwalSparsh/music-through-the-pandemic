import Image from "next/image";

function TitleContainer() {
  return (
    <div className="h-screen w-full p-8 flex flex-wrap flex-row">
      <div className="w-2/3 self-center">
        <Image
          src="/MusicThroughThePandemic.svg"
          alt="Music Through The Pandemic"
          width={651}
          height={491}
        />
      </div>
      <div className="font-serif italic self-center px-8">
        <span className="text-orange-500 font-bold">Sparsh</span> Paliwal
      </div>
      <div className="font-serif italic self-center">
        <span className="text-orange-500 font-bold">Eun</span> Jegal
      </div>
    </div>
  );
}

export default TitleContainer;
