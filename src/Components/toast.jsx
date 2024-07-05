import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (message, type = "default") => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "info":
      toast.info(message);
      break;
    case "warning":
      toast.warn(message);
      break;
    default:
      toast(message);
      break;
  }
};

export default notify;
