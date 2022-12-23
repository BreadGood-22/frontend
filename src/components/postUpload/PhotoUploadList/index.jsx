import { Photo } from '../Photo';
import * as S from './style';

export function PhotoUploadList({ imgFile, setImgFile, setImgPrev }) {
  return (
    <S.PhotoUploadList>
      <Photo imgFile={imgFile} setImgFile={setImgFile} setImgPrev={setImgPrev} />
    </S.PhotoUploadList>
  );
}
