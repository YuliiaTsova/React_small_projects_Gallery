import React, { useEffect, useState } from 'react';
import './index.scss';
import { Main } from './components/Main';
import { Collection } from './components/Collection';
import axios from 'axios';
import { Nav } from './components/Nav';
import { Pagination } from './components/Pagination';
import { InputSearch } from './components/InputSearch';

function App() {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState('');
  const [categoryActiv, setCategoryActive] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const categoryParam = categoryActiv !== 0 ? `&category=${categoryActiv}` : '';
    axios
      .get(
        `https://6447e4237bb84f5a3e4c5e12.mockapi.io/collections?page=${page}&limit=3${categoryParam}`
      )
      .then((data) => {
        setCollections(data.data);
      })
      .catch((er) => {
        console.warn('Error during loading');
        console.log('Error', er);
      })
      .finally(() => setIsLoading(false));
  }, [categoryActiv, page]);

  const searchHandler = (value) => {
    setSearchFilter(value.toLocaleLowerCase());
  };

  const categoryHandler = (id) => {
    setCategoryActive(id);
  };

  return (
    <div className="App">
      <h1>My collections of photos</h1>
      <header className="top">
        <Nav onClickCategory={categoryHandler} categoryActiv={categoryActiv}></Nav>

        <InputSearch
          searchFilter={searchFilter}
          onSearch={searchHandler}
          className="search-input"
          placeholder="Search by name"
        />
      </header>
      <Main>
        {isLoading ? (
          <h2>Loading....</h2>
        ) : (
          collections
            .filter((f) => {
              if (searchFilter) {
                return f.name.toLocaleLowerCase().includes(searchFilter);
              } else {
                return true;
              }
            })
            .map((el) => (
              <Collection key={el.name} name={el.name} images={el.photos}></Collection>
            ))
        )}
      </Main>
      <Pagination onClickPage={setPage} page={page}></Pagination>
    </div>
  );
}

export default App;
