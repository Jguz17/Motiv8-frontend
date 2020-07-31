import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export class Nav extends Component {
    render() {
        return (
            <div>
                <AppBar position='static' >
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

export default Nav
