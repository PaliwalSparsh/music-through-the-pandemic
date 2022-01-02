function PandemicContainer() {
  return (
    <div className="pt-40 w-full flex flex-wrap flex-row">
      <div className="w-3/5">
        <h1 className="text-4xl font-serif italic">Did Pandemic Change Music?</h1>
        <div className="pb-2 pt-4">
          Pandemic turned our world upside down. People were full of fear and anxiety due to the
          uncertainty of future. Further, many struggled adapting to the new nature of things such
          as work and education.
        </div>
        <div className="pb-2">
          We wanted to
          <span className="text-orange-500 font-bold">
            investigate the emotional patterns of music before and after pandemic.
          </span>
          Our hypothesis was that people would have listened to sadder music during pandemic.
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1610988760355-42a24e842cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
        className="w-2/5 h-96 object-cover rounded-2xl"
      />
      <img
        src="https://images.unsplash.com/photo-1585175170532-fbd7792dec54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
        className="w-full h-96 object-cover rounded-2xl"
      />
    </div>
  );
}

export default PandemicContainer;
