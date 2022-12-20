import { Photo } from '../Photo';
import * as S from './style';

export function PhotoUploadList({ imgFile, setImgFile }) {
  return (
    <S.PhotoUploadList>
      <Photo imgFile={imgFile} setImgFile={setImgFile} />
    </S.PhotoUploadList>
  );
}
