import React, { useEffect, useState, useRef, useCallback } from 'react';
import { getSearchResult } from '../../api';
import { HeaderSearch, SearchCard } from '../../components';
import useDebounce from '../../hooks/useDebounce';
import * as S from './style';

export function SearchPage() {
  const searchListCont = useRef(null);
  const [height, setHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [searchResult, setSearchResult] = useState([]);
  const [keyword, setKeyword] = useState('');
  const debouncedValue = useDebounce(keyword, 500);

  const handleSearch = useCallback(
    (e) => {
      setKeyword(e.target.value);
    },
    [keyword],
  );

  useEffect(() => {
    if (!debouncedValue.length) return;
    (async () => {
      setIsLoading(true);

      const data = await getSearchResult(debouncedValue);

      setSearchResult(data);
      setIsLoading(false);
    })();
  }, [debouncedValue]);

  useEffect(() => {
    if (!searchListCont.current) return;
    setHeight(searchListCont.current.getBoundingClientRect().height);
  }, [searchResult]);

  return (
    <>
      <HeaderSearch handleSearch={handleSearch} keyword={keyword} />
      {isLoading ? (
        <p>로딩중...</p>
      ) : (
        <S.Container ref={searchListCont} height={height}>
          {searchResult.map((info) => (
            <SearchCard key={info._id} info={info} />
          ))}
        </S.Container>
      )}
    </>
  );
}
