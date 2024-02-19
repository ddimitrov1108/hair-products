import { useFormContext } from "react-hook-form";
import { HairType } from "../../constants";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";

// const fetchData = async () => {
//   const res = await fetch(
//     "https://jeval.com.au/collections/hair-care/products.json?page=1"
//   );

//   if (!res.ok) return null;

//   const data = await res.json();
//   const tags = new Set();

//   data.products.map((product: { id: number; tags: string[] }) =>
//     tags.add(...product.tags)
//   );

//   console.log(tags);

//   return null;
// };

const Q1 = () => {
  const { watch, setValue } = useFormContext();

  // useEffect(() => {
  //   const fetchDataFromServer = async () => await fetchData();
  //   fetchDataFromServer();
  // }, []);

  return (
    <div className="grid gap-14">
      <h1>Whats your hair type or texture?</h1>
      <div className="w-full flex flex-wrap gap-[10px]">
        {Object.values(HairType).map((hairType, index) => (
          <Button
            className={
              hairType === watch("hairType")
                ? "border-lightBlue"
                : "border-slate-200"
            }
            onClick={() => setValue("hairType", hairType)}
          >
            {String.fromCharCode("a".charCodeAt(0) + index)}.
            {' '}
            <span className="capitalize">{hairType}</span>
          </Button>
        ))}
      </div>
      <NavLink to="/messages">Messages</NavLink>;
      <button type="submit">Test Form</button>
    </div>
  );
};

export default Q1;
