import { FaStar } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";

function SearchBar({searchTerm, handleSearch, toggleProvidersComponent, handleFavorites}: {searchTerm: any, handleSearch: any, toggleProvidersComponent: any, handleFavorites: any}) {
    return (
        <div className="w-full flex">
        <input
            type="text"
            placeholder="Search games by name..."
            value={searchTerm}
            onChange={(e) => handleSearch(e)}
            className="w-full p-1 border border-gray-300 rounded mr-5"
        />
        <button onClick={toggleProvidersComponent} className="bg-blue-500 w-16 border text-white border-blue-300 rounded flex items-center justify-center  "><IoFilterOutline /></button>
        <button onClick={handleFavorites} className="bg-blue-500 w-16 border text-white border-blue-300 rounded flex items-center justify-center  "><FaStar /></button>
    </div>
    )
}

export default SearchBar