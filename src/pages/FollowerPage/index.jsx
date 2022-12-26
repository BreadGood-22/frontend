import React, { useEffect, useState } from 'react';
import { axiosPrivate } from '../../api/apiController';
import { Follow, HeaderFollowers } from '../../components';
import * as S from './style';

export function FollowerPage() {
  const [userInfo, setUserInfo] = useState([]);
  const accountname = JSON.parse(localStorage.getItem('accountname'));

  useEffect(() => {
    const getFollwer = async () => {
      const { data } = await axiosPrivate.get(`/profile/${accountname}/follower`);

      setUserInfo(data);
    };

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
