'use client'

import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Select, Typography } from 'antd';
const { Title, Text } = Typography;
const { Option } = Select;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreateGoalPage() {
  const router = useRouter();
  const authentication = useAuthentication();
  const userId = authentication.user?.id;
  const { enqueueSnackbar } = useSnackbar();
  const [categories, setCategories] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchCategories = async () => {
      if (userId) {
        const categorysFound = await Api.Category.findManyByUserId(userId, { includes: ['user'] });
        setCategories(categorysFound);
      }
    };

    fetchCategories().catch(console.error);
  }, [userId]);

  const onFinish = async (values: any) => {
    try {
      await Api.Goal.createOneByUserId(userId, {
        ...values,
        isCompleted: false,
        userId,
      });
      enqueueSnackbar('Goal created successfully', { variant: 'success' });
      router.push('/goals');
    } catch (error) {
      enqueueSnackbar('Failed to create goal', { variant: 'error' });
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      const newCategory = await Api.Category.createOneByUserId(userId, { name: newCategoryName });
      setCategories(prev => [...prev, newCategory]);
      setIsModalVisible(false);
      setNewCategoryName('');
      enqueueSnackbar('Category added successfully', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Failed to add category', { variant: 'error' });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Create a New Goal</Title>
      <Text>Specify the details and categorization of your new goal for better organization and tracking.</Text>
      <Form form={form} layout="vertical" onFinish={onFinish} style={{ marginTop: '24px' }}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input the title of the goal!' }]}
        >
          <Input placeholder="Enter goal title" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input the description of the goal!' }]}
        >
          <Input.TextArea placeholder="Enter goal description" rows={4} />
        </Form.Item>
        <Form.Item
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: 'Please select a category for the goal!' }]}
        >
          <Select
            placeholder="Select a category"
            allowClear
          >
            {categories.map(category => (
              <Option key={category.id} value={category.id}>{category.name}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Goal
          </Button>
          <Button type="default" onClick={showModal} style={{ marginLeft: '8px' }}>
            Add Category
          </Button>
        </Form.Item>
      </Form>
      <Modal title="Add New Category" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form layout="vertical">
          <Form.Item
            label="Category Name"
            required
            rules={[{ required: true, message: 'Please input the category name!' }]}
          >
            <Input value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} placeholder="Enter category name" />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  );
}