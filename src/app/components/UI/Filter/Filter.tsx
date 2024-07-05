"use client";
import { FilterType } from "@/app/(pages)/gerenciar-empresa/page";
import Button from "../Button/Button";
import styles from "./filter.module.css";
import Select from "./Select";

type Props = {
  handleFilterTerm: (term: string) => void;
  handleFilterType: (type: FilterType) => void;
  filterType: FilterType;
};

const OPTIONS: FilterType[] = ["empresa", "procurador", "atividade"];

const Filter = ({ handleFilterTerm, handleFilterType, filterType }: Props) => {
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
      <Select options={OPTIONS} handleType={handleFilterType} selectedOption={filterType} />
    </div>
  );
};

export default Filter;
