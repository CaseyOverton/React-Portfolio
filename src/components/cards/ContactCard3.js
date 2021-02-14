import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from "../../assets/Img/PWA Budget Tracker.png"
import theme from "../../theme"
import {ThemeProvider} from '@material-ui/core'




const useStyles = makeStyles({
  root: {
    maxWidth: 375,
  },
  media: {
    height: 140,
  },
});


export default function ContactCard1() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <Card variant='elevated' className={classes.root}>
      <CardActionArea>
        <CardMedia
          style = {{ height: 0, paddingTop: '56%'}}
          className={classes.media}
          image= {img1}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            PWA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            BudgetTracker PWA helps you keep track of expenses while offline.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Paper>
        <Button href="https://github.com/jamescbaldwin/DEMO100" size="small" color="primary">
          Github Repo
        </Button>
        </Paper>
        <Paper>
        <Button href="https://enigmatic-savannah-33392.herokuapp.com/seller" size="small" color="primary">
          Deployed Heroku Link
        </Button>
       </Paper>
      </CardActions>
    </Card>

</ThemeProvider>

);
}
  