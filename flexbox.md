# Flexbox

The [**CSS3 Flexible Box**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout), or flexbox, is a layout mode intended to accommodate different screen sizes and different display devices.

## Syntax

### Main properties

```css
.container {
  display: flex | inline-flex;
  flex-direction: row | row-reverse | column | column-reverse;
  justify-content: flex-start | flex-end | center | space-between | space-around;
  align-items: flex-start | flex-end | center | baseline | stretch;
}

.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

### Other properties

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
  flex-flow: <flex-direction> <flex-wrap>;
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}

.item {
  order: -integer-; /* default is 0 */
  flex-grow: -integer-; /* default is 0 */
  flex-shrink: -integer-; /* default is 1 */
  flex-basis: -length- | auto; /* default is auto */
  flex: <flex-grow> <flex-shrink> <flex-basis>;
}
```

## References

* [How Flexbox works](https://medium.freecodecamp.org/an-animated-guide-to-flexbox-d280cf6afc35)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
