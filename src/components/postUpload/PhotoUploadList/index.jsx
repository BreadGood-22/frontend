import { Photo } from '../Photo';
import * as S from './style';

export function PhotoUploadList({ imgSrc, setPostImg }) {
  const handleFileDelete = (idx) => {
    setPostImg((prev) => prev.filter((_, i) => idx !== i));
  };

  return (
    <S.PhotoUploadList>
      {imgSrc.map((imgSrc, i) => (
        <Photo key={i} idx={i} imgSrc={imgSrc} imgDelete={() => handleFileDelete(i)} />
      ))}
    </S.PhotoUploadList>
  );
}
