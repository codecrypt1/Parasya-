import SelectCustom from "./SelectCustom";
import Map from "./Map";
import HostelList from "./HostelList";

const College = () => {
  let options = [
    {
      id: 1,
      value: "College of Engineering, Trivandrum",
      label: "College of Engineering, Trivandrum",
      lat: "8.548214926919586",
      long: " 76.90608260620853",
    },
    {
      id: 2,
      value: "Government Engineering College, Thrissur",
      label: "Government Engineering College, Thrissur",
      lat: "10.554737567201556",
      long: "76.22463854232932",
    },
    {
      id: 3,
      value: "Thangal Kunju Musaliar College of Engineering, Kollam",
      label: "Thangal Kunju Musaliar College of Engineering, Kollam",
      lat: "8.914487018124136",
      long: "76.63194455390811",
    },
    {
      id: 4,
      value: "NSS College of Engineering, Palakkad",
      label: "NSS College of Engineering, Palakkad",
      lat: "10.824256003893137",
      long: "76.64263971534135",
    },
    {
      id: 5,
      value: "Mar Athanasius College of Engineering, Kothamangalam",
      label: "Mar Athanasius College of Engineering, Kothamangalam",
      lat: "10.05479401644863",
      long: "76.62048415368652",
    },
    {
      id: 6,
      value: "Government College of Engineering, Kannur",
      label: "Government College of Engineering, Kannur",
      lat: "11.985879150227593",
      long: "75.38168594357293",
    },
    {
      id: 7,
      value: "Rajiv Gandhi Institute of Technology, Kottayam",
      label: "Rajiv Gandhi Institute of Technology, Kottayam",
      lat: "9.578884572251509",
      long: "76.62287945198212",
    },
    {
      id: 8,
      value: "Government Engineering College, Trivandrum",
      label: "Government Engineering College, Trivandrum",
      lat: "8.56694864671845,",
      long: "76.94538844690405",
    },
    {
      id: 9,
      value: "Government Engineering College, Kozhikode",
      label: "Government Engineering College, Kozhikode",
      lat: "11.2858261582218,",
      long: "75.77028063026162",
    },
    {
      id: 10,
      value: "Government Engineering College, Sreekrishnapuram, Palakkad",
      label: "Government Engineering College, Sreekrishnapuram, Palakkad",
      lat: "10.90354516009021",
      long: "76.43446696651121",
    },
    {
      id: 11,
      value: "Government Engineering College, Wayanad",
      label: "Government Engineering College, Wayanad",
      lat: "11.833971277918552",
      long: "75.97027367435238",
    },
    {
      id: 12,
      value: "Government Engineering College, Idukki",
      label: "Government Engineering College, Idukki",
      lat: "9.853554242628746",
      long: "76.94004930930548",
    },
  ];
  return (
    <div className="w-[90%] h-[80%] border-black rounded-xl shadow-2xl">
      <div className="flex w-full h-full flex-col-reverse md:flex-row">
        <div className="md:w-1/2 h-full bg-[#1f7a8c] p-16 flex gap-6 flex-col">
          <SelectCustom options={options} label="Select a college" def={1} />
          <HostelList />
        </div>
        <div className="md:w-1/2 h-full">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default College;
