function VisualizationContainer() {
  return (
    <div className="mt-24 w-full flex flex-wrap flex-col">
      <h1 className="text-4xl w-full font-serif italic">Visualization</h1>
      <iframe
        src="https://public.tableau.com/views/final_draft1/Story1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true"
        className="mt-8 w-full h-[100vh]"
      ></iframe>
    </div>
  );
}

export default VisualizationContainer;
