// Objective:
// - Learn what immutaibility is in programming, and demonstarte the benifits of immutability

// Q: What is Redux built on?
// - Redux is built with the principle of immutaibilty in mind.
// - Redux has a store that is incapable of mutability.
// - Redux store capablity of immutability saves developers from running into more bugs and side effects in the long run.
// - The other benifit of Redux's store's immutability capablity is how understandable the code is and how easy it is for devlopers to reason about your code.

// Q: What are "Mutable Objects"?
// - Mutable objects posses the capability to change state over time. They mutate like a shape shifting super hero, think beast boy from teen titatans.
// - In contrast "immutable values" have the ability to never alter state after it's inception. Immutable values are like solid dependal materials you would use to build a house. Iron, metal, semenat.
// - For example think of "immutable" values like sement, sement can be poured and manipultaed to fit the shape of any cast but once it is dryied it is incapable of mutating its shape.
// - Just like semenat ability to unalter its form to structures, their are benifits to using "immutable  values" when constructiing applications.
// - There are a bevy of benifits to using "immuatble values" but in this learning module I will just cover two:
// - 1: The benifit of Predictability
// - 2: the benifit of Mutation Tracking

// PREDICATBILITY
// Q: What are the downsides to mutability?
// - Difficulty tracking change when mutabile objects hide these alteration in state, which cause unpredictable side effects. Thus leading to some very annoying bugs within a dev's code.
// - When setting out to construct a complex application we want to make it as easy for people to reason about it's archiecture. The beauty of immutability is the clarity it can brings to the an application mental model and architecture, which makes it more effecient for team memebers to reason about it.
// - The benift of "Predicatibily" that immutable values delivers is just the sheer ease of prediction of how state object will change based on certain actions/events. Inputs and outputs are clear, and dev's work more effeciently.
// - If you where to architect a complex application with out using immutable objects team members would have a harder/longer time reasoning about how state will change over time based on certan user actions and effects. Not to mention the increase in development time that will arise from not using immutable values also that cause updating state in unperditable ways causing very annoying bugs.

// MUTATION TRACKING
// Q: What are the benifits of using "immutablity"?
// - Using redux is a mechansim to track state chanegs throughout the application.
// - An intresting outcome of being able to track state changes through an application is when state changes in Redux, how our component props will updated.
// - After the components props have updated, we then have the ability to check previous props vs the newer props that where passed down to understand the changes that have occured. Then based on the alteration of state or props we can handle those changes more effectively.
// - For example think back to when I built the ToDoList app. Whenever the user adds a new task to the To Do list, the ToDo component will update since it's reciving new props.
// - On the other hand, what if we wanted to run an animation on the new to do?
// - If we just rendered the animation upon every render becuase it would run everytime the user toggled a task to complete, or delete a task.
// - Instead since Redux state managment is immutable, I can track the changes on the state, on only trugge the animation to run only when a new task is added. (so only when we add new task to the list?)

// REDUX AND IMMUTABLITY
// Q: Where are all state changes handled when using Redux?
// - The State Tree 🌳
// - The State Tree 🌳 is immutable and also reffred to as the store 🏪.
// - The state tree is where all the state changes are explicity handled by dispatching actions.
// - Dispatched actions are proccessed by a reducer that accepts the previous state and the action that returns the next state of the application. Think of this as sort of a little factory. Where everything is proceddes by the reducer that takes in the previous state and the the action that returns the state of the application.
// - It is also easy to predict which action will be dispatched based on some event or interaction.
// - The use of the state tree and understanding how state changes are handled by displatechd actions, is what leads to very predictable state managemnet.

// Q: Why will it seem tedious to write immutable code at first?
// - Becuase I will be builing very small apps with not much need for such code.
// - The state trees 🌳 will be rather small for this sprint.
// - Although when I start working with larger applications, with huge state trees, I will quicly grow to appriacte the wiriting of immutable code, and the extra effort it takes will seem worth very much worth it.
