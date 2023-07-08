import "../nav/nav.css"
import SearchBar from "../searchbar/SearchBar";


function Nav({onSearch}) {
  return(
    <div className="containerNav">
    <SearchBar onSearch = {onSearch}/>
    

    </div>

  )
};

export default Nav