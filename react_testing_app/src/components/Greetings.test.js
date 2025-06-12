import React from 'react';
import Greetings from './Greetings';
import renderer from 'react-test-renderer';

test('Greetings component renders correctly', () => {
    // Create a "snapshot" of the Greetings component.
    // This means we take a "picture" of how it looks when rendered.
    const tree = renderer.create(<Greetings />).toJSON();
    
    // Compare the current output with the stored snapshot.
    // If the output has changed, the test will fail, alerting us to unexpected modifications.
    expect(tree).toMatchSnapshot();
});

// https://levelup.video/tutorials/react-testing-for-beginners/snapshot-testing-101 Accessed 3rd April 2025 - Useful youtube series on testing.