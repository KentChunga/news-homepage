import Featured from "../components/Featured/Feature";
import New from "../components/New/New";

const Home = () => {
  return (
    <main className="mx-auto w-[90%] pt-4 lg:w-[70%]">
      <div className="flex flex-col gap-8 lg:flex-row">
        <Featured />
        <New />
      </div>
    </main>
  );
};

export default Home;
