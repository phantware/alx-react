## 0x06. React Immutable

### Tasks

0. Converting into an Immutable object using fromJS
   Copy the necessary config files specified in the description to the root directory of the project and execute npm install.

   In a file named 0-fromjs.js, create a function getImmutableObject that accepts object as a parameter and converts it into an immutable Map using fromJS of the Immutable.js library

   Example:

---

    {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
    }

---

Should return:

---

    Map {
     size: 4,
     _root: ArrayMapNode {
     ownerID: OwnerID {},
     entries: [ [Array], [Array], [Array], [Array] ]
     },
     __ownerID: undefined,
     __hash: undefined,
     __altered: false

}

---

1. Converting into Immutable using Map
   In 1-map.js, modify the function getImmutableObject using Map from Immutable.js

Example:

---

    {
     fear: true,
     smell: -1033575916.9145899,
     wall: false,
     thing: -914767132

}

---

2.
