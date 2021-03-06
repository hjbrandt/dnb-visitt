/*
 * Created by Thomas Hartmann
 * Wrapper component to map state to Filter
 */
import Filter from './Filter'
import { connect } from 'react-redux'
import { addCounty, removeCounty, setMaxPrice, setMinPrice, setMaxSize, setMinSize, addBedroomOption, removeBedroomOption, clearFilter } from '../../../../redux/reducers/filter/filterActions'
import { toggleFilter } from '../../../../redux/reducers/filterUi/filterUiActions'
import { fetchResults } from '../../../../redux/reducers/searchResults/resultsActions'
import fields, { allBedroomValues } from './inputFields'
import counties from '../../../../redux/counties'

const mapStateToProps = state => ({
  showAll: state.showAllCounties,
  initialCounties: counties.slice(0, 4),
  hiddenCounties: counties.slice(4),
  allBedroomValues: allBedroomValues,
  selectedBedroomValues: state.filter.numberOfBedrooms,
  selectedCounties: state.filter.counties,
  minPrice: state.filter.minPrice,
  maxPrice: state.filter.maxPrice,
  minSize: state.filter.minSize,
  maxSize: state.filter.maxSize,
  filter: state.filter
})

const mapDispatchToProps = dispatch => ({
  handleToggle (show) {
    dispatch(toggleFilter(show))
  },
  handleChange (field, value) {
    switch (field) {
      case fields.ADD_COUNTY:
        dispatch(addCounty(value))
        break
      case fields.REMOVE_COUNTY:
        dispatch(removeCounty(value))
        break
      case fields.SET_MIN_PRICE:
        dispatch(setMinPrice(value))
        break
      case fields.SET_MAX_PRICE:
        dispatch(setMaxPrice(value))
        break
      case fields.SET_MIN_SIZE:
        dispatch(setMinSize(value))
        break
      case fields.SET_MAX_SIZE:
        dispatch(setMaxSize(value))
        break
      case fields.ADD_BEDROOM_OPTION:
        dispatch(addBedroomOption(value))
        break
      case fields.REMOVE_BEDROOM_OPTION:
        dispatch(removeBedroomOption(value))
        break
      default:
        break
    }
  },
  performSearch (filter) {
    dispatch(fetchResults(filter))
  },
  handleReset () {
    dispatch(clearFilter())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
