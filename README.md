# React Advanced Patterns - Render Props Practice

## Project Overview

This repository contains a small React project designed to practice **advanced React patterns**, with a specific focus on the **Render Props** pattern. The goal of the project was to deepen my understanding of how to share logic between components in a clean, reusable, and flexible way, using Render Props as the core pattern.

The Render Props pattern allows for better separation of concerns by enabling a child component to share its state or logic with a parent component via a function, which can then control the rendering of the UI. By passing a `render` function as a prop, the child component can dynamically pass data to the parent, making it a powerful tool for building reusable, composable components.

## Key Concepts Covered

- **Render Props Pattern**: A pattern where a function is passed as a prop to a component, allowing the parent to customize the rendering logic based on the state or data provided by the child.
- **Component Reusability**: Sharing logic between components without repeating it, making components more reusable and modular.
- **Separation of Concerns**: Keeping business logic separate from UI rendering, allowing for greater flexibility and maintainability.

## Features

- **Mouse Tracking Example**: The project includes a simple example that demonstrates how to track the mouse position on the screen using the Render Props pattern. The `MouseTracker` component tracks the mouse position and passes the data to a render function, which can then be used to display the position in the UI.
- **Dynamic Lists of Products and Companies**: The project demonstrates the use of the Render Props pattern to display dynamic lists. The `List` component receives an array of products and companies and uses the `render` function to pass each item to child components, such as `ProductItem` and `CompanyItem`. The `CompanyItem` component can display items with customizable visibility.
- **Dynamic Rendering**: Both the `MouseTracker` and `List` components are decoupled from their rendering logic, allowing the parent component to define how the data should be displayed.

## How to Run the Project

Clone this repository and try it:

   ```bash
   git clone https://github.com/yourusername/react-advanced-patterns-render-props.git
   cd react-advanced-patterns-render-props
   npm install
   npm run dev
   ```


   

