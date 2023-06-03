import PlaceholderImg from 'image/placeholder.jpg';
import s from './ImageWrapper.module.css';

const ImageWrapper = ({ cls }) => {
  return (
    <div className={`${s.wrapperImg} ${cls}`}>
      <img src={PlaceholderImg} alt="" className={s.image} />
    </div>
  );
};

export default ImageWrapper;
