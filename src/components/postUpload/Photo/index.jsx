import * as S from './style';

export function Photo({ imgPrev, setImgPrev, setImgUrl }) {
  const url = imgPrev;

  const handleFileDelete = (e) => {
    URL.revokeObjectURL(imgPrev);
    setImgPrev('');
    setImgUrl('');
  };

  return (
    <S.Photo>
      <img src={url} alt='' />
      <S.PhotoRemove type='button' onClick={handleFileDelete} />
    </S.Photo>
  );
}
