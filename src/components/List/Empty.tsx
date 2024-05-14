import styles from './Empty.module.css'
import Clipboard from '../../assets/clipboard.svg'

export function Empty() {
  return(
    <div className={styles.container}>
      <img src={Clipboard} alt='ícone de prancheta' />
      <p>
        <strong>Voce ainda nao tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}