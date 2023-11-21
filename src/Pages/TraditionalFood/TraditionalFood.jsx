import { useEffect, useState, } from 'react'
import foodImg from '../../assets/traditional-food-img/georgia-traditional-food-image.jpg'
import mapImg from '../../assets/traditional-food-img/georgia-map.png'
import RestaurantCard from './Components/RestaurantCard'
import FilterButton from './Components/FilterButton'
import { Link, useSearchParams } from 'react-router-dom'
import RandomFood from './Components/RandomFood'


const leadMoreContent = 15

const TraditionalFood = () => {
  const [traditionalFood, setTraditionalFood] = useState([])
  const [next, setNext] = useState(leadMoreContent)
  const [showMore, setShowMore] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    fetch('/api/foods')
      .then(res => res.json())
      .then(data => setTraditionalFood(data.foods))
  }, [])

  const handleMoreItem = () => {
    setNext(next + leadMoreContent);
  };

  const categoryFilter = searchParams.get('type')

  const displayedTraditionalFood = categoryFilter ? traditionalFood.filter(van => van.type === categoryFilter) : traditionalFood;

  return (
    <div>
      <div className='flex w-full justify-center items-center'>
        <img src={foodImg} alt="Tbilisi" className='object-cover h-[518px] w-full' />
        <div className='absolute'>
          <img src={mapImg} alt="Georgian Map" className='object-cover' />
          <h1 className='text-center text-2xl text-[#fff] font-bold leading-9'>Georgia</h1>
        </div>
      </div>
      <div className='lg:container sm:mx-8 lg:mx-0'>
        <p className='flex flex-wrap mt-7 text-lg font-normal'>
          Georgia is known for its delicious food. While traveling in Georgia you will notice that throughout the country
          the taste and flavor differs. Every province of Georgia has its own variation of traditional cuisine.
          Georgian dishes are suitable for all kind of eaters. Whether you eat meat, or not, you would not stay hungry here.
          Vegetarians can try lots of different delicious dishes too.
        </p>
        <div className='flex flex-col my-10'>
          <h1 className='text-xl font-semibold'>Where to eat local?</h1>
          <p className='text-base font-light py-3'>The best traditional places in Georgia, recommended by food professionals</p>
          <RestaurantCard />
        </div>
        {traditionalFood.sort(() => 0.5 - Math.random()).slice(0, 2).map((item, index) => (
          <RandomFood key={index} randomFood={item} designClass={index === 0 ? 'flex-row rounded-r-lg' : ' flex-row-reverse rounded-l-lg'} />
        ))}
        <FilterButton search={setSearchParams} categoryFilter={categoryFilter} />
        <div className='grid grid-cols-3 gap-5'>
          {displayedTraditionalFood.slice(0, next).map(item => (
            <div className='flex flex-col justify-between border drop-shadow-md rounded-lg bg-whiteBackground' key={item.id}>
              <img alt={item.name} src={item.img} className='object-cover rounded-t-lg  h-[200px]' />
              <div className='p-4'>
                <h1 className='text-xl font-normal'>{item.name}</h1>
                {item.location ? <h3 className='text-sm text-textSecondColor font-normal my-3'>{item.location}</h3> : <h3 className='text-sm text-textSecondColor font-normal my-3'>Most iconic: </h3>}
                <h3 className='text-sm text-textSecondColor font-normal'>
                  {showMore ? item.about : `${item.about.substring(0, 200)}`}
                </h3>
              </div>
              <div className='p-4'>
                <div className='flex justify-center items-center w-full'>
                  <Link
                    to={`/traditional-food/${item.id}`}
                    state={{ search: `?${searchParams.toString()}`, type: categoryFilter }}
                    onClick={() => setShowMore(!showMore)}>
                    <button
                      className='border border-buttonBorder hover:bg-buttonHover rounded-md py-1 px-4'
                      onClick={handleMoreItem}>
                      <span className='text-sm font-medium text-buttonColor'>SHOW MORE</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {categoryFilter ? null : <div className="flex justify-center items-center my-10">
          {next < traditionalFood?.length && (
            <button
              className='border border-buttonBorder  hover:bg-buttonHover  py-1 px-4 rounded-md'
              onClick={handleMoreItem}
            >
              <span className=' text-md text-buttonColor'>
                LOAD MORE
              </span>
            </button>
          )}
        </div>}
      </div>
    </div>
  )
}

export default TraditionalFood