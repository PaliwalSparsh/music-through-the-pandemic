import Image from "next/image";

function TitleContainer() {
  return (
    <div className="w-full py-20 flex flex-wrap flex-row relative">
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
      <div className="absolute h-96 w-96 rounded-full bg-red-500 opacity-50 blur-3xl -top-32 -right-32 -z-10"></div>
      <div className="absolute h-96 w-96 rounded-full bg-cyan-600 opacity-40 blur-3xl -top-32 -left-32 -z-10"></div>
      <div className="absolute h-96 w-96 rounded-full bg-purple-500 opacity-40 blur-3xl top-72 left-12 -z-10"></div>
      <div className="absolute h-80 w-80 rounded-full bg-orange-500 opacity-40 blur-3xl top-96 right-32 -z-10"></div>
    </div>
  );
}

export default TitleContainer;
