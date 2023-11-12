import { Oval } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Oval
        height={80}
        width={80}
        color="#3f9c14"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
