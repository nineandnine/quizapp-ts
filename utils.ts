export const _ = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.7)

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}
export type Questions = {
  category: string
  correct_answer: string
  difficult: string
  incorrect_answer: string[]
  question: string
  type: string
}

export type QuestionsState = Questions & {
  answer: string[]
}
export const getQuizQuestions = async (
  amount: number,
  dificulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&dificulty=${dificulty}`
  const data = await (
    await fetch(endpoint)
  ).json()
  return data.results.map(
    (question: Questions) => ({
      ...question,
      answers: _([
        question.incorrect_answer,
        question.correct_answer,
      ]),
    })
  )
}
