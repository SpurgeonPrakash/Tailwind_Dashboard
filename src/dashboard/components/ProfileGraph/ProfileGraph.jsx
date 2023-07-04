import DoughnutChart from "../DoughnutChart/DoughnutChart";

const ProfileGraph = () => {
  return (
    <div className="rounded-md mt-6 p-8 h-58 bg-gray-200 pb-8">
      <h4 className="font-semibold text-xs text-center mb-2">
        Wheel of Opurtunities
      </h4>
      <DoughnutChart />
    </div>
  );
};

export default ProfileGraph;
