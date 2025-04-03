import { useState, useEffect, ChangeEvent, FC } from 'react';

// Define the component using React.FC (Functional Component) for type safety
const TaskBoard: FC = () => {
  // State for the input field value - explicitly typed as string
  const [inputValue, setInputValue] = useState<string>('');
  // State for the currently stored/displayed task - explicitly typed as string
  const [currentTask, setCurrentTask] = useState<string>(''); // Initialize empty, effect will load

  // Effect 1: Load task from localStorage on initial component mount
  useEffect(() => {
    const savedTask: string | null = localStorage.getItem('focusTask');
    if (savedTask) {
      setCurrentTask(savedTask);
    } else {
      setCurrentTask('No task set'); // Default message if nothing is saved
    }
  }, []); // Runs only once on mount

  // Effect 2: Update document title whenever currentTask changes
  useEffect(() => {
    if (currentTask && currentTask !== 'No task set') {
      document.title = `Focus: ${currentTask}`;
    } else {
      document.title = 'My Focus App'; // Default title
    }
  }, [currentTask]); // Runs when currentTask changes

  // Handler for input field changes - event is explicitly typed
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  // Handler for saving the task - explicit void return type
  const handleSetTask = (): void => {
    if (inputValue.trim()) {
      localStorage.setItem('focusTask', inputValue);
      setCurrentTask(inputValue);
      setInputValue('');
    }
  };

  // Handler for clearing the task - explicit void return type
  const handleClearTask = (): void => {
    localStorage.removeItem('focusTask');
    setCurrentTask('No task set');
    setInputValue('');
    document.title = "Let's crush it!"; // Reset title immediately
  };

  return (
    // Outer container with padding and max-width for centering/readability
    <div className="max-w-lg mx-auto p-6 space-y-4">
      {/* Main Heading with font size/weight and bottom margin */}
      <h1 id="board-title" className="text-2xl font-semibold mb-4">
        Your current Task:
      </h1>

      {/* Current Task Display with vertical spacing */}
      <div className="mb-5">
        <span className="text-gray-600 mr-2">Current Task:</span>
        {/* Using a span for the task text itself for potential future styling */}
        <span className="text-xl font-medium">{currentTask}</span>
      </div>

      {/* Container for input and buttons using flexbox */}
      {/* space-x-2 adds horizontal space between child elements */}
      <div className="flex items-center space-x-2">
        {/* Input field taking available space, with padding, border, rounded corners, and focus styles */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your new focus task"
          aria-label="New focus task"
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        {/* Button styles: padding, border, rounded corners, subtle hover/focus */}
        <button
          onClick={handleSetTask}
          className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 whitespace-nowrap"
        >
          Set Task
        </button>
        <button
          onClick={handleClearTask}
          className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 whitespace-nowrap"
          // Removed inline style, space-x-2 on parent handles spacing
        >
          Clear Task
        </button>
      </div>
    </div>
  );
};

export default TaskBoard;
