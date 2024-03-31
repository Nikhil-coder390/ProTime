'use client'

import React, { useEffect, useState } from 'react';
import { Button, DatePicker, Modal, Input, Upload, Typography, List, Avatar, Space, message } from 'antd';
import { PlusOutlined, CalendarOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CalendarPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [iconUrl, setIconUrl] = useState('');
  const [calendardates, setCalendardates] = useState([]);
  const router = useRouter();
  const authentication = useAuthentication();
  const userId = authentication.user?.id;
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (userId) {
      fetchCalendardates();
    }
  }, [userId]);

  const fetchCalendardates = async () => {
    try {
      const data = await Api.Calendardate.findManyByUserId(userId, { includes: ['user'] });
      setCalendardates(data);
    } catch (error) {
      enqueueSnackbar('Failed to fetch dates', { variant: 'error' });
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    if (!selectedDate) {
      message.error('Please select a date');
      return;
    }
    try {
      await Api.Calendardate.createOneByUserId(userId, { date: selectedDate, iconUrl });
      enqueueSnackbar('Date added successfully', { variant: 'success' });
      fetchCalendardates();
    } catch (error) {
      enqueueSnackbar('Failed to add date', { variant: 'error' });
    }
    setIsModalVisible(false);
    setSelectedDate('');
    setIconUrl('');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedDate('');
    setIconUrl('');
  };

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
  };

  const handleUpload = async options => {
    const { file } = options;
    const url = await Api.Upload.upload(file);
    setIconUrl(url);
    message.success('Icon uploaded successfully');
  };

  const deleteCalendardate = async (id) => {
    try {
      await Api.Calendardate.deleteOne(id);
      enqueueSnackbar('Date deleted successfully', { variant: 'success' });
      fetchCalendardates();
    } catch (error) {
      enqueueSnackbar('Failed to delete date', { variant: 'error' });
    }
  };

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Manage Important Dates</Title>
      <Text>Add icons to dates, mark new dates, and manage them.</Text>
      <Space direction="vertical" style={{ width: '100%', marginTop: 20 }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
          Add New Date
        </Button>
        <List
          itemLayout="horizontal"
          dataSource={calendardates}
          renderItem={item => (
            <List.Item
              actions={[
                <DeleteOutlined key="delete" onClick={() => deleteCalendardate(item.id)} />,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.iconUrl} icon={<CalendarOutlined />} />}
                title={dayjs(item.date).format('YYYY-MM-DD')}
                description={`Added by ${item.user?.name}`}
              />
            </List.Item>
          )}
        />
      </Space>
      <Modal title="Add New Date" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <DatePicker onChange={handleDateChange} style={{ width: '100%' }} />
        <Upload customRequest={handleUpload} maxCount={1} showUploadList={false}>
          <Button icon={<PlusOutlined />} style={{ marginTop: 10 }}>
            Upload Icon
          </Button>
        </Upload>
      </Modal>
    </PageLayout>
  );
}