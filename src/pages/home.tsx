import PageLanding from "@/PageLanding";
import ListOfProducts from "@/components/ListOfProducts";
import Button from "@/components/ui/Button";
import { IProduct } from "@/lib/interfaces";
import { useLocalStorage } from "@uidotdev/usehooks";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [favorites] = useLocalStorage<IProduct[]>("fav_products", []);

  return (
    <>
      <PageLanding
        headerTitle="Build a self care routine suitable for you"
        description="Take out test to get a personalised self care routine based on your needs."
        image={{ src: "/home-bg.jpg", alt: "home-bg" }}
      >
        <NavLink to="/trivia/q1">
          <Button className="mt-2">Start the quiz</Button>
        </NavLink>
      </PageLanding>

      <ListOfProducts products={favorites} />
    </>
  );
};
export default Home;
