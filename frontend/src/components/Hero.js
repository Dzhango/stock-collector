import {Typography, Container, Button, makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        backgroundImage: "URL(https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)",
        padding: theme.spacing(8, 0, 6),
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        color: "white",
    },
    heroButtons: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(4),
    },
}))
export default function Hero(){
    const classes = useStyles();
    return(
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="standard" paragraph>
            “To stand up straight with your shoulders back is 
            to accept the terrible responsibility of life, with eyes wide open. 
            It means deciding to voluntarily transform the chaos of potential 
            into the realities of habitable order." - Jordan Peterson
            </Typography>
            <div className={classes.heroButtons}>
                <Button variant="contained" color="primary" justify="center">
                    Create New Goal
                </Button>
            </div>
          </Container>
        </div>
    )
}