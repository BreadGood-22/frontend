import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { axiosPrivate } from '../../api/apiController';
import { Follow, HeaderFollowings } from '../../components';
import * as S from './style';

export function FollowingPage() {
  const [userInfo, setUserInfo] = useState([]);
  const location = useLocation();
  const accountname = location.pathname.split('/')[2];

  useEffect(() => {
    const getFollwing = async () => {
      const { data } = await axiosPrivate.get(`/profile/${accountname}/following`);

      setUserInfo(data);
    };

    getFollwing();
  }, []);

  return (
    <>
      <HeaderFollowings />
      <S.Container>
        {userInfo.map((userInfo) => (
          <Follow key={userInfo._id} {...userInfo} />
        ))}
      </S.Container>
    </>
  );
}
