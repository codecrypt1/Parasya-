
import { UploadForm } from "@/components/UploadForm";
import Navbar from "../../components/Navbar";
import UploadedDetails from "@/components/UploadedDetails";



const Dashboard = () => {
  return (
    <div >
      <Navbar/>
      <div className="md:flex ">
        <div className="p-3 md:w-1/2 rounded-lg overflow-hidden">
          <UploadForm/>
        </div>
        <div className="md:w-1/2 p-3 overflow-hidden z-10000">
          <UploadedDetails/>
        </div>

      </div>

      <div>

      </div>
    </div>
  );
};

export default Dashboard;
