import { gql, useQuery } from "@apollo/react-hooks";

const BlogPage = () => {
  const { loading, error, data } = useQuery(gql`
    query dataDemo {
      categories {
        data {
          attributes {
            name
          }
        }
      }
    }
  `);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return <div>{data.categories.data.map((e: any) => e.attributes.name)}</div>;
};
export default BlogPage;
