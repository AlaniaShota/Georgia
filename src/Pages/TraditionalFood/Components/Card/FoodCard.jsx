import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const FoodCard = () => {
    const [foodCard, setFoodCard] = useState([])

    useEffect(() => {
        fetch('/api/foods')
            .then(res => res.json())
            .then(data => setFoodCard(data.foods))
    }, [])

    return (
        <div className='grid grid-cols-3  gap-5 lg:container sm:mx-8 lg:mx-0'>
            <div className='flex flex-col justify-between items-start'>
                <h1 className='text-2xl font-bold mb-5'>Unique Georgian Dishes</h1>
                <p className='text-sm text-textSecondColor pr-6'>
                    Taste the diversity of Georgian cuisine at a traditional supra, a communal feast, where a variety of
                    dishes and beverages is served. Supra is an essential part of the country`s cultural identity and offers a unique
                    opportunity to taste the delicious regional dishes and dive into the atmosphere of real Georgia. Don`t miss out
                    on this opportunity to immerse yourself in the culture of the country through its gastronomy!
                </p>
                <Link to='/library'>
                    <button className='border border-buttonBorder hover:bg-buttonHover py-1 px-4 mr-4 mt-5 rounded-md'>
                        <span className='text-sm font-normal text-buttonColor'>
                            EXPLORE MORE
                        </span>
                    </button>
                </Link>
            </div>
            {foodCard.slice(0, 2).map(item => (
                <div key={item.id} className='flex border drop-shadow-md rounded-lg bg-whiteBackground'>
                    <img src={item.img} alt={item.name} className='h-full object-cover rounded-md' />
                </div>
            ))}
        </div>
    )
}

export default FoodCard