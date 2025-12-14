import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

// Test 1: Initial render test
test('renders initial todos', () => {
  render(<TodoList />);
  
  // Check that initial todos are rendered
  expect(screen.getByText('Learn React Testing')).toBeInTheDocument();
  expect(screen.getByText('Build Todo App')).toBeInTheDocument();
  expect(screen.getByText('Write Tests')).toBeInTheDocument();
  
  // Check that stats are displayed
  expect(screen.getByText('Total: 3')).toBeInTheDocument();
  expect(screen.getByText('Completed: 1')).toBeInTheDocument();
  expect(screen.getByText('Pending: 2')).toBeInTheDocument();
});

// Test 2: Adding a new todo
test('adds a new todo', () => {
  render(<TodoList />);
  
  // Get the input and button
  const input = screen.getByPlaceholderText('Enter a new todo...');
  const addButton = screen.getByText('Add Todo');
  
  // Add a new todo
  fireEvent.change(input, { target: { value: 'New Test Todo' } });
  fireEvent.click(addButton);
  
  // Check new todo is added
  expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  
  // Check stats updated
  expect(screen.getByText('Total: 4')).toBeInTheDocument();
});

// Test 3: Toggling a todo
test('toggles todo completion', () => {
  render(<TodoList />);
  
  // Find the checkbox for the first todo
  const checkboxes = screen.getAllByRole('checkbox');
  const firstTodoCheckbox = checkboxes[0];
  
  // Initially not checked (first todo is not completed)
  expect(firstTodoCheckbox).not.toBeChecked();
  
  // Click to toggle
  fireEvent.click(firstTodoCheckbox);
  
  // Should now be checked
  expect(firstTodoCheckbox).toBeChecked();
  
  // Click again to toggle back
  fireEvent.click(firstTodoCheckbox);
  expect(firstTodoCheckbox).not.toBeChecked();
});

// Test 4: Deleting a todo
test('deletes a todo', () => {
  render(<TodoList />);
  
  // Get all delete buttons
  const deleteButtons = screen.getAllByText('Delete');
  const firstDeleteButton = deleteButtons[0];
  
  // Click delete button for first todo
  fireEvent.click(firstDeleteButton);
  
  // Verify the todo was deleted
  expect(screen.queryByText('Learn React Testing')).not.toBeInTheDocument();
  
  // Verify remaining todos
  expect(screen.getByText('Build Todo App')).toBeInTheDocument();
  expect(screen.getByText('Write Tests')).toBeInTheDocument();
  
  // Verify stats updated
  expect(screen.getByText('Total: 2')).toBeInTheDocument();
});

// Test 5: Adding empty todo (should not add)
test('does not add empty todo', () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText('Enter a new todo...');
  const addButton = screen.getByText('Add Todo');
  
  // Try to add empty todo
  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(addButton);
  
  // Should not add new todo, total should remain 3
  expect(screen.getByText('Total: 3')).toBeInTheDocument();
});

// Test 6: Form submission prevents default
test('form submission prevents default', () => {
  render(<TodoList />);
  
  const form = screen.getByRole('form');
  const preventDefault = jest.fn();
  
  // Mock form submission
  fireEvent.submit(form, { preventDefault });
  
  // Check that preventDefault was called
  expect(preventDefault).toHaveBeenCalled();
});