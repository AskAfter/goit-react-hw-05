import s from './SearchBox.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import toast from 'react-hot-toast';

const SearchBox = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (value === '') {
      toast.error('Fill the search field', {
        style: {
          padding: '16px',
          color: 'white',
          background: '#1f4564',
        },
        iconTheme: {
          primary: '#802000',
          secondary: '#FFFAEE',
        },
        duration: 2000,
      });
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.inputWrapper}>
        <AiOutlineSearch className={s.icon} />
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={e => setValue(e.target.value.trim())}
          value={value}
        />
      </div>
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
