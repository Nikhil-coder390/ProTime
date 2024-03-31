'use client'

import { useEffect, useState } from 'react'
import { Typography, Card, Progress, Button, Modal, Input, Form } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function GoalProgressPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [goals, setGoals] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const goalsFound = await Api.Goal.findManyByUserId(userId, { includes: ['progresstrackers'] })
        setGoals(goalsFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch goals', { variant: 'error' })
      }
    }

    if (userId) {
      fetchGoals()
    }
  }, [userId])

  const handleCreateProgress = async (values) => {
    try {
      await Api.Progresstracker.createOneByGoalId(values.goalId, { progressPercentage: values.progressPercentage })
      enqueueSnackbar('Progress updated successfully', { variant: 'success' })
      setIsModalVisible(false)
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to update progress', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Goal Progress Tracker</Title>
      <Text>Track and view the progress of your specific goals.</Text>
      {goals?.map(goal => (
        <Card key={goal.id} title={goal.title} extra={<Button type="primary" onClick={() => setIsModalVisible(true)}>Update Progress</Button>} style={{ marginTop: 16 }}>
          <Text>{goal.description}</Text>
          <Progress percent={goal.progresstrackers?.[0]?.progressPercentage} status="active" style={{ marginTop: 16 }} />
          <Text type="secondary">Last Updated: {dayjs(goal.dateUpdated).format('DD/MM/YYYY')}</Text>
        </Card>
      ))}
      <Modal title="Update Goal Progress" visible={isModalVisible} onCancel={() => setIsModalVisible(false)} footer={null}>
        <Form form={form} onFinish={handleCreateProgress} layout="vertical">
          <Form.Item name="goalId" hidden initialValue={params.id}>
            <Input />
          </Form.Item>
          <Form.Item name="progressPercentage" label="Progress Percentage" rules={[{ required: true, message: 'Please input the progress percentage!' }]}>
            <Input type="number" addonAfter="%" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              <PlusOutlined /> Update Progress
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}