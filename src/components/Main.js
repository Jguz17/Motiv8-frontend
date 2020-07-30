import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Nav from './Nav'

export class Main extends Component {
    render() {
        return (
            <Grid container direction='column'>
                <Grid item>
                    <Nav/>
                </Grid>
            </Grid>
        )
    }
}

export default Main
