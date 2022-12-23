import * as S from './style';

export function Photo({ imgFile, setImgFile, setImgPrev }) {
  const url = imgFile;

  const handleFileDelete = (e) => {
    URL.revokeObjectURL(imgFile);
    setImgFile('');
    setImgPrev(e.target.parentNode.remove());
  };

  return (
    <S.Photo>
      <img src={url} alt='' />
      <S.PhotoRemove type='button' onClick={handleFileDelete} />
    </S.Photo>
  );
}
