import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import MailIcon from '@mui/icons-material/Mail'
import { useState } from 'react'
import { routeMain as routeDayPage } from 'pages/DayPage/DayPage'
import { useNavigate } from 'react-router-dom'
import { routeMain as routeTestPage } from 'pages/TestPage/TestPage'
import routeMain from 'pages/MainPage/routes'

const drawerWidth = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export const Sidebar = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader className='DH'>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem disablePadding onClick={() => navigate(routeMain())}>
            <ListItemButton>
              <ListItemIcon>
                {' '}
                <MailIcon />{' '}
              </ListItemIcon>
              <ListItemText primary={'Year'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate(routeDayPage())}>
            <ListItemButton>
              <ListItemIcon>
                {' '}
                <MailIcon />{' '}
              </ListItemIcon>
              <ListItemText primary={'Month'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate(routeTestPage())}>
            <ListItemButton>
              <ListItemIcon>
                {' '}
                <MailIcon />{' '}
              </ListItemIcon>
              <ListItemText primary={'Test'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}
