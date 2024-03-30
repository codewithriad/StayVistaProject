import { useSearchParams } from "react-router-dom";
import { categories } from "./CategoriesDetails";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  return (
    <div className="flex items-center justify-between py-4 overflow-x-auto">
      {categories.map((item) => (
        <CategoryBox
          key={item.label}
          label={item.label}
          icon={item.icon}
          selected={category === item.label}
        />
      ))}
    </div>
  );
};

export default Categories;
