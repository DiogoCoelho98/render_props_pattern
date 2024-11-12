import { useState, createContext, useContext } from "react";

// 1) CREATE A CONTEXT
const Counter_Context = createContext();

// 2) CREATE PARENT COMPONENT
export default function Counter({ children }) {
  const [counter, set_counter] = useState(0);
  const counter_increase = () => set_counter((counter) => counter + 1);
  const counter_decrease = () => set_counter((counter) => counter - 1);
  return (
    <Counter_Context.Provider
      value={{ counter_increase, counter_decrease, counter }}
    >
      <span>{children}</span>
    </Counter_Context.Provider>
  );
}

// 3) CREATE CHILD COMPONENT THAT WILL HELP WITH THE COMMON TASK
function Count() {
  const { counter } = useContext(Counter_Context);
  return <span>{counter}</span>;
}
function Label({ children }) {
  return <span>{children}</span>;
}
function Count_Increase({ icon }) {
  const { counter_increase } = useContext(Counter_Context);
  return <button onClick={counter_increase}>{icon}</button>;
}
function Count_Decrease({ icon }) {
  const { counter_decrease } = useContext(Counter_Context);
  return <button onClick={counter_decrease}>{icon}</button>;
}

// 4) ADD CHILD COMPONENT AS PROPERTIES TO THE PARENT COMPONENT
Counter.Count = Count;
Counter.Label = Label;
Counter.Count_Increase = Count_Increase;
Counter.Count_Decrease = Count_Decrease;
