import * as React from "react"
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container  } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"


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
  { title: `survey`, path: `/survey` },
  { title: `help`, path: `/help` }
]

const Header = () => {
  const classes = useStyles(); 
  return (
    <AppBar position="static">
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
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </Container>
      </Toolbar>
      
    </AppBar>
  )
}
export default Header