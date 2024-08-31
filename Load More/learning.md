# Understanding the LoadMoreData Component

### Full Code Breakdown

### 1. **Imports and Component Setup**

```javascript
import { useEffect, useState } from "react";
import "./style.css";
```

**Explanation**:

- **`import { useEffect, useState } from "react";`**: We're bringing in React's `useEffect` and `useState` hooks to manage side effects and state in our component.
- **`import "./style.css";`**: This imports a CSS file to style our component.

### 2. **Component Declaration and State Initialization**

```javascript
export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
```

**Explanation**:

- **`export default function LoadMoreData()`**: This defines our main React component.
- **`const [loading, setLoading] = useState(false);`**: We create a `loading` state to track whether the data is currently being fetched.
- **`const [products, setProducts] = useState([]);`**: We create a `products` state to store the list of products fetched from the API.
- **`const [count, setCount] = useState(0);`**: We create a `count` state to keep track of how many times the "Load More Products" button has been clicked.
- **`const [disableButton, setDisableButton] = useState(false);`**: We create a `disableButton` state to disable the button once 100 products have been loaded.

### 3. **Fetching Products from the API**

```javascript
async function fetchProducts() {
  try {
    setLoading(true);
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );

    const result = await response.json();

    if (result && result.products && result.products.length) {
      setProducts((prevData) => [...prevData, ...result.products]);
      setLoading(false);
    }

    console.log(result);
  } catch (e) {
    console.log(e);
    setLoading(false);
  }
}
```

**Explanation**:

- **`async function fetchProducts()`**: This is an asynchronous function that fetches products from an external API.
- **`setLoading(true);`**: We set `loading` to `true` to indicate that data fetching has started.
- **`const response = await fetch(...)`**: We fetch products from the API. The API URL is dynamically adjusted to skip products based on the `count` (i.e., how many products we've already loaded).
- **`const result = await response.json();`**: We parse the API response into a JavaScript object.
- **`if (result && result.products && result.products.length)`**: We check if the API returned products. If so, we update the `products` state by appending the new products to the existing ones.
- **`setLoading(false);`**: We set `loading` to `false` to indicate that data fetching is complete.
- **`catch (e) { console.log(e); }`**: If an error occurs during the fetch, it is caught and logged.

### 4. **Fetching Products When the Component Loads or `count` Changes**

```javascript
useEffect(() => {
  fetchProducts();
}, [count]);
```

**Explanation**:

- **`useEffect(() => { fetchProducts(); }, [count]);`**: This hook runs the `fetchProducts` function whenever the `count` changes. Initially, `count` is `0`, so products are fetched when the component first loads. Each time the "Load More Products" button is clicked, `count` increases, triggering another fetch.

### 5. **Disabling the Button After 100 Products**

```javascript
useEffect(() => {
  if (products && products.length === 100) setDisableButton(true);
}, [products]);
```

**Explanation**:

- **`useEffect(() => { if (products.length === 100) setDisableButton(true); }, [products]);`**: This hook runs whenever the `products` array changes. It checks if 100 products have been loaded. If so, it disables the "Load More Products" button by setting `disableButton` to `true`.

### 6. **Displaying Loading State**

```javascript
if (loading) {
  return <div>Loading data! Please wait.</div>;
}
```

**Explanation**:

- **`if (loading)`**: If `loading` is `true`, the component displays a message saying "Loading data! Please wait." This happens while products are being fetched.

### 7. **Rendering the Products and Button**

```javascript
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
```

**Explanation**:

- **`return (...)`**: This part of the code is responsible for rendering the HTML-like structure that will appear on the screen.
- **Product Display**:
  - **`<div className="product-container">`**: This wraps all the products.
  - **`products.map((item) => (...))`**: This loops over each product and displays it in a `div` with an image (`<img>`) and a title (`<p>`).
- **Button Display**:
  - **`<button disabled={disableButton} onClick={() => setCount(count + 1)}>`**: This button is disabled when `disableButton` is `true`. When clicked, it increases `count` by 1, triggering the loading of more products.
  - **`{disableButton ? <p>You have reached to 100 products</p> : null}`**: If the button is disabled (i.e., 100 products are loaded), a message appears saying "You have reached 100 products."

---

### Now, Let's Combine This into a Markdown File

---

````markdown
# Understanding the LoadMoreData Component

## 1. Imports and Component Setup

```javascript
import { useEffect, useState } from "react";
import "./style.css";
```
````

**Explanation**:

- **`useEffect` and `useState`**: These are React hooks for managing side effects and state.
- **`"./style.css"`**: This imports a CSS file for styling.

## 2. Component Declaration and State Initialization

```javascript
export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
```

**Explanation**:

- **`LoadMoreData`**: The main component function.
- **State Variables**:
  - `loading`: Tracks if data is being fetched.
  - `products`: Stores fetched products.
  - `count`: Tracks button clicks.
  - `disableButton`: Disables the button after 100 products are loaded.

## 3. Fetching Products from the API

```javascript
async function fetchProducts() {
  try {
    setLoading(true);
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );

    const result = await response.json();

    if (result && result.products && result.products.length) {
      setProducts((prevData) => [...prevData, ...result.products]);
      setLoading(false);
    }

    console.log(result);
  } catch (e) {
    console.log(e);
    setLoading(false);
  }
}
```

**Explanation**:

- **`fetchProducts`**: An async function to get products from an API.
- **Key Steps**:
  - Start loading.
  - Fetch products.
  - Append products to existing ones.
  - Stop loading.
  - Handle errors.

## 4. Fetching Products When the Component Loads or `count` Changes

```javascript
useEffect(() => {
  fetchProducts();
}, [count]);
```

**Explanation**:

- **`useEffect` with `count`**: Fetches products on the first load and every time `count` changes (when "Load More Products" is clicked).

## 5. Disabling the Button After 100 Products

```javascript
useEffect(() => {
  if (products && products.length === 100) setDisableButton(true);
}, [products]);
```

**Explanation**:

- \*\*`useEffect` with `products

`\*\*: Disables the button after 100 products are loaded.

## 6. Displaying Loading State

```javascript
if (loading) {
  return <div>Loading data! Please wait.</div>;
}
```

**Explanation**:

- **`if (loading)`**: Shows a loading message while data is being fetched.

## 7. Rendering the Products and Button

```javascript
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
```

**Explanation**:

- **Product Display**:
  - Loops through and displays each product.
  - Includes an image and title.
- **Button Display**:
  - Button to load more products, disabled after 100 products.
  - Displays a message after the button is disabled.

```

---

This Markdown file breaks down each part of the code, explaining it in simple and basic language for easier understanding.
```
