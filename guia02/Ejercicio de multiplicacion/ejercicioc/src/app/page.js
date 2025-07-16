"use client";
import { useState } from "react"; import styles from "./page.module.css";

export default function Home() { const [numero1, setNumero1] = useState(''); const [numero2, setNumero2]
= useState(''); const [resultado, setResultado] = useState(null);

const sumar = () => {
 const resultadoSuma = parseFloat(numero1) + parseFloat(numero2); setResultado(`Resultado de la suma:
${resultadoSuma}`);
};
const restar = () => {
 const resultadoResta = parseFloat(numero1) - parseFloat(numero2); setResultado(`Resultado de la resta:
${resultadoResta}`);
};
const Multiplicar = () => {
 const resultadomultiplicacion = parseFloat(numero1) * parseFloat(numero2); setResultado(`Resultado de la multiplicacion:
${resultadomultiplicacion}`);
};
const Division = () => {
 const resultadoDivison = parseFloat(numero1) / parseFloat(numero2); setResultado(`Resultado de la Division:
${resultadoDivison}`);
};
const potenciacion = () => {
 const resultadopotenciacion = parseFloat(numero1) **  parseFloat(numero2); setResultado(`Resultado de la Division:
${resultadopotenciacion}`);
};
const Raizcuadrada = () => {

  if (isNaN(numero1)) {
    setResultado("Error: Ingresa un número válido.");
    return;
  }
   if (numero1 < 0) {
    setResultado("Error: No se puede calcular la raíz cuadrada de un número negativo Ponga un Numero Valido");
    return;
  }
 const resultadoraizcuadrada = Math.sqrt(numero1);
  setResultado(` El Resultado de la Raiz Cuadrada es :
${resultadoraizcuadrada}`);
};
 return ( <main className={styles.main}>
 <div className={styles.calculadora}>
 <div className={styles.numeros}>
 <label className={styles.text}>Número 1:</label> <input className={styles.inputnum}
type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
 </div>
 <div className={styles.numeros}>
 <label className={styles.text} >Número 2:</label> <input
className={styles.inputnum} type="number" value={numero2} onChange={(e) =>
setNumero2(e.target.value)} />
 </div>
 <div> <button className={styles.button} onClick={sumar}>Sumar</button>
 <br></br><button className={styles.button} onClick={restar}>Restar</button>
 
  <button className={styles.button} onClick={Multiplicar}>Multiplicacion</button>
  <button className={styles.button} onClick={Division}>Division</button>
  <button className={styles.button} onClick={potenciacion}>Potenciacion</button>
   <button className={styles.button} onClick={Raizcuadrada}>Raiz Cuadrada</button>
 
 </div>
 {resultado && <div
className={styles.resultado}>{resultado}</div>}
 </div>
 </main>
);
}