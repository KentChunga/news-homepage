import Trend from "./Trend";

const Trending = () => {
  const trends = [
    {
      title: "Reviving Retro PCs",
      intro: "What happens when old PCs are given modern upgrades?",
      img: "/images/image-retro-pcs.jpg",
    },

    {
      title: "Top 10 Laptops of 2022",
      intro: "Our best picks for various needs and budgets.",
      img: "/images/image-top-laptops.jpg",
    },

    {
      title: "The Growth of Gaming",
      intro: "How the pandemic has sparked fresh opportunities",
      img: "/images/image-gaming-growth.jpg",
    },
  ];
  return (
    <div className="relative mb-9 mt-16 w-full">
      <div className="flex flex-col gap-6 lg:flex-row">
        {trends.map((trend, index) => (
          <Trend
            key={index}
            title={trend.title}
            description={trend.intro}
            position={String(index + 1).padStart(2, "0")}
            thumbnail={trend.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
