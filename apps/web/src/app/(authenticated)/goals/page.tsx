'use client'

import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Input, Row, Select, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
const { Option } = Select;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function GoalsPage() {
  const router = useRouter();
  const authentication = useAuthentication();
  const userId = authentication.user?.id;
  const { enqueueSnackbar } = useSnackbar();
  const [goals, setGoals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchGoals = async () => {
      if (userId) {
        const userGoals = await Api.Goal.findManyByUserId(userId, { includes: ['category'] });
        setGoals(userGoals);
      }
    };

    const fetchCategories = async () => {
      if (userId) {
        const userCategories = await Api.Category.findManyByUserId(userId);
        setCategories(userCategories);
      }
    };

    fetchGoals();
    fetchCategories();
  }, [userId]);

  const onFinish = async (values) => {
    try {
      await Api.Goal.createOneByUserId(userId, values);
      enqueueSnackbar('Goal created successfully', { variant: 'success' });
      form.resetFields();
    } catch (error) {
      enqueueSnackbar('Failed to create goal', { variant: 'error' });
    }
  };

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Manage Your Goals</Title>
      <Text>Here you can view, create, and manage your personal and professional goals.</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Card title="Create New Goal">
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title!' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please input the description!' }]}>
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item name="categoryId" label="Category" rules={[{ required: true, message: 'Please select a category!' }]}>
                <Select placeholder="Select a category">
                  {categories.map((category) => (
                    <Option key={category.id} value={category.id}>{category.name}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                  Create Goal
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        {goals.map((goal) => (
          <Col key={goal.id} span={24}>
            <Card title={goal.title} extra={<Button type="link" onClick={() => router.push(`/goals/${goal.id}/progress`)}>View Progress</Button>}>
              <Text>{goal.description}</Text>
              <br />
              <Text type="secondary">Category: {goal.category?.name}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
}