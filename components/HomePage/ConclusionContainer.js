function ConclusionContainer() {
  return (
    <div className="h-80 w-full p-8 flex flex-wrap flex-col">
      <h1 className="text-4xl w-full font-serif italic">Conclusion</h1>
      <div className="pb-2 pt-4 w-3/5">
        Songs with elated emotions rose by 2.5 times, stressed and upset emotions decreased by 0.5
        times and 1.5 times. The initial hypothesis was wrong.
      </div>
      <div className="pb-2 w-3/5">
        Thus,{" "}
        <span className="text-orange-500 font-bold">
          people listened to happier music during pandemic.{" "}
        </span>
      </div>
    </div>
  );
}

export default ConclusionContainer;
