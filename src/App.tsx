import { useState } from 'react'
import styles from './App.module.css'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Empty } from './components/List/Empty'
import { HeaderList } from './components/List/HeaderList'
import { Item } from './components/List/Item'
import { PlusCircle } from '@phosphor-icons/react'
import _ from 'lodash'

export interface ITask{
  id: string;
  content: string;
  isChecked: boolean
}
function App() {

  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: '1',
      content: 'Fazer exercício',
      isChecked: false
    },
    {
      id: '2',
      content: 'Estudar React',
      isChecked: true
    }
  ])

  const tasksDone = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.isChecked){
      return prevValue + 1
    }
    return prevValue
  }, 0)

  function handleAddTask(){
    if(!inputValue) return

    const newTask = {
      id: _.uniqueId('task-'),
      content: inputValue,
      isChecked: false
    }
    setTasks(state => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: string){
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleTaskDone({id, value}: {id: string, value: boolean}){
    const updatedTasks = tasks.map((task) => {
      if(task.id === id){
        return {...task, isChecked: value}
      }
      return {...task}
    })

    updatedTasks.sort((a, b) =>
      Number(a.isChecked) - Number(b.isChecked)
    );

    setTasks(updatedTasks)
  }

  return (
    <>
      <Header />

      <section className={styles.content}>
        <div className={styles.inputContainer}>
          <Input value={inputValue} onChange={e => setInputValue(e.target.value)}/>
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color='#F2F2F2' weight='bold' />
          </Button>
        </div>
        <div className={styles.listContainer}>
          <HeaderList taskCounter={tasks.length} doneTasks={tasksDone}/>
          {
            tasks.length > 0 ? (
              tasks.map(task => (
                <Item 
                 key={task.id} 
                 item={task} 
                 removeTask={handleRemoveTask} 
                 handleIsDone={handleTaskDone} 
                />
              ))
            ) : (
              <Empty />
            )
          }
        </div>
      </section>
    </>
  )
}

export default App
