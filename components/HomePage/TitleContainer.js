import Image from "next/image";

function TitleContainer() {
  return (
    <div className="h-screen w-full p-8 flex flex-wrap flex-row">
      <img
        src="./MusicThroughThePandemic.png"
        className="w-2/3 self-center	"
        alt="Music Through The Pandemic"
      />
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
