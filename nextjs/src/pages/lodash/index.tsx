import { gql, useQuery } from "@apollo/react-hooks";
import { DataLodashDocument } from "generated/graphql";
import Head from "next/head";

const LodashPage = () => {
  const { loading, error, data } = useQuery(DataLodashDocument);
  console.log(data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <Head>
        <title>Lodash | Sapota</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid md:justify-items-center">
        <div className="flex flex-col">
          <span className="md:text-3xl lg:text-3xl font-medium text-lg">
            YOU MIGHT NOT NEED
          </span>
          <span className="md:text-6xl lg:text-6xl text-3xl md:pb-12 pb-6 font-medium">
            LODASH
          </span>
        </div>
        <div className="flex flex-col pb-12">
          <span className="md:text-2xl lg:text-2xl text-base font-medium">
            Why Lodash?
          </span>
          <span className="md:text-lg lg:text-lg text-sm">
            Lodash makes JavaScript easier by taking the hassle out of working
            with arrays, numbers, objects, strings, etc. Lodash’s modular
            methods are great for:
          </span>
          <li className="md:text-lg lg:text-lg text-sm">
            Iterating arrays, objects, & strings
          </li>
          <li className="md:text-lg lg:text-lg text-sm">
            Manipulating & testing values
          </li>
          <li className="md:text-lg lg:text-lg text-sm">
            Creating composite function
          </li>
        </div>
        <div className="bg-gray-50 md:p-12 p-4">
          {data.lodashes.data.map((item: any) => (
            <div key={item.attributes.title}>
              <div className="flex flex-col">
                <span className="md:text-2xl text-indigo-800 font-medium text-base">
                  {item.attributes.title}
                </span>
                <div className="flex flex-row">
                  <div className="basis-1/1"></div>
                  <span className="md:text-base md:pt-3 md:pb-6 pt-2 pb-4 text-sm ">
                    {item.attributes.description}
                  </span>
                  <div className="basis-3/4"></div>
                </div>
              </div>
              <div className="flex flex-row md:grid-flow-row md:gap-24 pb-12 gap-3">
                <div className="basis-1/2">
                  <div className="flex flex-col">
                    <span className="md:text-lg font-medium text-sm">
                      {item.attributes.label}
                    </span>
                    <div className="bg-gray-100 p-4 border-l-indigo-400 border-solid md:border-l-4 border-l-2 border-slate-100">
                      <span className="md:text-base text-xs">
                        {item.attributes.content}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2">
                  <div className="flex flex-col">
                    <span className="md:text-lg font-medium text-sm">
                      {item.attributes.labelOfJS}
                    </span>
                    <div className="bg-gray-100 p-4 border-l-indigo-400 border-solid md:border-l-4 border-l-2 border-slate-100">
                      <span className="md:text-base text-xs">
                        {item.attributes.contentOfJS}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LodashPage;
