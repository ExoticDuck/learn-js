import { defineStore } from 'pinia'
import {
  firstChapterTasks,
  fourthChapterTasks,
  secondChapterTasks,
  TaskType,
  thirdChapterTasks
} from './defaultTasks'

type TasksStore = {
  [id: number]: TaskType[]
}

export const useTasksStore = defineStore('tasks', {
  state: (): {
    tasks: TasksStore
  } => {
    return {
      tasks: {
        1: [...firstChapterTasks],
        2: [...secondChapterTasks],
        3: [...thirdChapterTasks],
        4: [...fourthChapterTasks]
      }
    }
  },

  getters: {
    getTask: state => {
      return (chapterId: number, taskId: number) =>
        state.tasks[chapterId].find(task => task.id === taskId)
    },
    getTasksIdsFromChapter: state => {
      return (chapterId: number) => state.tasks[chapterId].map(task => task.id)
    }
  }
})
