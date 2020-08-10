// Learning Objective:
// - I will be able to define the useReducer hook, and use it to manage state in a component

// Q: What is the remedy to writing a lot of boilerplate  when writing reducer functions?
// - Instead of wasting a lot of time writing code, and actually making state managment easier within components, we can the useReducer hook that provides a nice abstraction that enablesn me as a dev to use reducers in a more time effecient manner within React.

// Q: What is the useReducer hook?
// - useReducer is a react hook, and is similar in functionality to its cousion the useState hook.
// - under the hood the useState hook actually uses the useReducer hooks.

// Q: When should I use the useReducer hook?
// - A dev should use the useReducer hook when I am dealing with a complex logic that I have to deal with form within the component. Or the other siuation arrises when I find myself with alot of propeties (3 or more) in a single componet.

// Q: How is useReducer used?
// - The useReducer pattern takes in a reducer function, that I must build, in addition to a value for the initialState.
// Then the useReducer hook will return both the current state and the dispatch method all within an array, just like useState does.

// The useReducer pattern will look like this:
const [state, dispatch] = useReducer(reducer, initialState);

// Q: What is the "dispatch" method and why is it useful?
// - Syntacityly it is the second item after the current state in the useRecuder array.
// - Functionally the "dispatch" method is capable of executing an action to the reducer when a specific event occurs within the application.
// - Furthermore, the dispatch method enables use to combine the two capablities of the reducer function from the previous section, with the ability to maintain the state at the level of the component.

// Q: What does the useReducer hook come with?
// - It comes with all the functionallity of the useState hook, but combines it with the power of the reducer we are building ourselves. In doing so it proviodes me with the acces to both the state and the function that dispatches actions to the reducer.

// Follow Along
// - I will build a component to go along with my counter reducer.
// -
