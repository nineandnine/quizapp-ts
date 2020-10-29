import { QuestionsState } from './utils'
import Button from './src/components/Button'
import {
  Difficulty,
  getQuizQuestions,
} from './utils'
import React, {
  useState,
  useEffect,
  Fragment,
  useRef,
} from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<
    QuestionsState[]
  >([])
  const [userAnswers, setUserAnswers] = useState(
    []
  )
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const [TOTAL_QUESTIONS] = useState(10)
  const setAnswer = useRef(null)

  const startQuiz = () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = getQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )
    console.log(newQuestions)
  }

  useEffect(() => {
    startQuiz()
  }, [])
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        position: 'relative',
        padding: 20,
        backgroundColor: '#FFF',
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 70,
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontFamily: 'OpenSansSemiBold',
              fontSize: 16,
            }}
          >
            Questions
          </Text>
          <Text
            style={{
              fontFamily: 'OpenSansSemiBold',
              fontSize: 16,
              color: '#006996',
            }}
          >
            1/10
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 33,
            paddingRight: 10,
          }}
        >
          <Text
            style={{
              color: '#006996',
              fontFamily: 'OpenSansSemiBold',
              fontSize: 16,
              marginRight: 10,
            }}
          >
            1
          </Text>
          <Text
            style={{
              color: '#006996',
              fontFamily: 'OpenSansSemiBold',
              fontSize: 16,
              marginRight: 10,
            }}
          >
            Siapa penemu bola lampu ?
          </Text>
        </View>
        <Text
          style={{
            flexDirection: 'column',
          }}
        >
          <Button />
        </Text>
        <View
          style={{
            padding: 20,
            backgroundColor: '#006996',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 300,
            width: 60,
            height: 60,
            position: 'absolute',
            bottom: 20,
            right: 20,
          }}
        ></View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
