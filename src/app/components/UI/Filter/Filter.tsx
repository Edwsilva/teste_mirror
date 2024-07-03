import Button from '../Button/Button';
import styles from './filter.module.css';
import Select from './Select';

const OPTIONS = [
  "empresa",
  "procurador",
  "atividade"
]

const Filter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" placeholder='Buscar...' />
        <Button type='outlined' bg='secondary'>Buscar</Button>
      </div>
      <Select options={OPTIONS} />
    </div>
  )
}

export default Filter