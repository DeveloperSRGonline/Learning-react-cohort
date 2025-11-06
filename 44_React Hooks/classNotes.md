# React Function Component Notes

## Function Components
- A function component always returns JSX (HTML-like syntax).
- Defined as a JavaScript function that can contain any logic before the return.

## Arrow Function Syntax
- `const App = () => { … }`  
  - Anonymous fat-arrow function saved in the `App` variable.  
  - Wherever `<App />` is used, its return value (JSX) is rendered.

## Return Statement Rules
- You can write any JavaScript logic before the `return`.  
- A component must have exactly one `return`, and it must be the last statement.  
- The `return` can only output a single entity (value, variable, or JSX element).

## JSX and Function Calls
- JSX tags resemble XML and represent user-defined components.  
- A function call in JSX is replaced by its return value.

## Fragments
- Use empty tags `<>…</>` to group multiple JSX elements without adding extra DOM nodes.  
- Called fragment tags or empty tags.

---

## Event Listeners in React
- In plain JS:  
  ```js
  document.addEventListener('click', (e) => { … });
  ```
- In React JSX:  
  ```jsx
  <button onClick={handleClick}>Click</button>
  ```
  - Use camelCase prop names (e.g., `onClick`).  
  - Pass a reference to the handler (`handleClick`), not a call (`handleClick()`).

## JSX Expressions
- Embed JavaScript inside JSX with curly braces `{}`.  
- Example: `<h1>{2 + 3}</h1>` renders `5`.

## Non-Parameterized Event Handlers
- Syntax:  
  ```jsx
  <button onClick={handleClick}>Click</button>
  ```
- The function `handleClick` executes only when the user clicks the button.

## Parameterized Event Handlers
- To pass arguments without auto-invoking on render, wrap in an arrow function:  
  ```jsx
  <button onClick={() => handleParameter('Hello')}>
    Click (with params)
  </button>
  ```
- Directly writing `onClick={handleParameter('Hello')}` calls it immediately on render.  

---

Keep these points in mind to write clean, predictable React components and event handlers.
