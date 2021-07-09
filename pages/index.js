import React, {useEffect, useState} from "react";
import {Button, Grid, makeStyles} from "@material-ui/core";

const styles = makeStyles({
    root: {
        color: 'red',
    },
});

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDynamic: true
        }
        this.toggleDynamic = this.toggleDynamic.bind(this);
    }

    toggleDynamic() {
        this.setState({
            isDynamic: !this.state.isDynamic
        })
    }

    render() {
        const data = {
            id: "809",
            options: {
                params: {
                    fields: {
                        isDynamic: true
                    }
                }
            },
            count: 6,
            color: "#2c2a2a",
            data: "01.01.2021"
        }
        return (
            <div>
                <Page data={data} isDynamic={this.state.isDynamic}/>
                <Button onClick={this.toggleDynamic} variant="contained" color="primary">
                    Click
                </Button>
            </div>

        )
    }

}

function Page(props) {
    return <MyWonderfulComponent data={props.data} isDynamic={props.isDynamic}>
        I&#39;m text from a component
    </MyWonderfulComponent>
}

function MyWonderfulComponent(props) {
    const classes = styles();
    const {count, options, id} = props.data;
    const [sum, setSum] = useState(count);
    useEffect(() => {
        if (id && options?.params?.fields?.isDynamic) {
            setSum(sum + 1);
        }
    }, [props.isDynamic]);
    return (
        <div>
            <h1 className={classes.root}>Hello World!</h1>
            <Grid>
                <Grid item xs={12}>{props.children}</Grid>
                <Grid>{sum}</Grid>
            </Grid>
        </div>
    );
}

export default Home;

