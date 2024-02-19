import { ApiProduct, FormQuestions, Product } from "@/lib/interfaces";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import ProductDetails from "@/components/ProductDetails";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";
import Slider from "react-slick";

const fetchData = async (formData: FormQuestions) => {
  const res = await fetch(
    "https://jeval.com.au/collections/hair-care/products.json?page=1"
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const data: {
    products: ApiProduct[];
  } = await res.json();

  const formDataLower = {
    hairType: formData.hairType.toLowerCase(),
    hairWash: formData.hairWash.toLowerCase(),
    hairProducts: formData.hairProducts.toLowerCase(),
    hairConcern: formData.hairConcern.toLowerCase(),
    hairColor: formData.hairColor.toLowerCase(),
  };

  const filteredProducts = data.products
    .filter((product) => {
      const productLower = {
        title: product.title.toLowerCase(),
        body_html: product.body_html.toLowerCase(),
        tags: product.tags.map((tag) => tag.toLowerCase()),
      };

      const matchesHairType =
        productLower.title.includes(formDataLower.hairType) ||
        productLower.body_html.includes(formDataLower.hairType) ||
        productLower.tags.includes(formDataLower.hairType);

      const matchesHairWash =
        productLower.title.includes(formDataLower.hairWash) ||
        productLower.body_html.includes(formDataLower.hairWash) ||
        productLower.tags.includes(formDataLower.hairWash);

      const matchesHairProducts =
        productLower.title.includes(formDataLower.hairProducts) ||
        productLower.body_html.includes(formDataLower.hairProducts) ||
        productLower.tags.includes(formDataLower.hairProducts);

      const matchesHairConcern =
        productLower.title.includes(formDataLower.hairConcern) ||
        productLower.body_html.includes(formDataLower.hairConcern) ||
        productLower.tags.includes(formDataLower.hairConcern);

      const matchesHairColor =
        productLower.title.includes(formDataLower.hairColor) ||
        productLower.body_html.includes(formDataLower.hairColor) ||
        productLower.tags.includes(formDataLower.hairColor);

      return (
        matchesHairType ||
        matchesHairWash ||
        matchesHairProducts ||
        matchesHairConcern ||
        matchesHairColor
      );
    })
    .map(({ id, title, variants, images }) => ({
      id,
      title,
      price: variants[0].price,
      images,
    }));

  return filteredProducts;
};

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData: FormQuestions = location.state?.formData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  // Use react-query's useQuery hook for data fetching
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products", formData], () => fetchData(formData));

  if (isLoading) return <div>Loading...</div>;
  if (isError) navigate("/", { replace: true });

  return (
    <>
      <div className="px-2 grid items-center justify-center w-full h-[539px] relative">
        <img
          src="/results-bg.jpg"
          alt="results-bg"
          className="absolute w-full h-[539px] object-cover"
        />

        <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-[#000]/[0.35]"></div>

        <div className="z-10 text-white max-w-[590px] text-center flex flex-col items-center gap-8">
          <Header>Build your everyday self-care routine.</Header>

          <p className="text-center font-light">
            Perfect for if you're looking for soft, nourished skin, our
            moisturizing body washes are made with skin-natural nutrients that
            work with your skin to replenish moisture. With a light formula, the
            bubbly lather leaves your skin feeling cleansed and cared for. And
            by choosing relaxing fragrances, you can add a moment of calm to the
            end of your day.
          </p>

          <NavLink to="/trivia/q1">
            <Button
              variant="outline"
              className="border-2 border-white text-white "
            >
              Retake the quiz
            </Button>
          </NavLink>
        </div>
      </div>

      {products && products.length > 0 && (
        <Slider
          {...settings}
          className="cursor-grab pb-20 px-0 container max-w-[1100px] z-20 relative -mt-10 md:-mt-14 w-full overflow-hidden"
        >
          {products.map((product: Product) => (
            <div key={product.id} className="slick-slide px-4">
              <ProductDetails product={product} />
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};
export default Results;
