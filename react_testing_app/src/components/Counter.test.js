import { render, fireEvent } from '@testing-library/react';
import  Counter  from './Counter';

{/* a test for the increment button*/}
test('increments the counter', () => { {/* uses the jest keyword  test and then the assertion 'increments the counter'*/}
    const { getByText } = render(<Counter />); {/* This renders/ displays the counter function */}
    const incrementButton = getByText('Increment'); {/* Creates an object incrementButton by getting by text the increment */}
    fireEvent.click(incrementButton); {/* Fires the click event - which need to be imported from the testing library */}
    expect(getByText('Counter: 1')).toBeInTheDocument(); {/* uses the jest keyword expect the Counter to be at 1 with to be in the document'*/}
});

{/* Same as the test above but for testing the decrement counter*/}
test('decrements the counter', () => { {/* differnt assertion statement for test the decrments the button*/}
    const { getByText } = render(<Counter />);{/* as above render / display the function which has both increment and decrement buttons*/}
    const decrementButton = getByText('Decrement');{/*Get by text to get the decrement button */}
    fireEvent.click(decrementButton); {/* Fires the click event - which need to be imported from the testing library */}
    expect(getByText('Counter: -1')).toBeInTheDocument(); {/* uses the jest keyword expect the Counter to be at -1 with to be in the document'*/}
});