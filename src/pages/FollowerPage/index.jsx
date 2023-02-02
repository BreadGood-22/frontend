import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getFollowers } from '../../api';
import { Follow, HeaderFollowers, Loading } from '../../components';
import * as S from './style';

export function FollowerPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const location = useLocation();
  const accountname = location.pathname.split('/')[2];

  const getFollwer = async () => {
    setIsLoading(true);

    const { data } = await getFollowers(accountname);

    setUserInfo(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getFollwer();
  }, []);

  return (
    <>
      <HeaderFollowers />
      {isLoading && <Loading />}
      {!isLoading && (
        <S.Container>
          {userInfo.map((userInfo) => (
            <Follow key={userInfo._id} {...userInfo} />
          ))}
        </S.Container>
      )}
    </>
  );
}
