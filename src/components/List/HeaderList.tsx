import styles from './HeaderList.module.css'

interface IHeaderList{
  taskCounter: number;
  doneTasks: number;
}
export function HeaderList({taskCounter, doneTasks}: IHeaderList) {
  return(
    <header className={styles.container}>
      <div>
        <p>Tarefas criadas</p>
        <span>{taskCounter}</span>
      </div>
      <div>
        <p>Concluídas</p>
        <span>{taskCounter === 0 ? 0 : `${doneTasks} de ${taskCounter}`}</span>
      </div>
    </header>
  )
}