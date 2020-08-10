// Learning Objctive:
// - Define and use the Reducer Function.

// Q: What does the reducer pattern enable dev's to preform?
// - Well the reducer pattern enables developers to:
// - 1: Write pure functions
// - 2: Manage State changes in a perdicatable manner
// - All around the reducer pattern is a very useful state managment tool

// Q: What are the two arguments reducer functions take?
// - 1: The State
// - 2: The Action
// - The reducer pattern then returns a new, updated state object based on both arguments

// Q: What would the reducer pattern look like in pseudo code?
(state, action) => newState;

// Q: What is a great way to think about the reducer function?
// - Think of a function in pure vinilla JS.
// - When I pass an integer, I would return the value of value + 1, all without mutaing the original integers value.

const initialState = 0;
const reducer = (state) => {
  const newState = state + 1;
  return newState;
};

const newStateValue = reducer(initialState);
console.log(initialState, newStateValue); // 0, 1

// Q: What is the key takeaway from the example code above?
// - Notice how I can pass in the reducer function the value of intial state (0) all without over riding the value of initialState.

// Q: Why isn't returning a new integrer or string the best choice?
// - Becuase as data grows in the application it will become more complex then just the previous example.

// Example:
// - What if we considred the previous example, where the compinent's state ultaized an object as it's data structure of choice.

const initialState = { count: 0 };
const reducer = (state) => {
  return { const: state.count + 1 };
};

// Q: Guess what will happen if I where to invoke the reducer function and then call initial state? What would happen to the value of count in initial value?
// - GUESS: count: 1
// - A: But upon futher reading and testing the initial state is left unmutatded.

// Q: Why am I able not to alter or over ride the initial state object with a reducer?
// - The initialState value remains unmuatted due to the reducer function being a pure function, without any side effects. This is why reducer functions are the perfect fit for managing changes in state while maintaining the immutability we want in the components.

// Q: What is the argument that we pass as an action? What does it do? Why is it important?
// - Axction are represnted by an object.
// - These objects contain properties related to some action that happens with our application.
// - The "type" property is required upon every action object. This 'type' property will "inform" the reducer actions happening in the applications.
// - The "type" property tell the reducer what part of the state that needs to be altered.

// Follow Along

// Refercenig the reducer from above, lets use the "type" to tell the reducer what part of state that needs to be handled. By passing in the action with a "increment" as the type, this will tell the reducer to increment our count state by passing in the action.

// Q: When is this especially powerfull?
// - When we want the reducer to be able to reduce the state? (What does reduce mean)
// - For example this:

// Now with the use of reducers state and action arguments used together I am able to write code that is more preditcalble and easier to reason through.
// - The current state simply passes through the reducer and an action follows to tell the reducer how to update the state.

// Q: What is a payload propety and why would I use it?
// - Payload is just the term for data property when you pass in addition to the action property.
// - the payload property is merly an addition to the our action object.
// - In order for the reducer to update the state correctly we need to pass in some data through the action object. The payload property will live in the action object.
