import React from 'react';
import reactDOM from 'react-dom';
import { Menu, Segment } from 'semantic-ui-react';

const AppHeader = () => (
    <Segment inverted>
        <Menu inverted secondary>
            <Menu.Item name='Bank IFSC codes and details' />
        </Menu>
    </Segment>
)

export default AppHeader