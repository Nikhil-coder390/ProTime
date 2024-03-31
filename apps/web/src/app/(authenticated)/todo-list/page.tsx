'use client'

import React, { useEffect, useState } from 'react'
import { Button, Input, List, Typography, Checkbox, Row, Col, Modal } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ToDoListPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [todolists, setTodolists] = useState<Model.Todolist[]>([])
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentTodo, setCurrentTodo] = useState<Model.Todolist | null>(null)
  const [currentTodoTitle, setCurrentTodoTitle] = useState('')

  useEffect(() => {
    if (userId) {
      fetchTodolists()
    }
  }, [userId])

  const fetchTodolists = async () => {
    try {
      const todolistsFound = await Api.Todolist.findManyByUserId(userId!, { includes: ['todoitemsAsTodoList'] })
      setTodolists(todolistsFound)
    } catch (error) {
      enqueueSnackbar('Failed to fetch to-do lists', { variant: 'error' })
    }
  }

  const handleCreateTodo = async () => {
    if (!newTodoTitle) {
      enqueueSnackbar('Please enter a title for the to-do item', { variant: 'info' })
      return
    }
    try {
      await Api.Todolist.createOneByUserId(userId!, { title: newTodoTitle, isCompleted: false })
      setNewTodoTitle('')
      fetchTodolists()
      enqueueSnackbar('To-do item created successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to create to-do item', { variant: 'error' })
    }
  }

  const showModal = (todo: Model.Todolist) => {
    setCurrentTodo(todo)
    setCurrentTodoTitle(todo.title)
    setIsModalVisible(true)
  }

  const handleUpdateTodo = async () => {
    if (!currentTodo || !currentTodoTitle) {
      enqueueSnackbar('Please enter a title', { variant: 'info' })
      return
    }
    try {
      await Api.Todolist.updateOne(currentTodo.id, { title: currentTodoTitle })
      setIsModalVisible(false)
      fetchTodolists()
      enqueueSnackbar('To-do item updated successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update to-do item', { variant: 'error' })
    }
  }

  const handleDeleteTodo = async (todoId: string) => {
    try {
      await Api.Todolist.deleteOne(todoId)
      fetchTodolists()
      enqueueSnackbar('To-do item deleted successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to delete to-do item', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Manage Your Daily Tasks</Title>
      <Text>Keep track of your tasks with an editable to-do list.</Text>
      <Row gutter={16} style={{ marginTop: '20px' }}>
        <Col xs={24} sm={16}>
          <Input
            placeholder="Add new to-do"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            onPressEnter={handleCreateTodo}
            suffix={
              <Button icon={<PlusOutlined />} onClick={handleCreateTodo} type="primary">
                Add
              </Button>
            }
          />
        </Col>
      </Row>
      <List
        itemLayout="horizontal"
        dataSource={todolists}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <Button icon={<EditOutlined />} onClick={() => showModal(todo)} />,
              <Button icon={<DeleteOutlined />} onClick={() => handleDeleteTodo(todo.id)} />,
            ]}
          >
            <List.Item.Meta
              avatar={<Checkbox checked={todo.isCompleted} />}
              title={todo.title}
              description={`Created on ${dayjs(todo.dateCreated).format('DD/MM/YYYY')}`}
            />
          </List.Item>
        )}
      />
      <Modal
        title="Edit To-do"
        visible={isModalVisible}
        onOk={handleUpdateTodo}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleUpdateTodo}>
            Update
          </Button>,
        ]}
      >
        <Input
          placeholder="Edit to-do title"
          value={currentTodoTitle}
          onChange={(e) => setCurrentTodoTitle(e.target.value)}
        />
      </Modal>
    </PageLayout>
  )
}