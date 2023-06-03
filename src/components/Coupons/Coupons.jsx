import ImageWrapper from 'components/ImageWrapper';
import s from './Coupons.module.css';

const coupons = [
  { id: 1, title: 'Coupons Name', code: 'agg45ggdgjghh56v' },
  { id: 2, title: 'Coupons Name', code: '740bkopfdkbdkgld' },
  { id: 3, title: 'Coupons Name', code: 'fsfsks949858598v' },
  { id: 4, title: 'Coupons Name', code: 'sf44555dgjghh56v' },
  { id: 5, title: 'Coupons Name', code: '664g45ggdy5hh56v' },
];

const Coupons = () => {
  return (
    <div>
      {coupons.length === 0 && <p>Don't have actual coupons</p>}
      {coupons.length > 0 && (
        <ul className={s.list}>
          {coupons.map(({ id, code }) => (
            <li key={id} className={s.itemList}>
              <ImageWrapper cls={s.wrapperImg} />
              <div className={s.wrapperDescr}>
                <p className={s.itemName}>Coupons Name</p>
                <button type="button" className={s.btn}>
                  Copy
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Coupons;
