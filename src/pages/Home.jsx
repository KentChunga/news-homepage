import Featured from "../components/Featured/Feature";
import New from "../components/New/New";
import Trending from "../components/Trending/Trending";

const Home = () => {
  return (
    <main className="mx-auto w-[90%] max-w-[1440px] pt-4 lg:w-[70%]">
      <div className="flex flex-col gap-8 lg:flex-row">
        <Featured />
        <New />
      </div>
      <Trending />
    </main>
  );
};

export default Home;
