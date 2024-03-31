import { RouterObject } from '@web/core/router'
import { useDesignSystem } from '@web/designSystem'
import { Model } from '@web/domain'
import { useAuthentication } from '@web/modules/authentication'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { SubNavigation } from './components/SubNavigation'
import { Topbar } from './components/Topbar/index.layout'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const authentication = useAuthentication()
  const user = authentication?.user as Model.User

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const goToUserPage = (url: string) => {
    router.push(url.replace(':id', user?.id))
  }

  const itemsLeftbar = [
    
  ]

  const itemsUser = [

]

  const itemsTopbar = [

{
      key: '/dashboard',
      label: 'Dashboard',
      onClick: () => goTo('/dashboard'),
    },

{
      key: '/time-blocks',
      label: 'Time Blocks',
      onClick: () => goTo('/time-blocks'),
    },

{
      key: '/time-blocks/create',
      label: 'Create Time Block',
      onClick: () => goTo('/time-blocks/create'),
    },

{
      key: '/goals',
      label: 'Goals',
      onClick: () => goTo('/goals'),
    },

{
      key: '/goals/create',
      label: 'Create Goal',
      onClick: () => goTo('/goals/create'),
    },

{
      key: '/todo-list',
      label: 'To-Do List',
      onClick: () => goTo('/todo-list'),
    },

{
      key: '/calendar',
      label: 'Calendar',
      onClick: () => goTo('/calendar'),
    },

{
      key: '/pomodoro',
      label: 'Pomodoro Timer',
      onClick: () => goTo('/pomodoro'),
    },

]

  const itemsSubNavigation = [
    
    {
      key: '/dashboard',
      label: 'Dashboard',
    },
    
    {
      key: '/time-blocks',
      label: 'Time Blocks',
    },
    
    {
      key: '/time-blocks/create',
      label: 'Create Time Block',
    },
    
    {
      key: '/time-blocks/:id/edit',
      label: 'Time Blocks',
    },
    
    {
      key: '/goals',
      label: 'Goals',
    },
    
    {
      key: '/goals/create',
      label: 'Create Goal',
    },
    
    {
      key: '/goals/:id/progress',
      label: 'Goal Progress',
    },
    
    {
      key: '/todo-list',
      label: 'To-Do List',
    },
    
    {
      key: '/calendar',
      label: 'Calendar',
    },
    
    {
      key: '/pomodoro',
      label: 'Pomodoro Timer',
    },
    
  ]

  const itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo(RouterObject.route.PROFILE),
    },
    {
      key: 'notifications',
      label: 'Notifications',
      onClick: () => goTo(RouterObject.route.NOTIFICATIONS),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                items={itemsLeftbar}
                itemsUser={itemsUser}
                logo={<Logo className="m-2" />}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              items={itemsTopbar}
              itemsMobile={itemsMobile}
              logo={!isLeftbar && <Logo width={40} height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SubNavigation items={itemsSubNavigation} />

              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
