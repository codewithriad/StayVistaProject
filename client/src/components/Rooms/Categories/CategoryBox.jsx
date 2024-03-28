// eslint-disable-next-line react/prop-types, no-unused-vars
const CategoryBox = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-600 transition cursor-pointer">
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
