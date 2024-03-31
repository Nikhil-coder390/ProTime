'use client'

import { CalendarOutlined, CheckCircleOutlined, ClockCircleOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Api } from '@web/domain'
import { useAuthentication } from '@web/modules/authentication'
import { Avatar, Card, Col, List, Row, Typography } from 'antd'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
const { Title, Text } = Typography
// Define interfaces for the API response shapes
interface User {
  id: string
  timeblocks?: Timeblock[]
  goals?: Goal[]
  todolists?: Todolist[]
  calendardates?: Calendardate[]
}
interface Timeblock {
  id: string
  title: string
}
interface Goal {
  id: string
  title: string
}
interface Todolist {
  id: string
  title: string
}
interface Calendardate {
  id: string
  date: string
  iconUrl?: string
}

export default function DashboardPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [userData, setUserData] = useState<User | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await Api.User.findOne(userId, {
          includes: ['timeblocks', 'goals', 'todolists', 'calendardates'],
        })
        setUserData(user)
      } catch (error) {
        enqueueSnackbar('Failed to fetch user data', { variant: 'error' })
      }
    }

    if (userId) {
      fetchData()
    }
  }, [userId])

  return (
    <div>
      <Title level={2}>Welcome to Your Productivity Hub</Title>
      <Text>Here's a summary of your productivity tools.</Text>
      <Row gutter={[18, 18]} style={{ marginTop: '20px' }}>
        <Col xs={24} sm={12} md={6}>
          <Card title="Time Blocks" bordered={false} extra={<ClockCircleOutlined />} onClick={() => router.push('/time-blocks')}>
            {userData?.timeblocks?.map((block) => (
              <Card.Grid key={block.id} style={{ width: '100%' }}>
                <Text>{block.title}</Text>
              </Card.Grid>
            ))}
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card title="Goals" bordered={false} extra={<CheckCircleOutlined />} onClick={() => router.push('/goals')}>
            {userData?.goals?.map((goal) => (
              <Card.Grid key={goal.id} style={{ width: '100%' }}>
                <Text>{goal.title}</Text>
              </Card.Grid>
            ))}
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card title="To-Do Lists" bordered={false} extra={<UnorderedListOutlined />} onClick={() => router.push('/todo-list')}>
            {userData?.todolists?.map((list) => (
              <Card.Grid key={list.id} style={{ width: '100%' }}>
                <Text>{list.title}</Text>
              </Card.Grid>
            ))}
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card title="Calendar Dates" bordered={false} extra={<CalendarOutlined />} onClick={() => router.push('/calendar')}>
            <List
              dataSource={userData?.calendardates}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.iconUrl} />}
                    title={<Text>{dayjs(item.date).format('DD MMM YYYY')}</Text>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}