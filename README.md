# TODO list task

1. Create a new project using create-react-app by running the command npx create-react-app my-app.
2. Create a new component called "TodoList" in a new file called "TodoList.jsx" in the "src" folder. This component will be responsible for displaying the list of to-do items.
3. In the "TodoList" component, create a state variable called "items" that will store the list of to-do items, and use the useState hook to create it.
4. Create a form with an input field and a button that will allow users to add new items to the list. Use the useRef hook to store the value of the input.
5. Create a function that will handle the form submission and add the new item to the "items" state.
6. Use the "map" function to iterate over the "items" state and display each item in a list.
7. Create a button or link next to each item that will allow users to delete an item from the list. Use the useCallback hook to prevent unnecessary re-renders.
8. Create a function that will handle the deletion of an item and update the "items" state accordingly.
9. Add the ability to edit an item's text by double-clicking on the item.
10. Add the ability to mark an item as completed or not completed by clicking on the item.
11. Use the useEffect hook to persist the state in localStorage and restore it on page refresh.
12. Finally, render the "TodoList" component in the "App" component and test the application to make sure it is working as expected.
