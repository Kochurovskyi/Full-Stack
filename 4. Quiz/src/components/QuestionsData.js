const data = {
  questions: [
    {
      question: "Which company invented React?",
      options: ["Google", "Apple", "Netflix", "Facebook"],
      correctOption: 3,
      points: 10,
    },
    {
      question: "What's the fundamental building block of React apps?",
      options: ["Components", "Blocks", "Elements", "Effects"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "What's the name of the syntax we use to describe the UI in React components?",
      options: ["FBJ", "Babel", "JSX", "ES2015"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How does data flow naturally in React apps?",
      options: [
        "From parents to children",
        "From children to parents",
        "Both ways",
        "The developers decides",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "How to pass data into a child component?",
      options: ["State", "Props", "PropTypes", "Parameters"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "When to use derived state?",
      options: [
        "Whenever the state should not trigger a re-render",
        "Whenever the state can be synchronized with an effect",
        "Whenever the state should be accessible to all components",
        "Whenever the state can be computed from another state variable",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question: "What triggers a UI re-render in React?",
      options: [
        "Running an effect",
        "Passing props",
        "Updating state",
        "Adding event listeners to DOM elements",
      ],
      correctOption: 2,
      points: 20,
    },
    {
      question: 'When do we directly "touch" the DOM in React?',
      options: [
        "When we need to listen to an event",
        "When we need to change the UI",
        "When we need to add styles",
        "Almost never",
      ],
      correctOption: 3,
      points: 20,
    },
    {
      question: "In what situation do we use a callback to update state?",
      options: [
        "When updating the state will be slow",
        "When the updated state is very data-intensive",
        "When the state update should happen faster",
        "When the new state depends on the previous state",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question:
        "If we pass a function to useState, when will that function be called?",
      options: [
        "On each re-render",
        "Each time we update the state",
        "Only on the initial render",
        "The first time we update the state",
      ],
      correctOption: 2,
      points: 30,
    },
    {
      question:
        "Which hook to use for an API request on the component's initial render?",
      options: ["useState", "useEffect", "useRef", "useReducer"],
      correctOption: 1,
      points: 10,
    },
    {
      question:
        "Which variables should go into the useEffect dependency array?",
      options: [
        "Usually none",
        "All our state variables",
        "All state and props referenced in the effect",
        "All variables needed for clean up",
      ],
      correctOption: 2,
      points: 30,
    },
    {
      question: "An effect will always run on the initial render.",
      options: [
        "True",
        "It depends on the dependency array",
        "False",
        "In depends on the code in the effect",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question:
        "When will an effect run if it doesn't have a dependency array?",
      options: [
        "Only when the component mounts",
        "Only when the component unmounts",
        "The first time the component re-renders",
        "Each time the component is re-rendered",
      ],
      correctOption: 3,
      points: 20,
    },
    {
      question:
        "What is the command to create a new React app using Create React App?",
      options: [
        "npx create-react-app my-app",
        "npm create-react-app my-app",
        "npx create-react my-app",
        "npm create-react my-app",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Which method is used to render a React element into the DOM?",
      options: [
        "ReactDOM.render()",
        "React.render()",
        "ReactDOM.create()",
        "React.create()",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "What is the default port number for a React app started with Create React App?",
      options: ["3000", "8080", "5000", "4000"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "Which lifecycle method is called after a component is rendered for the first time?",
      options: [
        "componentDidMount",
        "componentWillMount",
        "componentDidUpdate",
        "componentWillUpdate",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "What is the purpose of the key prop in React?",
      options: [
        "To uniquely identify elements in a list",
        "To set the state of a component",
        "To pass data to child components",
        "To trigger re-renders",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Which hook is used to manage state in a functional component?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What does the useEffect hook do?",
      options: [
        "Manages state",
        "Performs side effects",
        "Handles context",
        "Manages refs",
      ],
      correctOption: 1,
      points: 20,
    },
    {
      question: "How do you create a ref in a functional component?",
      options: ["useRef()", "createRef()", "useState()", "useEffect()"],
      correctOption: 0,
      points: 20,
    },
    {
      question:
        "Which hook would you use to optimize performance by memoizing a value?",
      options: ["useMemo", "useCallback", "useEffect", "useState"],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What is the purpose of the useReducer hook?",
      options: [
        "To manage complex state logic",
        "To perform side effects",
        "To handle context",
        "To create refs",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What is the second argument of the useEffect hook?",
      options: [
        "Dependency array",
        "Initial state",
        "Callback function",
        "Cleanup function",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "How do you provide a context value to a component tree?",
      options: [
        "<Context.Provider>",
        "<Context.Consumer>",
        "useContext()",
        "useReducer()",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What is the purpose of the useContext hook?",
      options: [
        "To consume context values",
        "To create context",
        "To manage state",
        "To perform side effects",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "Which hook would you use to memoize a callback function?",
      options: ["useCallback", "useMemo", "useEffect", "useState"],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What is the purpose of the useRef hook?",
      options: [
        "To create a mutable ref object",
        "To manage state",
        "To perform side effects",
        "To handle context",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question:
        "What is the correct way to update state based on the previous state?",
      options: [
        "setState(prevState => ...)",
        "setState(...)",
        "useEffect(...)",
        "useState(...)",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How do you prevent a useEffect from running on every render?",
      options: [
        "By providing a dependency array",
        "By using useMemo",
        "By using useCallback",
        "By using useRef",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "What is the purpose of the cleanup function in useEffect?",
      options: [
        "To clean up side effects",
        "To update state",
        "To handle context",
        "To create refs",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How do you conditionally apply a class in React?",
      options: [
        "Using a ternary operator",
        "Using an if statement",
        "Using a switch statement",
        "Using a for loop",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "What is the purpose of the useLayoutEffect hook?",
      options: [
        "To perform side effects after DOM updates",
        "To manage state",
        "To handle context",
        "To create refs",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How do you handle forms in React?",
      options: [
        "Using controlled components",
        "Using uncontrolled components",
        "Using refs",
        "All of the above",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question: "What is the purpose of the useImperativeHandle hook?",
      options: [
        "To customize the instance value that is exposed when using refs",
        "To manage state",
        "To perform side effects",
        "To handle context",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How do you handle errors in React components?",
      options: [
        "Using error boundaries",
        "Using try-catch",
        "Using useEffect",
        "Using useState",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "What is the purpose of the useDebugValue hook?",
      options: [
        "To display a label for custom hooks in React DevTools",
        "To manage state",
        "To perform side effects",
        "To handle context",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How do you optimize performance in React applications?",
      options: [
        "Using React.memo",
        "Using useCallback",
        "Using useMemo",
        "All of the above",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question: "What is the purpose of the useTransition hook?",
      options: [
        "To manage state transitions",
        "To perform side effects",
        "To handle context",
        "To create refs",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How do you handle asynchronous operations in React?",
      options: [
        "Using useEffect",
        "Using useState",
        "Using useReducer",
        "Using useRef",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "What is the purpose of the useDeferredValue hook?",
      options: [
        "To defer updates to a value",
        "To manage state",
        "To perform side effects",
        "To handle context",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How do you handle routing in React applications?",
      options: [
        "Using React Router",
        "Using useState",
        "Using useEffect",
        "Using useContext",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "What is the purpose of the useId hook?",
      options: [
        "To generate unique IDs for accessibility",
        "To manage state",
        "To perform side effects",
        "To handle context",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How do you handle global state in React applications?",
      options: [
        "Using Context API",
        "Using useState",
        "Using useEffect",
        "Using useRef",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "What is the purpose of the useSyncExternalStore hook?",
      options: [
        "To subscribe to an external store",
        "To manage state",
        "To perform side effects",
        "To handle context",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How do you handle animations in React applications?",
      options: [
        "Using CSS transitions",
        "Using React Transition Group",
        "Using Framer Motion",
        "All of the above",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question: "What is the purpose of the useInsertionEffect hook?",
      options: [
        "To insert styles into the DOM",
        "To manage state",
        "To perform side effects",
        "To handle context",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How do you handle accessibility in React applications?",
      options: [
        "Using ARIA attributes",
        "Using semantic HTML",
        "Using useId",
        "All of the above",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question:
        "What is the default port number for a React app started with Create React App?",
      options: ["3000", "8080", "5000", "4000"],
      correctOption: 0,
      points: 10,
    },
  ],
};
export default data;
