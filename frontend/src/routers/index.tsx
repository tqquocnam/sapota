import Header from "../components/Header";
import Footer from "../components/Footer";
import { Navigate, useRoutes } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import About from "../components/About";
import Blog from "../components/Blog";

const Layout: React.FC = () => {
  const GET_LOCATIONS = gql`
    query GetLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `;
  function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);
    console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.locations.map(({ id, name, description, photo }) => (
      <div key={id}>
        <h3>{name}</h3>
        <img
          width="400"
          height="250"
          alt="location-reference"
          src={`${photo}`}
        />
        <br />
        <b>About this location:</b>
        <p>{description}</p>
        <br />
      </div>
    ));
  }
  return (
    <div className="m-4 max-w-1200">
      <Header />
      <DisplayLocations />
      <Footer />
    </div>
  );
};

const Router: React.FC = () => {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    {
      path: "/:page/*",
      element: <Layout />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);

  return routeElements;
};
export default Router;
