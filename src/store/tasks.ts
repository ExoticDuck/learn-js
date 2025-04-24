import { defineStore } from 'pinia'
import {
  firstChapterTasks,
  fourthChapterTasks,
  secondChapterTasks,
  TaskType,
  thirdChapterTasks
} from './defaultTasks'

type TasksStore = {
  [id: string]: TaskType[]
}

export const useTasksStore = defineStore('tasks', {
  state: (): {
    tasks: TasksStore
    chapterId: string
    taskId: string
  } => {
    return {
      tasks: {
        1: [...firstChapterTasks],
        2: [...secondChapterTasks],
        3: [...thirdChapterTasks],
        4: [...fourthChapterTasks]
      },
      taskId: '1',
      chapterId: '1'
    }
  },

  getters: {
    getTask: state => {
      return (chapterId: string, taskId: string) =>
        state.tasks[chapterId].find(task => task.id === taskId)
    },
    getTasksIdsFromChapter: state => {
      return (chapterId: string) => state.tasks[chapterId].map(task => task.id)
    },
    getSelectedTaskId: state => state.taskId,
    getSelectedChapterId: state => state.chapterId
  },
  actions: {
    setChapterId(id: string) {
      this.chapterId = id
    },
    setTaskId(id: string) {
      this.taskId = id
    }
  }
})
