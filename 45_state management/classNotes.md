# React Fundamentals: Data Types, Rendering JSON, and State Management

## Data Types in JSX

JSX supports embedding JavaScript expressions inside braces. Here’s how common data types behave when rendered:

| Data Type  | Example              | Rendered Output | Notes                                                    |
|------------|----------------------|-----------------|----------------------------------------------------------|
| Number     | `{12}`               | 12              | Renders the numeric value directly.                      |
| String     | `{"Hello"}`          | Hello           | Renders the string.                                      |
| Boolean    | `{true}`             | (nothing)       | Booleans are ignored in JSX output.                      |
| Null       | `{null}`             | (nothing)       | Nulls produce no output.                                 |
| Undefined  | `{undefined}`        | (nothing)       | Undefined is ignored.                                    |
| Array      | `{[1, "two", <b/>]}` | 1two  (bold)    | Elements are concatenated; non-renderable types ignored. |
| Object     | `{obj.name}`         | John            | Objects themselves can’t be rendered—access their props. |

Arrays can hold heterogeneous items (JSX, numbers, strings), but React filters out booleans, null, and undefined when mounting.

---

## Rendering JSON with `map`

When you have a JavaScript array of objects (often called “JSON” in frontend), you transform it into JSX elements with `.map()`:

1.  Use `.map()` to produce a new array of `<li>` or `<div>` elements.
2.  Pass a unique `key` prop to each item to help React track changes.
3.  Avoid `.forEach()` for rendering—it returns nothing.

```jsx
const people = [
  { id: 101, name: "John", age: 30 },
  { id: 102, name: "Jane", age: 25 },
  { id: 103, name: "Bob", age: 40 }
];

const listItems = people.map(person => (
  <li key={person.id}>
    {person.name}, age {person.age}
  </li>
));
```

- Never use array index as `key` for dynamic lists – it can cause UI bugs when items reorder.  
- Do all data processing (filter, sort, map) before the `return` to keep JSX clean.

---

## React’s Reconciliation and Keys

React compares the previous and next render trees to update only what changed. Keys are vital:

- Stable and unique across renders (e.g., database IDs).
- Help React avoid re-creating DOM nodes unnecessarily.
- Prevents issues like losing input focus or animation glitches.

---

## State Management with `useState`

The `useState` Hook lets you add state to functional components:

```jsx
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState("John");

  const changeName = () => {
    setUsername("Roy");
  };

  return (
    <div>
      <h1>Hello {username}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}
```

- `username` holds the current state (initially `"John"`).  
- `setUsername` schedules a state update; it’s asynchronous and batched.  
- To see the updated state immediately, use an effect:

```jsx
useEffect(() => {
  console.log("Username changed to:", username);
}, [username]);
```

- Always follow the Rules of Hooks: call them at the top level, never inside loops or conditionals.

---

## Best Practices & Extras

- Keep JSX free of heavy logic; compute data beforehand.  
- Name setter functions as `setXxx` to convey intent.  
- Use fragments (`<>…</>`) for grouping without extra DOM nodes.  
- Self-close tags when there’s no children: `<img />`, `<br />`.  
- Leverage conditional rendering with `&&` or ternaries:  
  ```jsx
  {isLoggedIn 
    ? <Dashboard /> 
    : <LoginForm />
  }
  ```
- Consider using PropTypes or TypeScript to catch type mismatches at compile time.  

---

Keep experimenting—understanding how React renders and updates your UI is key to building performant, maintainable applications!
