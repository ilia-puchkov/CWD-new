import { ReactElement } from 'react'
import QuestionsPopupForm from './QuestionsPopupForm'
import formTitle from './formTitle'

const questionsToView = new Map<number, ReactElement>([
  [0, formTitle()],
  [
    1,
    QuestionsPopupForm({
      questionNumber: 1,
      questionText: '1. По какому поводу мероприятие?',
      value: 1,
    }),
  ],
  [
    2,
    QuestionsPopupForm({
      questionNumber: 2,
      questionText: '2. Желаемая дата и время мероприятия',
      value: 2,
    }),
  ],
  [
    3,
    QuestionsPopupForm({
      questionNumber: 3,
      questionText: '3. Бюджетные рамки',
      value: 3,
    }),
  ],
  [
    4,
    QuestionsPopupForm({
      questionNumber: 4,
      questionText: '4. Какую атмосферу праздника вы бы хотели создать?',
      value: 4,
    }),
  ],
  [
    5,
    QuestionsPopupForm({
      questionNumber: 5,
      questionText:
        '5. Увлечения/хобби и то, что очень любит человек, для которого устраиваем мероприятие',
      value: 5,
    }),
  ],
  [
    6,
    QuestionsPopupForm({
      questionNumber: 6,
      questionText:
        '6. Что-то важное, что по вашему мнению нам нужно знать (аллергия, фобии, физические ограничения...)',
      value: 6,
    }),
  ],
])

export default questionsToView
