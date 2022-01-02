import Image from "next/image";
const COVID_IMAGE_IN_BUS =
  "https://images.unsplash.com/photo-1610988760355-42a24e842cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80";
const COVID_IMAGE_OUTDOORS =
  "https://images.unsplash.com/photo-1585175170532-fbd7792dec54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80";

function PandemicContainer() {
  return (
    <div className="mt-40 w-full flex flex-wrap flex-row">
      <div className="w-3/5">
        <h2 className="text-4xl font-serif italic">Did Pandemic Change Music?</h2>
        <div className="pb-2 pt-4 pr-10">
          Pandemic turned our world upside down. People were full of fear and anxiety due to the
          uncertainty of future. Further, many struggled adapting to the new nature of things such
          as work and education.
        </div>
        <div className="pb-2">
          We wanted to{" "}
          <span className="text-orange-500 font-bold">
            investigate the emotional patterns of music before and after pandemic.{" "}
          </span>
          Our hypothesis was that people would have listened to sadder music during pandemic.
        </div>
      </div>
      <div className="w-2/5 h-56 relative">
        <Image
          src={COVID_IMAGE_IN_BUS}
          alt="Women wearing a mask and walking on the street."
          layout="fill"
          className="object-cover object-center rounded-2xl top-10"
        />
      </div>
      <div className="mt-8 w-full h-72 relative">
        <Image
          src={COVID_IMAGE_OUTDOORS}
          alt="Women wearing a mask and walking on the street."
          layout="fill"
          className="object-cover object-center rounded-2xl"
        />
      </div>
    </div>
  );
}

export default PandemicContainer;
