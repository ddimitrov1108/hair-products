import { IApiProduct, IFormQuestions } from "./interfaces";

const fetchData = async (formData: IFormQuestions) => {
  if (!import.meta.env.VITE_API_URL) return [];

  const res = await fetch(import.meta.env.VITE_API_URL);

  if (!res.ok) throw new Error("Failed to fetch data");

  const data: {
    products: IApiProduct[];
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

export default fetchData;
