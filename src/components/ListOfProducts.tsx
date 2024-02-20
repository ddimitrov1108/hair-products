import { IProduct } from "@/lib/interfaces";
import Slider from "react-slick";
import Product from "./Product";
import { cn } from "@/lib/utils";
import { Frown } from "lucide-react";

interface Props {
  products: IProduct[] | undefined;
  className?: string;
}
const ListOfProducts = ({ products, className }: Props) => {
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

  return products && products.length > 0 ? (
    <Slider
      {...settings}
      className={cn(
        "cursor-grab pb-20 px-0 container max-w-[1100px] z-20 relative -mt-10 md:-mt-14 w-full overflow-hidden",
        className
      )}
    >
      {products &&
        products.length > 0 &&
        products.map((product: IProduct) => (
          <div key={product.id} className="slick-slide px-4 pb-2.5">
            <Product product={product} />
          </div>
        ))}
    </Slider>
  ) : (
    <div className="text-slate-400 container max-w-[400px] py-20 text-center flex flex-col items-center justify-center gap-6">
      <Frown size={96} className="text-lightBlue-main" />
      <p>
        Nothing to be shown here! Try answering the quiz or add some products in
        favorites
      </p>
    </div>
  );
};
export default ListOfProducts;
