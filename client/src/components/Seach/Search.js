import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { initSearchListAC, deleteSearchListAC, initResultsAC } from '../../redux/actionCreators/searchAC';

import { debounce } from '../../utils/debounce';

function Search(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { url } = useLocation();  // возвр url

  const [searchStr, setSearchStr] = useState('');
  const [resultsVisible, setResultsVisible] = useState(false);

  const results = useSelector(state => state.search.search);

  const resultsContainer = useRef();  // див в котором будут результаты
  const inputRef = useRef();

  function onClick(event) {
    if (
      resultsContainer.current?.contains(event.target) ||
      inputRef.current?.contains(event.target)
    ) {
      return;
    }
    dispatch(deleteSearchListAC());
    setSearchStr('');
    setResultsVisible(false);
}




function handleForm(event) {
  event.preventDefault();
  inputRef.current.blur();
  setSearchStr('');
  setResultsVisible(false);
  dispatch(initResultsAC());

}


useEffect(() => {
  document.body.addEventListener('click', onClick);  //при монтировании
  return () => {
    document.body.removeEventListener('click', onClick);  //при размонтировании
  };
}, []);


useEffect(() => {
    setResultsVisible(false);
    setSearchStr('');
  }, [url]);





  return (
    <div><form onSubmit={handleForm}>
            <input autoComplete="off" ref={inputRef} value={searchStr} type="text" placeholder="Поиск"
              onChange={event => searchStr(event.target.value)}
              onFocus={() => setResultsVisible(true)}
            />
            {resultsVisible && (
              <div ref={resultsContainer}>
                {results.length > 0 ? (
                  results.map(result => ( <Link key={result.id}
                  to={`products/${result.id}`}>
                  {result.name}</Link>))) : (<p>sdfghjkl;</p>)}
              </div>)}
          </form>
        </div>
  );
}

export default Search;
