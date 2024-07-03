'use client'
import { useEffect, useRef, useState } from 'react';
import styles from './filter.module.css';
import { TiArrowSortedDown } from "react-icons/ti";
import { FaCheck } from "react-icons/fa6";

type Props = {
  options: string[]
};

const Select = ({ options }: Props) => {
  const [selected, setSelected] = useState<string>(options[0]);

  const handleClick = (option: string) => {
    setSelected(option);
  }

  return (
    <label className={styles.selectContainer} htmlFor="checkbox">
      <div className={styles.selectedFilterContainer}>
        <p className={styles.selectedFilter}>Agrupar por {selected}</p>
        <TiArrowSortedDown />
      </div>
      <input className={styles.checkbox}
        type="checkbox"
        name="checkbox"
        id="checkbox"
      />
      <div className={styles.selectDropdown}>
        {options.map((option, i) => <p className={styles.option} key={i} onClick={handleClick.bind(this, option)}>{option === selected ? <FaCheck color={'var(--blue)'} size={10} /> : <FaCheck color={'transparent'} size={10} />}{option}</p>)}
      </div>
    </label>
  )
}

export default Select