import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';
import InfoModal from './info-modal';
import './header.css';

describe('<Header />'), () => {
    it('Renders without going crashing', () => { 
        shallow(<Header />);
    });


});
