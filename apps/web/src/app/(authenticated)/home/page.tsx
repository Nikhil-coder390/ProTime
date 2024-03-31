'use client'
import { PageLayout } from '@web/layouts/Page.layout'; // Assuming this can stay the same
import { Divider, Flex, Typography } from 'antd'

const { Title, Text, Paragraph } = Typography

export default function HomePage() {
  return (
    <PageLayout layout="super-narrow">
      <Flex align="center" vertical>
        <Title level={1} style={{ marginBottom: 5 }}>
          Welcome to ProTime 👋
        </Title>
        <Title level={5} style={{ marginTop: 0, marginBottom: 15 }}>
          {' '}
          You can start navigating the app and make it yours.
        </Title>
        <Divider />
        <Text type="secondary">
          Designed and Developed by Raghu, Nikhil and Neha
        </Text>
      </Flex>
    </PageLayout>
  )
}
