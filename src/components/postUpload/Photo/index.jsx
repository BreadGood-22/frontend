import * as S from './style';

export function Photo({ imgFile, setImgFile, setImgUrl }) {
  const url = imgFile;

  const handleFileDelete = (e) => {
    URL.revokeObjectURL(imgFile);
    setImgFile('');
    setImgUrl(e.target.parentNode.remove());
  };

  return (
    <S.Photo>
      <img src={url} alt='' />
      <S.PhotoRemove type='button' onClick={handleFileDelete} />
    </S.Photo>
  );
}
