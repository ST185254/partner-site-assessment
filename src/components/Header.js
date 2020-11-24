import * as React from "react"
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container  } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  }
});

const navLinks = [
  { title: `home`, path: `/` },
  { title: `survey`, path: `/survey` },
  { title: `help`, path: `/help` }

]

const Header = () => {
  const classes = useStyles(); 
  return (
    <AppBar  color="primary" position="static">
      <Toolbar>
        <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex} // this
          >
            {navLinks.map(({ title, path }) => (
              <Link to={path}  key={title}  className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Container>
      </Toolbar>
      
    </AppBar>
  )
}
export default Header