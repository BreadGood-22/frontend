import * as S from './style';

export function Photo({ imgSrc, imgDelete }) {
  const url = imgSrc;

  return (
    <S.Photo>
      <img src={url} alt='' />
      <S.PhotoRemove type='button' onClick={imgDelete} />
    </S.Photo>
  );
}
