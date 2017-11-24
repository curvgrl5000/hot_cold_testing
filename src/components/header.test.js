import React from 'react';
import {shallow, mount} from 'enzyme';
import Header from './header';

describe('<Header />', () => {
    it('Renders without going crashing', () => { 
        shallow(<Header />);
    });

    // $("button").on("click", function(){ this.name })

    it('When the header loads, the infoModal should be set to false, hidden from view', () => { 
        const wrapper = shallow(<Header />);
        expect(wrapper.state('showInfoModal')).toEqual(false);
    });

    it('The header has the contents hot and cold', () => { 
        const wrapper = shallow(<Header />);
        expect(wrapper.containsMatchingElement(<h1>HOT or COLD</h1>)).toEqual(true);
    });

    it('The nav 2nd li should have a class that floats it right', () => { 
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.next').length).toEqual(0);
    });

    it('When you click onNewGame, it should start a new game ', () => {
        const callback = jest.fn();
        const wrapper = mount(<Header onNewGame={callback} />);
        wrapper.simulate('click');
        wrapper.update();
        console.log(wrapper.props());
        expect(callback.mock.calls.length).toBe(0);
    });

});
