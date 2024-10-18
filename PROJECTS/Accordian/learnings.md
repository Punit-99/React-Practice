# Single Select

The idea is that when a user clicks on an accordion item, the index associated with that item is passed to the `setSelected` state, which updates the `selected` state to that index. When the `selected` index matches the `item.id`, the corresponding answer is shown.

# Conditional Rendering

```javascript
selected === dataItem.id && <div className="content">{dataItem.answer}</div>;
```


# MultiSelect

In the multi-select implementation, we use `[multiple, setMultiple]` with an initial empty array `[]`. When a user clicks on an accordion item, the ID associated with the item is passed to the `handleMultiSelection` function.

1. First, the `multiple` array is copied to avoid mutating the original array.
2. Then, the function checks whether the current ID is already present in the `multiple` array using the `indexOf` method.
3. If the ID is not present (`indexOf` returns `-1`), the ID is pushed into the array; otherwise, it is removed from the array using the `splice` method.
4. Finally, the updated array is set back into the `setMultiple` state: `setMultiple(copyMultiple);`.

# Multi-Select Button

A button is placed to enable or disable multi-selection mode. It toggles the state using `!multiSelectButton`, which switches the current state to its opposite.

### Conditional Logic

```javascript
enableMultiSelection
  ? () => handleMultiSelection(dataItem.id)
  : () => handleSingleSelection(dataItem.id);
```

### Conditional Rendering

```javascript
enableMultiSelection
  ? multiple.includes(dataItem.id) && (
      <div className="content">{dataItem.answer}</div>
    )
  : selected === dataItem.id && (
      <div className="content">{dataItem.answer}</div>
    );
```
