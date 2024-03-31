'use client'

import { useEffect, useState } from 'react'
import { Button, Form, Input, Select, Typography } from 'antd'
import { LoadingOutlined, SaveOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EditTimeBlockPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [timeblock, setTimeblock] = useState<Model.Timeblock | null>(null)
  const [categories, setCategories] = useState<Model.Category[]>([])
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchTimeblock = async () => {
      setLoading(true)
      try {
        const fetchedTimeblock = await Api.Timeblock.findOne(params.id, { includes: ['category'] })
        setTimeblock(fetchedTimeblock)
        form.setFieldsValue({
          title: fetchedTimeblock.title,
          startTime: dayjs(fetchedTimeblock.startTime).format('YYYY-MM-DDTHH:mm'),
          endTime: dayjs(fetchedTimeblock.endTime).format('YYYY-MM-DDTHH:mm'),
          categoryId: fetchedTimeblock.categoryId,
        })
      } catch (error) {
        enqueueSnackbar('Failed to fetch timeblock details', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    const fetchUserAndCategories = async () => {
      try {
        const userId = authentication.user?.id
        if (!userId) throw new Error('User ID is undefined')
        const userWithCategories = await Api.User.findOne(userId, { includes: ['categorys'] })
        setCategories(userWithCategories.categorys || [])
      } catch (error) {
        enqueueSnackbar('Failed to fetch categories', { variant: 'error' })
      }
    }

    fetchTimeblock()
    fetchUserAndCategories()
  }, [params.id, authentication.user?.id, form])

  const handleSave = async (values: any) => {
    setLoading(true)
    try {
      await Api.Timeblock.updateOne(params.id, {
        title: values.title,
        startTime: values.startTime,
        endTime: values.endTime,
        categoryId: values.categoryId,
        userId: authentication.user?.id,
      })
      enqueueSnackbar('Timeblock updated successfully', { variant: 'success' })
      router.push('/time-blocks')
    } catch (error) {
      enqueueSnackbar('Failed to update timeblock', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Edit Time Block</Title>
      <Text>Edit the details of your time block.</Text>
      {loading ? (
        <LoadingOutlined style={{ fontSize: 24 }} spin />
      ) : (
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input the title!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Start Time" name="startTime" rules={[{ required: true, message: 'Please input the start time!' }]}>
            <Input type="datetime-local" />
          </Form.Item>
          <Form.Item label="End Time" name="endTime" rules={[{ required: true, message: 'Please input the end time!' }]}>
            <Input type="datetime-local" />
          </Form.Item>
          <Form.Item label="Category" name="categoryId" rules={[{ required: true, message: 'Please select a category!' }]}>
            <Select placeholder="Select a category">
              {categories?.map(category => (
                <Option key={category.id} value={category.id}>
                  {category.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />} loading={loading}>
              Save
            </Button>
          </Form.Item>
        </Form>
      )}
    </PageLayout>
  )
}