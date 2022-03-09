import { Grid } from '@mui/material';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <h1>Template project</h1>
            </Grid>
        </Grid>
    );
};

export default Home;
