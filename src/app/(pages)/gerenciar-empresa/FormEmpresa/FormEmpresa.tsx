"use client";
import { ChangeEvent, useState } from "react";
import styles from "./form.module.css";
import Button from "@/app/components/UI/button/Button";
import { formatCNPJ, validateCNPJ } from "@/utils/validate";

const FormEmpresa = () => {
  const [textField, setTextField] = useState("");

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCNPJ(e.target.value);
    setTextField(formattedValue);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validated = validateCNPJ(textField);

    console.log("Form Submitted");
    console.log(`Textfield - ${textField}`);
    console.log(`validateCNPJ - ${validated}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.textField}>
        <label htmlFor="" className={styles.label}>
          CNPJ:
        </label>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="00.000.000/0000-00"
            maxLength={18}
            value={textField}
            onChange={inputChangeHandler}
          />
          <Button bg="secondary" type="filled">
            Incluir Minha Empresa
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormEmpresa;
