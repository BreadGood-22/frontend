import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { axiosPrivate } from '../../api/apiController';
import { Follow, HeaderFollowers } from '../../components';
import * as S from './style';

export function FollowerPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const location = useLocation();
  const accountname = location.pathname.split('/')[2];

  const getFollwer = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosPrivate.get(`/profile/${accountname}/follower/?limit=0`);

      setUserInfo(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFollwer();
  }, []);

  return (
    <>
      <HeaderFollowers />
      <S.Container>
        {userInfo.map((userInfo) => (
          <Follow key={userInfo._id} {...userInfo} />
        ))}
      </S.Container>
    </>
  );
}
