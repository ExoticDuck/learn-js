import { defineStore } from 'pinia'
import {
  eightChapterTasks,
  fifthChapterTasks,
  firstChapterTasks,
  fourthChapterTasks,
  nineChapterTasks,
  secondChapterTasks,
  seventhChapterTasks,
  sixthChapterTasks,
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
        4: [...fourthChapterTasks],
        5: [...fifthChapterTasks],
        6: [...sixthChapterTasks],
        7: [...seventhChapterTasks],
        8: [...eightChapterTasks],
        9: [...nineChapterTasks]
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
