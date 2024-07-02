import Button from '../Button/Button';
import styles from './filter.module.css';

const Filter = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder='Pesquisar...' />
      <Button type='outlined' bg='secondary'>Buscar</Button>
    </div>
  )
}

export default Filter