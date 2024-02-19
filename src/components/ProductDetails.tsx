import { Product } from "@/lib/interfaces";

interface Props {
  product: Product;
}

const ProductDetails = ({ product }: Props) => {
  return (
    <div className="relative transition-all hover:shadow-lg border border-slate-100 grid gap-3 bg-white min-w-[300px] sm:min-w-[350px] pb-4 h-full w-full rounded-lg overflow-hidden">
      <img
        src={product.images[0].src}
        alt={product.images[0].src}
        className="p-10 object-cover rounded-lg overflow-hidden"
      />

      <div className="text-header flex flex-col justify-center items-center gap-1.5">
        <p className="text-xl max-w-[280px] truncate ...">{product.title}</p>
        <span className="font-normal text-xl">
          ${product.variants[0].price}
        </span>
      </div>
    </div>
  );
};
export default ProductDetails;
