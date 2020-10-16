import React from 'react'

import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Grid,
} from '@material-ui/core'
import { Pagination, PaginationItem } from '@material-ui/lab'

import { useDispatch, useSelector } from 'react-redux'
import { swapiRequest } from '../redux/actions/swapi'

import _ from 'lodash'

import { Link, Route } from 'react-router-dom'

const useStyles = makeStyles({
  media: {
    height: 250,
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
})

const Characters = () => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const people = _.chunk(
    useSelector(({ swapiReducer }) => swapiReducer.people),
    3
  )
  const isLoading = useSelector(({ swapiReducer }) => swapiReducer.isLoading)

  React.useEffect(() => {
    dispatch(swapiRequest())
  }, [dispatch])

  return (
    <React.Fragment>
      <Route
        path="/characters/:pageId"
        render={(routeProps) => {
          if (isLoading) {
            return (
              <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
              </div>
            )
          }

          return (
            <Grid container spacing={2}>
              {people.length &&
                people[Number(routeProps.match.params.pageId) - 1].map(
                  (person, index) => (
                    <Grid
                      item
                      md={4}
                      className={classes.root}
                      key={person.name + index}
                    >
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={`https://starwars-visualguide.com/assets/img/characters/${
                            index +
                            Number(routeProps.match.params.pageId) +
                            (Number(routeProps.match.params.pageId) - 1) +
                            (Number(routeProps.match.params.pageId) - 1)
                          }.jpg`}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {person.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="div"
                          >
                            <div className="birth-year">
                              Birth year: {person.birth_year}
                            </div>
                            <div className="mass">Mass: {person.mass}</div>
                            <div className="height">
                              Height: {person.height}
                            </div>
                            <div className="hair-color">
                              Hair color: {person.hair_color}
                            </div>
                            <div className="gender">
                              Gender: {person.gender}
                            </div>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Grid>
                  )
                )}
            </Grid>
          )
        }}
      />
      <Pagination
        count={people.length}
        color="primary"
        hidePrevButton
        hideNextButton
        renderItem={(item) => (
          <Link to={`/characters/${item.page}`}>
            <PaginationItem {...item} />
          </Link>
        )}
        className={classes.pagination}
      />
    </React.Fragment>
  )
}

export default Characters
