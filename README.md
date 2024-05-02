# easy-row
A css3 grid page layout utility that is easy to use and understand.  No support for old browsers that don't support css3 grid.

## Modern CSS Grid
The css uses "fr" or fractional units to denote grid spacing.   There is also a base of code that provides for minimum width, so wrapping does not cause other items to overflow.

## Native Web Component helper
I wrote a basic Web Component (doesn't require any framework) to make it easy to use.

## Vue Component helper
I also wrote a simple Vue Component implementation.  This is not really needed, but I made it available.


# Usage
Include 
`<link type="text/css" rel="stylesheet" href="/js/easy-row/easy_row.css" />`
and
`<script src="/js/easy-row/easy_row.js" type="module" charset="utf-8"></script>`
and you are ready.

You can now use `<easy-row ratio="2-3" >` and  `<easy-row ratio="2-3" base="32">` in your html.    

A ratio of 2-3 is where there is a 5 column full width and 2 of the 5 are used by the first child `<div>` of `<easy-row>` and 3 of the 5 are used by the second child `<div>` (or `<span>`) of `<easy-row>`.

#### All elements within the tag (as children) are subject to alignment by the browser, but you may want to use `class="easy-item"` on children elements.

Or, with VueJS 2, something like
`  <easy-row :ratio="ratioVue" :base="baseVue">`
after declaring 
`  Vue.config.ignoredElements = ['easy-row'];`
in script.

# Available Ratios
1  
1-1  
1-1-1  
1-1-1-1  
1-2  
2-1  
1-3  
3-1  
2-3  
3-2  
1-4  
4-1  
1-5  
5-1  
### So, there are max 6 columns, but you can use nesting to make lots of combinations.

# Available Bases
There is base 0, which doesn't guarantee any minimum widths.  
There is base 16, for sections that should be about 16em wide.  The css provides some minimum widths.  
There is base 32, for areas about 32em wide.  

Just try it and see which one works for you.   Base 0 may be fine.  




