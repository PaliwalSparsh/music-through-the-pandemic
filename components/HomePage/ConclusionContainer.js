function ConclusionContainer() {
  return (
    <div className="py-36 w-full flex flex-wrap flex-row relative">
      <h2 className="text-4xl w-full font-serif italic">Conclusion</h2>
      <div className="pb-2 pt-4 w-3/5">
        Songs with <span className="text-orange-500 font-bold">elated</span> emotions rose by 2.5
        times, <span className="text-purple-500 font-bold">stressed</span> and{" "}
        <span className="text-cyan-500 font-bold">upset</span> emotions decreased by 0.5 times and
        1.5 times. The initial hypothesis was wrong.
      </div>
      <div className="pb-2 w-3/5">
        Thus,{" "}
        <span className="text-orange-500 font-bold">
          people listened to happier music during pandemic.{" "}
        </span>
      </div>
      <div className="absolute h-96 w-96 rounded-full bg-purple-500 opacity-40 blur-3xl -bottom-60 -left-48 -z-10"></div>
      <div className="absolute h-80 w-80 rounded-full bg-orange-500 opacity-70 blur-3xl -bottom-60 -right-48 -z-10"></div>
    </div>
  );
}

export default ConclusionContainer;
