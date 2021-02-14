import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 375,
  },
  media: {
    height: 140,
  },
});

export default function ContactCard() {
  const classes = useStyles();

  return (
    <Card variant='elevated' className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../../assets/Img/shutterstock_1050344618.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Stuff About Project
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Github
        </Button>
        <Button size="small" color="primary">
          Deployed Link
        </Button>
      </CardActions>
    </Card>
  );
}
