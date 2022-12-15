import {Outlet} from "react-router-dom";
import React from "react";
import * as S from "./style";

export function Layout() {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
}
