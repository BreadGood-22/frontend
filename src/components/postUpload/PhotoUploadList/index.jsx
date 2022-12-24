import { Photo } from '../Photo';
import * as S from './style';

export function PhotoUploadList({ imgPrev, setImgPrev, setImgUrl }) {
  return (
    <S.PhotoUploadList>
      <Photo imgPrev={imgPrev} setImgPrev={setImgPrev} setImgUrl={setImgUrl} />
    </S.PhotoUploadList>
  );
}
