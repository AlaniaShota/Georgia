
const FilterButton = ({ search, categoryFilter }) => {
    return (
        <div className='my-5'>
            <button
                className="border border-buttonBorder hover:bg-buttonHover py-1 px-4 mr-4 rounded-md"
                onClick={() => search({ type: 'SAVORY PIE' })}>
                <span className="text-sm font-normal text-buttonColor">SAVORY PIE</span>
            </button>
            <button
                className="border border-buttonBorder hover:bg-buttonHover py-1 px-4 mr-4 rounded-md"
                onClick={() => search({ type: 'STEW' })}>
                <span className="text-sm font-normal text-buttonColor">STEW</span>
            </button>
            <button
                className="border border-buttonBorder hover:bg-buttonHover py-1 px-4 mr-4 rounded-md"
                onClick={() => search({ type: 'CHEESE' })}>
                <span className="text-sm font-normal text-buttonColor">CHEESE</span>
            </button>
            <button
                className="border border-buttonBorder hover:bg-buttonHover py-1 px-4 mr-4 rounded-md"
                onClick={() => search({ type: 'SAUCE' })}>
                <span className="text-sm font-normal text-buttonColor">SAUCE</span>
            </button>
            <button
                className="border border-buttonBorder hover:bg-buttonHover py-1 px-4 mr-4 rounded-md"
                onClick={() => search({ type: 'DESSERT' })}>
                <span className="text-sm font-normal text-buttonColor">DESSERT</span>
            </button>
            {categoryFilter ? <button
                // className="border border-buttonBorder hover:bg-buttonHover py-1 px-4 mr-4 rounded-md"
                onClick={() => search({})}>
                <span>Clear filter</span>
            </button> : null}
        </div>
    )
}

export default FilterButton