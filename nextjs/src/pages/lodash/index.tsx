import { gql, useQuery } from "@apollo/react-hooks";
import Head from "next/head";

const LodashPage = () => {
  const { loading, error, data } = useQuery(gql`
    query dataLodash {
      lodashes {
        data {
          attributes {
            title
            label
            description
            content
          }
        }
      }
    }
  `);
  console.log(data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <Head>
        <title>lodash</title>
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
            Creating composite functions
          </li>
        </div>
        <div className="md:grid md:gap-24 md:grid-cols-2 md:px-12 flex flex-col gap-6">
          {data.lodashes.data.map((item: any) => (
            <div key={item.attributes.title} className="flex flex-col">
              <span className="md:text-2xl text-fuchsia-600 font-medium text-base">
                {item.attributes.title}
              </span>
              <span className="md:text-lg md:pt-3 md:pb-6 pt-2 pb-4 text-sm">
                {item.attributes.description}
              </span>
              <span className="md:text-xl font-medium text-sm">
                {item.attributes.label}
              </span>
              <div className="bg-slate-100 p-4 border-l-fuchsia-600 border-solid md:border-l-4 border-l-2 border-slate-100">
                <span className="md:text-base text-xs">
                  {item.attributes.content}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LodashPage;
