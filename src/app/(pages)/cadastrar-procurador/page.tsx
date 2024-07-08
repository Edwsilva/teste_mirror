'use client'
import Container from '@/app/components/Layout/Container/Container';
import Button from '@/app/components/UI/Button/Button';
import { formatCPF } from '@/app/utils/validate';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import styles from './page.module.css';

type Props = {
  CNPJs: string[];
  atividades: string[];
}

const CadastrarProcurador = () => {
  const [selectValue, setSelectValue] = useState("");
  const [dateDe, setDateDe] = useState<string | undefined>();
  const [dateAte, setDateAte] = useState<string | undefined>();
  const [cpf, setCPF] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [atividade, setAtividade] = useState<string | undefined>();
  const router = useRouter();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  }

  const handleCPFChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCPF(formatCPF(e.target.value));
  }

  const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  }

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAtividade(e.target.value);
  }

  const closeForm = () => {
    router.back();
  }

  return (
    <Container>
      <form className={styles.contentContainer} action="">
        <h4 className={styles.title}>Cadastro de procurador</h4>
        <div className={styles.inputsContainer}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="cnpj">CNPJ</label>
            <select className={styles.select} value={selectValue} onChange={handleSelectChange} name="cnpj" id="cnpj" required>
              <option value="" disabled>Selecione</option>
              {/*Map de CNPJs*/}
              <option value="12.345.678/0001-90">12.345.678/0001-90</option>
              <option value="98.765.432/0001-10">98.765.432/0001-10</option>
              <option value="11.222.333/0001-44">11.222.333/0001-44</option>
            </select>
          </div>
          <div className={styles.inputContainerButton}>
            <div className={styles.inputContainer}>
              <label className={styles.label} htmlFor="cpf">CPF do procurador</label>
              <input className={styles.input} type="text" value={cpf} placeholder='000.000.000-00' maxLength={14} onChange={handleCPFChange} />
            </div>
            <Button type='outlined' bg='secondary'>buscar</Button>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="nome">Nome do procurador</label>
          <input className={`${styles.input} ${styles.inputText}`} value={nome} type="text" placeholder='Nome do procurador...' onChange={handleNomeChange} />
        </div>
        <div className={styles.inputsDateContainer}>
          <label htmlFor="">Período de vigência</label>
          <div>
            <div className={styles.inputDateContainer}>
              <label htmlFor="de">De</label>
              <input className={`${styles.input} ${styles.inputDate} ${dateDe && styles.inputDateSelected}`} type="date" name="de" id="de" value={dateDe} onChange={(e) => setDateDe(e.target.value)} />
            </div>
            <div className={styles.inputDateContainer}>
              <label htmlFor="ate">Até</label>
              <input className={`${styles.input} ${styles.inputDate} ${dateAte && styles.inputDateSelected}`} type="date" name="ate" id="ate" value={dateAte} onChange={(e) => setDateAte(e.target.value)} />
            </div>
          </div>
        </div>
        <div className={styles.radioContainer}>
          <h5 className={styles.label}>Atividade da procuração</h5>
          {/*Map de atividades*/}
          <div>
            <input type="radio" name="atividade" id="alvara" value="Alvará transitório de eventos" checked={atividade === "Alvará transitório de eventos"} onChange={handleRadioChange} />
            <label className={`${styles.inputRadio} ${atividade === "Alvará transitório de eventos" && styles.inputRadioSelected}`} htmlFor="alvara">Alvará transitório de eventos</label>
          </div>
          <div>
            <input type="radio" name="atividade" id="acesso" value="Acesso do tesouro municipal" checked={atividade === "Acesso do tesouro municipal"} onChange={handleRadioChange} />
            <label className={`${styles.inputRadio} ${atividade === "Acesso do tesouro municipal" && styles.inputRadioSelected}`} htmlFor="acesso">Acesso do tesouro municipal</label>
          </div>
          <div>
            <input type="radio" name="atividade" id="licenciamento" value="Licenciamento da vigilância sanitária" checked={atividade === "Licenciamento da vigilância sanitária"} onChange={handleRadioChange} />
            <label className={`${styles.inputRadio} ${atividade === "Licenciamento da vigilância sanitária" && styles.inputRadioSelected}`} htmlFor="licenciamento">Licenciamento da vigilância sanitária</label>
          </div>
          <div>
            <input type="radio" name="atividade" id="multas" value="Multas de trânsito" checked={atividade === "Multas de trânsito"} onChange={handleRadioChange} />
            <label className={`${styles.inputRadio} ${atividade === "Multas de trânsito" && styles.inputRadioSelected}`} htmlFor="multas">Multas de trânsito</label>
          </div>
          <div>
            <input type="radio" name="atividade" id="rio" value="Rio mais fácil negócios" checked={atividade === "Rio mais fácil negócios"} onChange={handleRadioChange} />
            <label className={`${styles.inputRadio} ${atividade === "Rio mais fácil negócios" && styles.inputRadioSelected}`} htmlFor="rio">Rio mais fácil negócios</label>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <Button bg='secondary'>confirmar</Button>
          <Button type='no-outlined' bg='error' props={{ onClick: closeForm }}>cancelar</Button>
        </div>
      </form>
    </Container>
  )
}

export default CadastrarProcurador;