import React from 'react'

import {
  AppBar,
  Button,
  Container,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'

import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  header: {
    marginBottom: '40px',
  },
}))

const Navigation = ({ setIsOpenModal }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.header}>
        <Container maxWidth="md">
          <Toolbar className="header-nav">
            <Typography variant="h6" className={classes.title}>
              <Link
                to="/"
                component={RouterLink}
                className="logo"
                style={{ color: grey[50] }}
              >
                Todo aplication
              </Link>
            </Typography>
            <Typography>
              <Button
                className="openModalBtn"
                variant="outlined"
                onClick={() => setIsOpenModal(true)}
              >
                Модальное окно
              </Button>
              <Link
                to="/characters/1"
                component={RouterLink}
                style={{ color: grey[50] }}
              >
                Персонажи звездных войн
              </Link>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  )
}

export default React.memo(Navigation)
