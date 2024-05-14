import { ITask } from '../../App'
import styles from './Item.module.css'
import { Check, Trash } from '@phosphor-icons/react'

interface IItem{
  item: ITask;
  removeTask: (id: string) => void;
  handleIsDone: ({id, value}: {id: string, value: boolean}) => void;
}

export function Item({item, removeTask, handleIsDone}: IItem) {

  function handleIsDoneItem(){
    handleIsDone({id: item.id, value: !item.isChecked})
  }

  function handleRemove() {
    removeTask(item.id)
  }

  const checkboxCheckedClassname = item.isChecked
   ? styles['checkbox-checked']
   : styles['checkbox-unchecked']

   const paragraphCheckedClassname = item.isChecked
    ? styles['paragraph-checked']
    : styles['paragraph-unchecked']
  return(
   <div className={styles.container}>
    <div>
      <label htmlFor="checkbox" onClick={handleIsDoneItem}>
        <input type="checkbox" readOnly checked={item.isChecked} />
        <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
          {item.isChecked && <Check size={12} />}
        </span>

        <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>{item.content}</p>
      </label>
    </div>
    <button onClick={handleRemove}>
      <Trash />
    </button>
   </div> 
  )
}