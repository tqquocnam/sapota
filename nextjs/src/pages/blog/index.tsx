import Tag from "@/components/Tag";
import { gql, useQuery } from "@apollo/react-hooks";
import Link from "next/link";

// export async function getStaticProps() {
//   const posts = await getAllFilesFrontMatter("blog");

//   return { props: { posts } };
// }
const MAX_DISPLAY = 5;
const tags = ["a", "b", "c"];
const BlogPage = () => {
  const { loading, error, data } = useQuery(gql`
    query dataLodash {
      blogs {
        data {
          attributes {
            title
            description
            dateTime
          }
        }
      }
    }
  `);
  console.log(data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      {/* <PageSEO title={siteMetadata.title} description={siteMetadata.description} /> */}
      <div className="grid md:px-64 ">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Latest
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              A blog created with Next.js and Tailwind.css
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {data.blogs.data.map((item: any) => (
              <li className="py-12" key={item}>
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        {item.attributes.dateTime}
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href=""
                              className="text-gray-900 dark:text-gray-100"
                            ></Link>
                            {item.attributes.title}
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {item.attributes.description}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href=""
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          // aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ))}

            <div className="flex justify-end text-base font-medium leading-6">
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="all posts"
              >
                All Posts &rarr;
              </Link>
            </div>
          </ul>
        </div>
      </div>

      {/* {siteMetadata.newsletter.provider !== "" && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  );
};
export default BlogPage;
