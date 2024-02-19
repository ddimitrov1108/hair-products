import ProductDetails from "@/components/ProductDetails";
import Button from "@/components/ui/Button";
import Header from "@/components/ui/Header";
import { Product } from "@/lib/interfaces";
import { useLocalStorage } from "@uidotdev/usehooks";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const Home = () => {
  const [favorites] = useLocalStorage<Product[]>("fav_products", []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="grid items-center justify-center w-full h-[526px] relative">
        <img
          src="/home-bg.jpg"
          alt="home-bg"
          className="absolute w-full h-[526px] object-cover"
        />

        <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-[#000]/[0.35]"></div>

        <div className="z-10 text-white max-w-[590px] text-center flex flex-col items-center gap-4">
          <Header>Build a self care routine suitable for you</Header>

          <p className="max-w-[327px] text-center font-light">
            Take out test to get a personalised self care routine based on your
            needs.
          </p>

          <NavLink to="/trivia/q1">
            <Button className="mt-2">Start the quiz</Button>
          </NavLink>
        </div>
      </div>

      {favorites && favorites.length > 0 && (
        <Slider
          {...settings}
          className="cursor-grab pb-20 px-0 container max-w-[1100px] z-20 relative -mt-10 md:-mt-14 w-full overflow-hidden"
        >
          {favorites &&
            favorites.length > 0 &&
            favorites.map((product: Product) => (
              <div key={product.id} className="slick-slide px-4 pb-2.5">
                <ProductDetails product={product} />
              </div>
            ))}
        </Slider>
      )}
    </>
  );
};
export default Home;
