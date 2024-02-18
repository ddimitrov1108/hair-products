import { useState } from "react";

interface Props {
  initValue: string;
}

const useFavorite = ({ initValue }: Props) => {
  const [favorite, setFavorite] = useState<string>(initValue);

  return [favorite, setFavorite] as const;
};
export default useFavorite;
