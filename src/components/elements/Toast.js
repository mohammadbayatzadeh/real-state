import { toast } from "react-toastify";
//styles
import "react-toastify/dist/ReactToastify.css";

function Toast(text, type) {
  toast[type](text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

export default Toast;
