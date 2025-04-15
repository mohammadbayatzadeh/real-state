import { ThreeDots } from "react-loader-spinner";

function Loading() {
  return (
    <div className="w-full flex justify-center">
      <ThreeDots
        height="55"
        width="80"
        radius="9"
        color="#465293"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: " 0 auto" }}
        visible={true}
      />
    </div>
  );
}

export default Loading;
