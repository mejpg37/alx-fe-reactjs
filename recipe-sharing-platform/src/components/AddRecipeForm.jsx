import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    ingredients: '',
    steps: '',
    prepTime: '',
    cookTime: '',
    servings: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Make sure we use event.target.value explicitly
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }
    
    if (!formData.summary.trim()) {
      newErrors.summary = 'Summary is required';
    }
    
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    }
    
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }
    
    if (!formData.prepTime.trim()) {
      newErrors.prepTime = 'Prep time is required';
    }
    
    if (!formData.cookTime.trim()) {
      newErrors.cookTime = 'Cook time is required';
    }
    
    if (!formData.servings.trim()) {
      newErrors.servings = 'Servings is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real app, you would send this to an API
    console.log('Form submitted:', formData);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setFormData({
        title: '',
        summary: '',
        image: '',
        ingredients: '',
        steps: '',
        prepTime: '',
        cookTime: '',
        servings: ''
      });
      // Redirect to home page
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Add New Recipe
        </h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Recipe Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          {/* Recipe Summary */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">
              Short Summary *
            </label>
            <textarea
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              rows="2"
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.summary ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Brief description of your recipe"
            />
            {errors.summary && (
              <p className="mt-1 text-sm text-red-600">{errors.summary}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
              Ingredients *
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.ingredients ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter each ingredient on a new line"
            />
            {errors.ingredients && (
              <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
            )}
          </div>

          {/* Preparation Steps */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
              Preparation Steps *
            </label>
            <textarea
              id="steps"
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              rows="6"
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.steps ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter step-by-step instructions"
            />
            {errors.steps && (
              <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
            )}
          </div>

          {/* Optional Fields */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Image URL (Optional)
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Cooking Times and Servings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prepTime">
                Prep Time *
              </label>
              <input
                type="text"
                id="prepTime"
                name="prepTime"
                value={formData.prepTime}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.prepTime ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="15 mins"
              />
              {errors.prepTime && (
                <p className="mt-1 text-sm text-red-600">{errors.prepTime}</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cookTime">
                Cook Time *
              </label>
              <input
                type="text"
                id="cookTime"
                name="cookTime"
                value={formData.cookTime}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.cookTime ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="30 mins"
              />
              {errors.cookTime && (
                <p className="mt-1 text-sm text-red-600">{errors.cookTime}</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="servings">
                Servings *
              </label>
              <input
                type="number"
                id="servings"
                name="servings"
                value={formData.servings}
                onChange={handleChange}
                min="1"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.servings ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="4"
              />
              {errors.servings && (
                <p className="mt-1 text-sm text-red-600">{errors.servings}</p>
              )}
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-6 border-t border-gray-200 flex justify-between">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 font-medium rounded-lg ${
                isSubmitting 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              } transition-colors`}
            >
              {isSubmitting ? 'Submitting...' : 'Add Recipe'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;