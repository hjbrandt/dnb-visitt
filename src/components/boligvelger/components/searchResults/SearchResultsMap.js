/*
 * Created by Thomas Hartmann
 * Wrapping component to map state to results view
 */
import React from 'react'
import { connect } from 'react-redux'
import SearchResults from './SearchResults'
import _ from 'lodash'
import NoResults from './components/noResults/NoResults'
import Loading from './components/loading/Loading'
import ResultItem from './components/resultItem/ResultItem.map'

const mapResults = (results) => (
  <div>
    {results.map((result, key) => <ResultItem {...result} key={key} />)}
  </div>
)

const processedResults = (fetching, results) => (
  fetching ? <Loading />
    : _.isEmpty(results)
      ? <NoResults />
      : mapResults(results)
)

const mapStateToProps = state => ({
  results: processedResults(state.searchResults.fetchingResults,
    state.searchResults.results)
})

export default connect(mapStateToProps)(SearchResults)
