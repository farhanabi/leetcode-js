# Problem 208. Implement Trie (Prefix Tree)

This folder contains a JavaScript solution to the LeetCode problem [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/). The problem requires us to implement a trie data structure.

## Problem Description

A [trie](https://en.wikipedia.org/wiki/Trie) (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

- `Trie()` Initializes the trie object.
- `void insert(String word)` Inserts the string `word` into the trie.
- `boolean search(String word)` Returns `true` if the string `word` is in the trie (i.e., was inserted before), and `false` otherwise.
- `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string `word` that has the prefix `prefix`, and `false` otherwise.

### Example 1:

```
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
```

## Solution

The solution uses a trie data structure to store the strings. The trie is represented as a tree of nodes. Each node has a `children` property that maps characters to child nodes. Each last node also has a `isEnd` property that indicates if the node represents the end of a word. For example, the trie that stores the strings `["apple", "app"]` is represented as:

```
root
└── a
    └── p
        └── p
            ├── l
            │   └── e
            │       └── isEnd: true
            └── isEnd: true
```

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the string. This is because the solution iterates through each character in the string.

The space complexity of this solution is O(n), because the solution creates a new node for each character in the string.
