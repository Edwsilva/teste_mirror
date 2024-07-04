"use client";
import Button from "../Button/Button";
import styles from "./filter.module.css";
import Select from "./Select";

type Props = {
  handleFilterTerm: (prop: string) => void;
  handleFilterType: (prop: string) => void;
};

const OPTIONS = ["empresa", "procurador", "atividade"];

const Filter = ({ handleFilterTerm, handleFilterType }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Buscar..."
          onChange={(e) => {
            handleFilterTerm(e.target.value);
          }}
        />
        <Button type="outlined" bg="secondary">
          Buscar
        </Button>
      </div>
      <Select options={OPTIONS} />
    </div>
  );
};

export default Filter;
