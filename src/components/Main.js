import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import Nav from './Nav'
import QuoteGenerator from './QuoteGenerator'

const useStyles = ({
    main: {
        marginTop: '10%'
    }
})

export class Main extends Component {
    render() {

        const { classes } = this.props;

        return (
            <Grid container direction='column'>
                <Grid item>
                    <Nav/>
                </Grid>
                <Grid className={classes.main} item container>
                    <Grid item xs={1} sm={3}/>
                    <Grid item xs={10} sm={6}>
                        <QuoteGenerator/>
                    </Grid>
                    <Grid item xs={1} sm={3}/>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Main)
