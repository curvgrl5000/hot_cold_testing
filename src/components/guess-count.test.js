import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessCount  from './guess-count';

describe('<GuessCount />', () => { 
    it('Renders without crashing', () => { 
        shallow(<GuessCount />);
    });

    it('There should be an id of count', () => { 
    	const wrapper = shallow(<GuessCount />);
 			expect(wrapper.find('#count').length).toEqual(1);    
 		});

     it('Should contain the string that shows the count of the current guess', () => { 
    	const wrapper = shallow(<GuessCount />);
    	const count= 2;
 			expect(wrapper.contains(<p>Guess #<span id="count">{count}</span>!</p>));    
 		});

});







