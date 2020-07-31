import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Quote from './Quote'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 300
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function QuoteGenerator() {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Quote/>
      </CardContent>
      
    </Card>
  );
}