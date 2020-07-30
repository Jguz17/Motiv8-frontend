import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const useStyles = ({
    nav: {
        flexGrow: '1'
    },
    appbar: {
        alignItems: 'center'
    }
})

export class Nav extends Component {
    render() {

        const { classes } = this.props;

        return (
            <div>
                <AppBar className={classes.appbar} position='static' >
                    <Toolbar>
                        <Typography variant='h4'>
                            Motiv8
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(useStyles)(Nav)
