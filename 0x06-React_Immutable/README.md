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

Should return:

---

    Map {
    size: 4,
    \_root: ArrayMapNode {
    ownerID: OwnerID {},
    entries: [ [Array], [Array], [Array], [Array] ]
    },
    **ownerID: undefined,
    **hash: undefined,
    \_\_altered: false
    }

---

2. Accessing nested elements
   Given the function below, edit it to return the value of the object at the defined path

---

    export default function accessImmutableObject(object, array) {

}

---

- The first argument is a plain object
- The second one is an array containing a list of a path to some key in the object
- The function should return the value of the object at the defined path

Example:

---

    accessImmutableObject({
     name: {
          first: "Guillaume"
          last: "Salva"
     }

}, ['name', 'first'])

---

3. List and push
   In file 3-list.js, create these 2 functions:

---

    export function getListObject(array) {

}

---

---

    export function addElementToList(list, element) {

}

---

4.
