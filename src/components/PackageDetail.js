import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {getPackage} from '../packageOfferings';

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

function PackageDetail(props) {
  const classes = useStyles();
  const [packageOffering, setPackageOffering] = useState({});


  useEffect(() => {
    const curPacks = getPackage(props.match.params.id);
    if(!curPacks || curPacks.length===0){
      setPackageOffering({});
    }
    else{
      setPackageOffering(curPacks[0]);
    }
  }, [props.match.params.id]);

  return (
      <React.Fragment>
      <CssBaseline />    
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            {packageOffering.name}
            </Typography>
           
            <Typography variant="h5" align="left" color="textPrimary" paragraph>
                {packageOffering.description}
            </Typography>
            <Typography variant="h5" align="left" color="textPrimary" paragraph>
                package price : {packageOffering.price}
                
            </Typography>

          </Container>
        </div>
        </main>
    </React.Fragment>
  );
}
  export default PackageDetail;