import Article from "./Article";

const New = () => {
  const articles = [
    {
      title: "Hydrogen VS Electric Cars",
      intro: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      intro:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      intro:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <aside className="relative mt-10 w-full bg-veryDarkBlue px-6 pb-2 lg:mt-0 lg:w-1/3">
      <h2 className="mb-4 mt-8 text-4xl font-semibold text-softOrange">New</h2>

      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          description={article.intro}
        />
      ))}
    </aside>
  );
};

export default New;
