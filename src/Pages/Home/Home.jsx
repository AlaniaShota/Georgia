import { Helmet } from "react-helmet"
import homeImg from '../../assets/home-img/home-img-georgia.jpg'
import mapImg from '../../assets/home-img/why-georgia-map-1-new.svg'
import cloudsImg from '../../assets/home-img/why_hero_clouds.webp'

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <div className='flex w-full justify-center items-center'>
                <img src={homeImg} alt="Tbilisi" className='object-cover h-[737px] w-full' />
                <div className='absolute'>

                    <h1 className='text-center text-2xl text-[#fff] font-bold leading-9'>Why Georgia</h1>
                </div>
            </div>
            <div className="lg:container  bg-[#02160e] sm:mx-8 lg:mx-0">

                {/* <div className=" "> */}
                    <div className="flex flex-row text-[#fff]">
                        <div className="flex flex-col flex-wrap items-start justify-center">
                            <h1>Geography of Georgia</h1>
                            <p>Georgia is located at the intersection of Europe and Asia, on the shores of the Black Sea, in the Caucasus Mountains. For centuries, it has served to connect civilizations, with the Silk Road, the world’s largest commercial artery, passing through it.</p>
                        </div>
                        <img src={mapImg} alt="Georgian Map" className='object-cover w-[650px]' />
                    </div>
                {/* </div> */}

            </div>
        </div>
    )
}

export default Home