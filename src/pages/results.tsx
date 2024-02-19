import { FormQuestions, Product } from "@/lib/interfaces";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import ProductDetails from "@/components/ProductDetails";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const fetchData = async (formData: FormQuestions): Promise<Product[]> => {
  const res = await fetch(
    "https://jeval.com.au/collections/hair-care/products.json?page=1"
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const data: { products: Product[] } = await res.json();

  const formDataLower = {
    hairType: formData.hairType.toLowerCase(),
    hairWash: formData.hairWash.toLowerCase(),
    hairProducts: formData.hairProducts.toLowerCase(),
    hairConcern: formData.hairConcern.toLowerCase(),
    hairColor: formData.hairColor.toLowerCase(),
  };

  const filteredProducts = data.products.filter((product) => {
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
  });

  console.log(filteredProducts);
  return filteredProducts;
};

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData: FormQuestions = location.state?.formData;

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
      <div className="grid items-center justify-center w-full h-[539px] relative">
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
              className="border-2 border-white text-white"
            >
              Retake the quiz
            </Button>
          </NavLink>
        </div>
      </div>

      <div className="pb-20 container z-20 relative -mt-16 w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={36}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          centeredSlides={false}
          className="pb-16 container"
        >
          {products &&
            products.length > 0 &&
            products.map((product: Product) => (
              <SwiperSlide key={product.id} className="max-w-[350px]">
                <ProductDetails product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};
export default Results;
