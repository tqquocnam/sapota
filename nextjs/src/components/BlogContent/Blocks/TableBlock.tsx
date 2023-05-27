import { Fragment } from "react";
import { TableBlockData } from "types/blogContent";
import classNames from "classnames";

type IComp = { data: TableBlockData };

export const TableBlock = ({ data }: IComp) => {
  if (!data.content) return null;
  const { withHeadings, content } = data;
  const tableHead = withHeadings ? content[0] : null;
  const tableBody = withHeadings ? content.slice(1) : content;

  return (
    <>
      <div className="mt-6 not-prose relative bg-slate-50 rounded overflow-hidden ">
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-hidden">
            <table className="border-collapse table-auto w-full text-sm">
              {tableHead && (
                <thead className="w-full">
                  <tr className="border-b">
                    {content[0].map((item, index) => (
                      <th
                        key={`${item}-${index}`}
                        className={classNames(
                          "font-bold p-2 py-2 pl-4 text-slate-400 text-center",
                          {
                            "border-r": index !== content[0].length - 1,
                          }
                        )}
                        dangerouslySetInnerHTML={{ __html: item }}
                      ></th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody className="bg-white">
                {tableBody.map((row, index) => (
                  <tr key={`${row}-${index}`}>
                    {row.map((item, index) => (
                      <td
                        key={`${item}-${index}`}
                        className={classNames(
                          "border-b border-slate-100 p-2 pl-4 text-slate-500",
                          {
                            "border-r": index !== row.length - 1,
                          }
                        )}
                        dangerouslySetInnerHTML={{ __html: item }}
                      ></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl"></div>
      </div>
    </>
  );
};
