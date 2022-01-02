import Image from "next/image";

function TitleContainer() {
  return (
    <div className="w-full py-20 flex flex-wrap flex-row">
      <div className="w-2/3 self-center">
        <Image
          src="/MusicThroughThePandemic.svg"
          alt="Music Through The Pandemic"
          width={651}
          height={491}
        />
      </div>
      <div className="w-1/3 flex flex-wrap flex-col-reverse font-serif italic text-right text-2xl">
        <div className="pb-2">
          <span className="text-orange-500 font-bold">Sparsh</span> Paliwal
        </div>
        <div>
          <span className="text-orange-500 font-bold">Eun</span> Jegal
        </div>
      </div>
      <div className="absolute bg-orange-500 h-96 w-96"></div>
    </div>
  );
}

export default TitleContainer;
