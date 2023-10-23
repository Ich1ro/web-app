import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FiSearch, FiArrowLeft } from 'react-icons/fi'
import FiltersCarousel from '../components/FiltersCarousel/FiltersCarousel'
import Results from '../components/Results/Results'

const SearchResults = () => {
  return (
    <div className='search_results'>
        <div className="search_results_title">
            <FiArrowLeft size={20} color='#0C6BEE'/>
            <p>Search results</p>
            <div></div>
        </div>
        <div className="search_label_container">
          <label className="search_label">
            <FiSearch size={22} className="location_icon" />
            <input type="text" value="Photographer" />
            <AiFillCloseCircle size={22} />
          </label>
        </div>
        <FiltersCarousel />
        <Results />
    </div>
  )
}

export default SearchResults