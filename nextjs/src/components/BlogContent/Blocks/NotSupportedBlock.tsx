type IComp = { data: any };

export const NotSupportedBlock = ({ data }: IComp) => {
  console.log("not support block", data);
  return <p className="text-red-500 mt-4">Not Supported Content</p>;
};
