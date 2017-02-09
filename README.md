# find-by-words
A solution for finding words started by a string. It works well on both front-end and back-end.

## How does it work?
This implementation is inspired by the [binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm). Like the famous algorithm, this solution uses the divide-and-conquer strategy and when it finds the first item, it searches for items on the left and right, stopping the loop when the first attempt fails.

## Installation
```shell
npm install find-by-words
```

## How to use?
```js
findByWords(['python', 'ruby', 'java', 'javascript', 'lua'], 'java');
// output: ['java', 'javascript']
```

