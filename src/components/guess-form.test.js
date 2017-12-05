import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from './guess-form';
import ReactTestUtils from 'react-dom/test-utils'; 


describe('<GuessForm />', () => { 
    it('Renders without going crashing', () => { 
        shallow(<GuessForm />);
    });
});

// more one way to skin a cat! Number 1
it('on Submit click, the onGuess callback should fire', () => {
	const callback = jest.fn();
	const wrapper = mount(<GuessForm onGuess={callback} />);
	const guess = 50;
	const input = wrapper.find('#userGuess');
	input.value = guess;
	wrapper.simulate('submit');
	expect(input.value).toBe(50);
});

// more than one way to skin a cat! Number 2
it('on Submit click, the onGuess callback should fire', () => {
	const callback = jest.fn();
	const wrapper = mount(<GuessForm onGuess={callback} />);
	const guesses = [22,3,5,6,7,8,29];
	const input = wrapper.find('#userGuess');
	input.value = guesses[0];
	wrapper.simulate('submit');
	expect(input.value).toBe(22);
});

// more one way to skin a cat! Number 3
it('on Submit click, the onGuess callback should fire', () => {
	const callback = jest.fn();
	const wrapper = mount(<GuessForm onGuess={callback} />);
	const input = wrapper.findWhere(n => n.text() === "submit");
	input.value = 100;
	wrapper.simulate('submit');
	expect(input.value).toBe(100);
});

// What is this root instance anyway? Number 4
it('Getting to the root of an instance', () => {
	const wrapper = mount(<GuessForm />);
	const inst = wrapper.instance();
	expect(inst).toBeInstanceOf(GuessForm);
});

// more one way to skin a cat! Number 5 
  it('Should fire the onGuess callback when the form is submitted', () => {
      const callback = jest.fn();
      const wrapper = mount(<GuessForm onGuess={callback} />);
      const inst = wrapper.instance();
			expect(inst).toBeInstanceOf(GuessForm);
      
      const value = 10;
      const input = wrapper.find('input[type="text"]').get(0);
      input.value = inst.value = value;
      wrapper.simulate('submit');
      expect(callback).toHaveBeenCalledWith(value.toString());
  });

// more than one way to skin a cat! Number 6
  it('Sets the value on the input node', () => {
   const wrapper = mount(<input />);
   wrapper.find('input').node.value = 100;
  });

// more than one way to skin a cat! Number 7 to come next....
  it('Set the value then simulate a change event', () => {
// <input ref="input" />
   const wrapper = mount(<GuessForm />);
	 var node = wrapper.find('input').node.value = 100;
	 // ReactTestUtils.Simulate.change(node);
  });


