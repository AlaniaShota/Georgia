import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import iconImg from '../assets/icon/pngwing.com.png'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='shadow-md sticky top-0 px-6 py-3 flex z-50 bg-blueBackground'>
            <header className='flex lg:items-center lg:justify-between lg:flex-row sm:flex-col w-full  text-xl  text-whiteText'>
                <div className='flex flex-row justify-between items-center'>
                    <Link to='/' className='flex items-center'>
                        <img src={iconImg} alt='Georgia Flag' className='w-10 object-cover' />
                        <span className='ml-2 '>GEORGIA</span>
                    </Link>
                    <button onClick={() => setOpen(!open)} className='lg:hidden cursor-pointer'>
                        {open ? <FontAwesomeIcon icon={faXmark} size='lg' /> : <FontAwesomeIcon icon={faBars} size='lg' />}
                    </button>
                </div>
                <div className={`flex sm:flex-col lg:flex-row sm:static sm:items-start sm:w-auto transition delay-150 duration-300 ease-in-out ${open ? 'sm:opacity-100' : 'sm:hidden lg:inline'} `}>
                    <Link to='/' className='mr-4 py-1 lg:px-4 sm:px-14' >Home</Link>
                    <Link to='location' className=' mr-4 py-1 lg:px-4 sm:px-14'>Location</Link>
                    <Link to='hotel' className=' mr-4 py-1 lg:px-4 sm:px-14'>Hotel</Link>
                    <Link to='traditional-food' className=' mr-4 py-1 lg:px-4 sm:px-14'>Traditional Food</Link>
                    <Link to='gid' className=' mr-4 py-1 lg:px-4 sm:px-14'>Tour Guide</Link>
                </div>
            </header>
        </div>
    )
}

export default Header