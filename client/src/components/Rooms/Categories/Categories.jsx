import { categories } from "./CategoriesDetails";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <div className="flex items-center justify-between py-4 overflow-x-auto">
      {categories.map((category) => (
        <CategoryBox
          key={category.label}
          label={category.label}
          icon={category.icon}
        />
      ))}
    </div>
  );
};

export default Categories;
