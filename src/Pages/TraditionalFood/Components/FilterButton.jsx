const FilterButton = ({ search, categoryFilter }) => {
  return (
    <div className="mb-5 mt-20">
      <button
        className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4 mr-4 rounded-md"
        onClick={() => search({ type: "SAVORY PIE" })}
      >
        <span className="text-sm font-normal text-darkBlueText">
          SAVORY PIE
        </span>
      </button>
      <button
        className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4 mr-4 rounded-md"
        onClick={() => search({ type: "STEW" })}
      >
        <span className="text-sm font-normal text-darkBlueText">STEW</span>
      </button>
      <button
        className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4 mr-4 rounded-md"
        onClick={() => search({ type: "CHEESE" })}
      >
        <span className="text-sm font-normal text-darkBlueText">CHEESE</span>
      </button>
      <button
        className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4 mr-4 rounded-md"
        onClick={() => search({ type: "SAUCE" })}
      >
        <span className="text-sm font-normal text-darkBlueText">SAUCE</span>
      </button>
      <button
        className="border border-middleBlueBorderColor hover:bg-middleBlueHoverColor py-1 px-4 mr-4 rounded-md"
        onClick={() => search({ type: "DESSERT" })}
      >
        <span className="text-sm font-normal text-darkBlueText">DESSERT</span>
      </button>
      {categoryFilter ? (
        <button onClick={() => search({})}>
          <span>Clear filter</span>
        </button>
      ) : null}
    </div>
  );
};

export default FilterButton;
