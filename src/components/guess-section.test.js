import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessSection from './guess-section';
import Game from './game';
import GuessForm from './guess-form';


describe('<GuessSection />', () => { 
    it('Renders without going crashing', () => { 
        shallow(<GuessSection />);
    });

    it('allows us to set props', () => {
	    const wrapper = mount(<GuessSection feedback="baz" />);
	    wrapper.setProps({ feedback: 'Make your Guess!' });
	    expect(wrapper.contains(<GuessSection feedback='Make your Guess!' />)).toEqual(true);
  	});

  	it('allows us to set props', () => {
	    const wrapper = mount(<GuessSection onGuess="" />);
	    wrapper.setProps({ onGuess: '2' });
	    expect(wrapper.contains(<GuessSection onGuess='2' />)).toEqual(true);
  	});

});
