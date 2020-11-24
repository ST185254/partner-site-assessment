import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
      <React.Fragment>
      <CssBaseline />    
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            Partner Site Assessment
            </Typography>
            <Typography variant="h5" align="left" color="textSecondary" paragraph>
            This tool is build for customers interested in leveraging one or more partnerships. 
            This tool collects both technical system data as well as their staffs skills as it relates to the activities needed to complete the activation.
            </Typography>

            <Typography variant="h5" align="left" color="textSecondary" paragraph>
            The tool would ensure minimum requirements for technical specifications to determine what if any gaps exist.
            With a skills assessment, measure the risk associated with a self-activation.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to="/survey">  
                      <Button variant="contained" color="primary">
                        Start Survey
                      </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        </main>
    </React.Fragment>
  );
}
  export default HomePage;