import { NavLink } from 'react-router-dom'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        border: 'none',
    }

    return (
        <header className='flex justify-center items-center'>
            <NavLink to='/' className='text-lg mr-4 py-1 px-4 border border-black rounded-md' style={({ isActive }) => isActive ? activeStyle : null}>Home</NavLink>
            <NavLink to='location' className='text-lg mr-4 py-1 px-4 border border-black rounded-md' style={({ isActive }) => isActive ? activeStyle : null}>Location</NavLink>
            <NavLink to='hotel' className='text-lg mr-4 py-1 px-4 border border-black rounded-md' style={({ isActive }) => isActive ? activeStyle : null}>Hotel</NavLink>
            <NavLink to='traditional-food' className='text-lg mr-4 py-1 px-4 border border-black rounded-md' style={({ isActive }) => isActive ? activeStyle : null}>Traditional Food</NavLink>
            <NavLink to='gid' className='text-lg mr-4 py-1 px-4 border border-black rounded-md' style={({ isActive }) => isActive ? activeStyle : null}>Tour Guide</NavLink>
        </header>
    )
}

export default Header