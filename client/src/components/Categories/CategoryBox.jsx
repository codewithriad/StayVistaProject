// eslint-disable-next-line react/prop-types
const CategoryBox = ({ label, icon: Icon, selected }) => {
  return (
    <div
      onClick={handleParams}
      className={`${
        selected
          ? "text-neutral-800 border-b-neutral-800"
          : "border-b-transparent text-neutral-500"
      } flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-600 transition cursor-pointer`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
