'use client'

import { PlusCircleOutlined } from '@ant-design/icons'
import { Api } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import { useAuthentication } from '@web/modules/authentication'
import { Button, Form, Input, Modal, Select, TimePicker, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
const { Title, Paragraph } = Typography
const { Option } = Select

export default function CreateTimeBlockPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [categories, setCategories] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [categoryForm] = Form.useForm()
  const [form] = Form.useForm()

  React.useEffect(() => {
    if (userId) {
      Api.Category.findManyByUserId(userId).then(setCategories)
    }
  }, [userId])

  const onFinish = async (values) => {
    try {
      await Api.Timeblock.createOneByUserId(userId, {
        ...values,
        startTime: values.timeRange[0].format(),
        endTime: values.timeRange[1].format(),
        categoryId: values.categoryId,
      })
      enqueueSnackbar('Time block created successfully', { variant: 'success' })
      router.push('/time-blocks')
    } catch (error) {
      enqueueSnackbar('Failed to create time block', { variant: 'error' })
    }
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onCategoryFormFinish = async (values) => {
    try {
      const newCategory = await Api.Category.createOneByUserId(userId, { name: values.categoryName })
      setCategories(prevCategories => [...prevCategories, newCategory])
      enqueueSnackbar('Category created successfully', { variant: 'success' })
      setIsModalVisible(false)
    } catch (error) {
      enqueueSnackbar('Failed to create category', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title>Create a New Time Block</Title>
      <Paragraph>
        Use this form to create a new time block for your tasks or goals. This helps in enhancing your productivity and time management.
      </Paragraph>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title!' }]}>
          <Input placeholder="Enter title" />
        </Form.Item>
        <Form.Item name="timeRange" label="Time Range" rules={[{ required: true, message: 'Please select the time range!' }]}>
          <TimePicker.RangePicker use12Hours format="h:mm a" />
        </Form.Item>
        <Form.Item name="categoryId" label="Category" rules={[{ required: true, message: 'Please select a category!' }]}>
          <Select placeholder="Select a category">
            {categories?.map((category) => (
              <Option key={category.id} value={category.id}>{category.name}</Option>
            ))}
          </Select>
          <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />} style={{ marginLeft: '10px', marginTop: '10px' }}>
            Add Category
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<PlusCircleOutlined />}>
            Create Time Block
          </Button>
        </Form.Item>
      </Form>
      <Modal title="Create New Category" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form form={categoryForm} layout="vertical" onFinish={onCategoryFormFinish}>
          <Form.Item
            name="categoryName"
            label="Category Name"
            rules={[{ required: true, message: 'Please input the category name!' }]}
          >
            <Input placeholder="Enter category name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Category
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}