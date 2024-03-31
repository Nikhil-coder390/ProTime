'use client'

import React, { useState, useEffect } from 'react'
import { Button, Typography, Space, Progress, Modal, InputNumber } from 'antd'
import { ClockCircleOutlined, CoffeeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function PomodoroTimerPage() {
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [isBreak, setIsBreak] = useState(false)
  const [session, setSession] = useState(null)
  const [workDuration, setWorkDuration] = useState(25)

  useEffect(() => {
    if (userId) {
      Api.Pomodorosession.findManyByUserId(userId, { includes: ['user'] })
        .then(sessions => {
          if (sessions.length > 0) {
            const latestSession = sessions[sessions.length - 1]
            setSession(latestSession)
            setSecondsLeft(latestSession.duration * 60)
            setWorkDuration(latestSession.duration)
          }
        })
        .catch(error => {
          enqueueSnackbar('Failed to fetch Pomodoro sessions', { variant: 'error' })
        })
    }
  }, [userId])

  useEffect(() => {
    let interval = null
    if (isTimerRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(secondsLeft - 1)
      }, 1000)
    } else if (secondsLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false)
      setIsBreak(!isBreak)
      const breakOrWorkTime = isBreak ? workDuration * 60 : 0 // Since breakDuration is removed, setting it to 0
      setSecondsLeft(breakOrWorkTime)
      enqueueSnackbar(isBreak ? 'Break is over, back to work!' : 'Time for a break!', { variant: 'success' })
    }
    return () => clearInterval(interval)
  }, [isTimerRunning, secondsLeft, isBreak, workDuration])

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning)
    if (!isTimerRunning) {
      setSecondsLeft(workDuration * 60)
    }
  }

  const saveSession = async () => {
    if (userId) {
      const values = { duration: workDuration }
      if (session) {
        await Api.Pomodorosession.updateOne(session.id, values)
      } else {
        await Api.Pomodorosession.createOneByUserId(userId, values)
      }
      enqueueSnackbar('Session saved successfully', { variant: 'success' })
    }
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <Space direction="vertical" size="large" style={{ width: '100%', alignItems: 'center' }}>
      <Title>Pomodoro Timer</Title>
      <Text>Focus on work for a set period, then take a short break.</Text>
      <Space>
        <InputNumber min={1} defaultValue={workDuration} onChange={value => setWorkDuration(value)} />
        <Text>minutes work duration</Text>
      </Space>
      <Progress type="circle" percent={Math.round((secondsLeft / (workDuration * 60)) * 100)} format={() => formatTime(secondsLeft)} />
      <Button type="primary" icon={isTimerRunning ? <CoffeeOutlined /> : <ClockCircleOutlined />} onClick={toggleTimer}>
        {isTimerRunning ? 'Take a Break' : 'Start Working'}
      </Button>
      <Button onClick={saveSession}>Save Session</Button>
    </Space>
  )
}