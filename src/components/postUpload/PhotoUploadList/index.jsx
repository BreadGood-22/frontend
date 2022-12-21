import { Photo } from '../Photo';
import * as S from './style';

export function PhotoUploadList({ imgFile, setImgFile, setImgUrl }) {
  return (
    <S.PhotoUploadList>
      <Photo imgFile={imgFile} setImgFile={setImgFile} setImgUrl={setImgUrl} />
    </S.PhotoUploadList>
  );
}
