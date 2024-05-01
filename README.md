# easy-row
css3 grid page layout scheme that is easy to use and understand

## CSS
The css uses "fr" or fractional units to denote grid spacing.   There is also a base of code that provides for minimum width, so wrapping does not cause other items to overflow.

## native Web Component helper
I wrote a basic Web Component (doesn't require any framework) to make it easy to use.

## Vue Component helper
I also wrote a simple Vue Component implementation.  This is not really needed, but I made it available.


# Usage
Include 
<link type="text/css" rel="stylesheet" href="/js/easy-row/easy_row.css" />
<script src="/js/easy-row/easy_row.js" type="module" charset="utf-8"></script>
and you are ready.

You can now use
   <easy-row ratio="2-3" base="0">
in your html.

Or, with VueJS 2, something like
  <easy-row :ratio="ratioVue" :base="baseVue">
after declaring 
  Vue.config.ignoredElements = ['easy-row'];
in script.

