import React, { useEffect, useState } from 'react';
import { axiosPrivate } from '../../api/apiController';
import { Follow, HeaderFollowings } from '../../components';
import * as S from './style';

export function FollowingPage() {
  const [userInfo, setUserInfo] = useState([]);
  const accountname = JSON.parse(localStorage.getItem('accountname'));

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
