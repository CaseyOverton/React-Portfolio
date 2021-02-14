import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    marginLeft: '30%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Links() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className={classes.heading}>Github</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Link href="https://github.com/CaseyOverton">
           Click Here
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Linkedin</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Link href="https://www.linkedin.com/in/casey-overton-3584151b1/">
           Click Here
            </Link>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
