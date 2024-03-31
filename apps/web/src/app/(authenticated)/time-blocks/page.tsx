'use client'

import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Typography, Modal } from 'antd';
import { useEffect, useState } from 'react';
const { Title, Text } = Typography;
const { confirm } = Modal;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function TimeBlocksPage() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const authentication = useAuthentication();
  const userId = authentication.user?.id;
  const [timeBlocks, setTimeBlocks] = useState([]);

  useEffect(() => {
    const fetchTimeBlocks = async () => {
      if (userId) {
        try {
          const fetchedTimeBlocks = await Api.Timeblock.findManyByUserId(userId, { includes: ['category'] });
          setTimeBlocks(fetchedTimeBlocks);
        } catch (error) {
          enqueueSnackbar('Failed to fetch time blocks', { variant: 'error' });
        }
      }
    };

    fetchTimeBlocks();
  }, [userId]);

  const handleCreateTimeBlock = () => {
    router.push('/time-blocks/create');
  };

  const handleDeleteTimeBlock = (timeBlockId) => {
    confirm({
      title: 'Are you sure delete this time block?',
      content: 'This action cannot be undone.',
      onOk: async () => {
        try {
          await Api.Timeblock.deleteOne(timeBlockId);
          setTimeBlocks(timeBlocks.filter((timeBlock) => timeBlock.id !== timeBlockId));
          enqueueSnackbar('Time block deleted successfully', { variant: 'success' });
        } catch (error) {
          enqueueSnackbar('Failed to delete time block', { variant: 'error' });
        }
      },
    });
  };

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Manage Your Time Blocks</Title>
      <Text>Organize your day for better productivity by managing your time blocks.</Text>
      <Button type="primary" icon={<PlusOutlined />} onClick={handleCreateTimeBlock} style={{ margin: '20px 0' }}>
        Create Time Block
      </Button>
      <Row gutter={[20, 20]}>
        {timeBlocks?.map((timeBlock) => (
          <Col key={timeBlock.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={timeBlock.title}
              extra={<a onClick={() => router.push(`/time-blocks/${timeBlock.id}/edit`)}>Edit</a>}
              bordered={false}
              actions={[
                <DeleteOutlined key="delete" onClick={() => handleDeleteTimeBlock(timeBlock.id)} />,
              ]}
            >
              <p><strong>Category:</strong> {timeBlock.category?.name}</p>
              <p><strong>Start Time:</strong> {dayjs(timeBlock.startTime).format('HH:mm')}</p>
              <p><strong>End Time:</strong> {dayjs(timeBlock.endTime).format('HH:mm')}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
}