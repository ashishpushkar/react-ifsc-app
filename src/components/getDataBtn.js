import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

const GetDataBtn = ({ getData }) => (
    <Grid centered>
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <Button onClick={getData}>Get Bank Details</Button>
        </Grid.Column>
    </Grid>
);

export default GetDataBtn;