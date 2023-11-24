import SelectCustom from "./SelectCustom";
import MapComp from "./MapComp";

const College = () => {
  let options = [
    {
      id: 1,
      value: "Government Engineering College, Thrissur",
      label: "Government Engineering College, Thrissur",
    },
  ];
  return (
    <div className="w-[90%] h-[80%] border-black rounded-xl shadow-2xl">
      <div className="flex w-full h-full flex-col-reverse md:flex-row">
        <div className="md:w-1/2 h-full bg-[#1f7a8c] p-16">
          <SelectCustom options={options} label="Select a college" />
        </div>
        <div className="md:w-1/2 h-full">
          {" "}
          <MapComp />
        </div>
      </div>
    </div>
  );
};

export default College;
