import { Toaster, toast } from "sonner";
import SideBar from "./SideBar";

export default function DashBoard() {
  return (
    <div className="relative z-10">
      <Toaster position="top-right" richColors />
      <div>
        <SideBar />
      </div>
    </div>
  );
}
