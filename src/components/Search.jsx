
const {useState} = React;
var Search = ({onSearch, currentQuery, handleInputChange}) => {
  const [query, setQuery] = React.useState(currentQuery);


  const handleSearch = function() {
    console.log(currentQuery);
    onSearch(currentQuery);
  };
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value={currentQuery} onChange={handleInputChange} />
      <button className="btn hidden-sm-down" onClick={handleSearch}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
