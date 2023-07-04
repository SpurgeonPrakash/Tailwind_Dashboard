import "./Ranking.css";

const Ranking = () => {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold mb-4">Your Ranking</h3>
      <div className="w-full h-4 border border-solid border-gray-400 rounded-t-lg rounded-b-lg">
        <div className="w-4/5 h-full gradient rounded-t-lg rounded-b-lg"></div>
      </div>
      <p className="text-xs text-gray-400 text-center mt-2">
        Hurray You are in the top{" "}
        <span className="text-md text-indigo-500 font-bold">27%</span>
      </p>
    </div>
  );
};

export default Ranking;
