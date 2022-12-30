import React, { useEffect, useState, useRef, useCallback } from 'react';
import { axiosPrivate } from '../../api/apiController';
import { HeaderSearch, SearchCard } from '../../components';
import useDebounce from '../../hooks/useDebounce';
import * as S from './style';

export function SearchPage() {
  const searchListCont = useRef(null);
  const [height, setHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const debouncedValue = useDebounce(result, 500);

  const handleSearch = useCallback(
    (e) => {
      setResult(e.target.value);
    },
    [result],
  );

  const getSearchResult = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosPrivate.get(`/user/searchuser/?keyword=${debouncedValue}`);

      setResult(data);
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!debouncedValue.length) return;
    getSearchResult();
  }, [debouncedValue]);

  useEffect(() => {
    if (!searchListCont.current) return;
    setHeight(searchListCont.current.getBoundingClientRect().height);
  }, [result]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <HeaderSearch handleSearch={handleSearch} />
      <S.Container ref={searchListCont} height={height}>
        <SearchCard />
      </S.Container>
    </>
  );
}
