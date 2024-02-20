import { IProduct } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useLocalStorage } from "@uidotdev/usehooks";

interface Props extends React.ComponentProps<"div"> {
  product: IProduct;
}

const Product = ({ product, className, ...restProps }: Props) => {
  const [favorites, setFavorites] = useLocalStorage<IProduct[]>(
    "fav_products",
    []
  );

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (favorites.find((p: IProduct) => p.id === product.id)) {
      setFavorites(favorites.filter((p: IProduct) => p.id !== product.id));
    } else setFavorites([...favorites, product]);
  };

  return (
    <div
      className={cn(
        "relative flex flex-col gap-3 justify-center items-center transition-all hover:shadow-md border border-slate-100 bg-white w-full h-full xl:max-w-[350px] pb-4 rounded-lg overflow-hidden",
        className
      )}
      {...restProps}
    >
      <button
        type="button"
        className={cn(
          "absolute top-2 right-2 rounded-full p-2",
          favorites.find((p: IProduct) => p.id === product.id)
            ? "text-red-500"
            : "text-slate-500"
        )}
        onClick={onClickHandler}
      >
        <Heart size={20} />
      </button>

      <img
        src={product.images[0].src}
        alt={product.images[0].src}
        className="p-12 max-w-full object-contain"
      />

      <div className="flex flex-col justify-center items-center gap-1.5">
        <p className="max-w-[280px] px-4 truncate">{product.title}</p>
        <span>${product.price}</span>
      </div>
    </div>
  );
};
export default Product;
