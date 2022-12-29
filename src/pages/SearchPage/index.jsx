import React, { useEffect, useState, useRef } from 'react';
import { HeaderSearch, SearchCard } from '../../components';
import * as S from './style';

export function SearchPage() {
  const [result, setResult] = useState([]);
  const searchListCont = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!searchListCont.current) return;
    setHeight(searchListCont.current.getBoundingClientRect().height);
  }, [result]);

  return (
    <>
      <HeaderSearch />
      <S.Container ref={searchListCont} height={height}>
        <SearchCard />
      </S.Container>
    </>
  );
}
