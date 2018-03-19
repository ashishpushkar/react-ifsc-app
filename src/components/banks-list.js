import React from 'react';
import { Grid, Image, Dropdown } from 'semantic-ui-react';

const BanksList = ({ banks }) => (
    <Grid centered>
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <Dropdown placeholder='Banks' fluid search selection options={banks} />
        </Grid.Column>
    </Grid>
)

export default BanksList;