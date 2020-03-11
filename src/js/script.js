const { Machine, actions, interpret } = XState; // global variable: window.XState

const lightMachine = Machine({
  // ...
});


const lightService = interpret(lightMachine);
