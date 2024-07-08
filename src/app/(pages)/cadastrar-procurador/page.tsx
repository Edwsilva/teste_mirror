import Container from '@/app/components/Layout/Container/Container';
import styles from './page.module.css';

const CadastrarProcurador = () => {
  return (
    <Container>
      <form className={styles.contentContainer} action="">
        <h4 className={styles.title}>Cadastro de procurador</h4>
      </form>
    </Container>
  )
}

export default CadastrarProcurador;