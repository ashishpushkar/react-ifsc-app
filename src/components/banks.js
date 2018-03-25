import React from 'react';
import { Grid, Image, Dropdown } from 'semantic-ui-react';

const Banks = ({ banks, onBankChange }) => (
    <Grid centered>
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <Dropdown
                placeholder='Banks'
                fluid search selection options={banks}
                onChange={onBankChange}
            />
        </Grid.Column>
    </Grid>
)

export default Banks;