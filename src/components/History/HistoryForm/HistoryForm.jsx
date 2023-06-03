import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './HistoryForm.module.css';

const HistoryForm = props => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <form className={s.historyForm}>
      <div className={s.wrapperData}>
        <div>
          <label htmlFor="history-form-email">Email:</label>
          <input
            type="email"
            name="email"
            id="history-form-email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="history-form-phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="history-form-phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className={s.btn}>
        Show history
      </button>
    </form>
  );
};

HistoryForm.propTypes = {};

export default HistoryForm;
