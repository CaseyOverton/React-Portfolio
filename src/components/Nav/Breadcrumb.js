import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import theme from '../../theme'



const style = {
  display: 'flex',
  justifyContent: 'center'
};


export default function Breadcrumb() {
    return (
      <Breadcrumbs style={style} aria-label="breadcrumb">
        <Link color="Secondary" href="/">
          Home
        </Link>
        <Link color="Secondary" href="/Contact">
          Contact
        </Link>
        <Link color="Secondary" href="/Resume">
          Resume
        </Link>
      </Breadcrumbs>
    );
  }