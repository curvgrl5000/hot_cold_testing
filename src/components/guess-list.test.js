import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => { 
    it('Renders the component', () => {
    	const guess = "one" 
    	const guesses = ["two", "three"];
    	const index = guesses[0];
        const wrapper = shallow(<GuessList guesses={guesses} />);
        expect(wrapper.contains(<li key={index}>{guess}</li>));
    });

    it('the unordered list has a classname guessBox', () => { 
    	const guesses = ["two", "three"];
        const wrapper = shallow(<GuessList guesses={guesses} />);
        expect(wrapper.hasClass('guessBox')).toEqual(true);
    });

    it('Renders a list of guesses', () => {
        const values = [30, 54, 22];
        const wrapper = shallow(<GuessList guesses={values} />);
        const items = wrapper.find('li');
        values.map((value, index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        });
    });
});