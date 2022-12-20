import * as S from './style';

export function Photo({ imgFile, setImgFile }) {
  const url = imgFile;

  const handleFileDelete = () => {
    URL.revokeObjectURL(imgFile);
    setImgFile('');
  };

  return (
    <S.Photo>
      <img src={url} alt='' />
      <S.PhotoRemove type='button' onClick={handleFileDelete} />
    </S.Photo>
  );
}
