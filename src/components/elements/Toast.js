import { message } from "antd";

function useToast() {
  const [api, contextHolder] = message.useMessage();
  return { contextHolder, api };
}

export default useToast;
