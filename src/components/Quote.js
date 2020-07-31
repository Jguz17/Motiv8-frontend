import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export class Quote extends Component {

    state = {
        quote: false
    }

    handleClick() {
        fetch('https://type.fit/api/quotes')
        .then((res) => res.json())
        .then((quoteData) => {
            const randomQuote = Math.floor(Math.random() * quoteData.length)
            this.setState({
                quote: quoteData[randomQuote]
            })
        })
    }

    render() {

        return (
            <Grid container direction='column'>
                <Grid container>
                    <Grid xs={12} item direction='column'>
                        <CardActions>
                            <Button color='primary' fullWidth onClick={() => this.handleClick()}>New Quote</Button>
                        </CardActions>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <Typography variant='h4'>
                            {this.state.quote ? this.state.quote.text : null}
                        </Typography>
                        <Typography>
                            {this.state.quote ? this.state.quote.author : null}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Quote
