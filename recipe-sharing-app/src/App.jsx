import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
        <header style={{ marginBottom: '30px', borderBottom: '2px solid #007bff', paddingBottom: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 style={{ 
              textAlign: 'center', 
              color: '#007bff', 
              margin: 0,
              fontSize: '2.5rem'
            }}>
              🍳 Recipe Sharing Application
            </h1>
          </Link>
          <nav style={{ textAlign: 'center', marginTop: '10px' }}>
            <Link 
              to="/" 
              style={{ 
                color: '#666', 
                textDecoration: 'none',
                fontSize: '16px'
              }}
            >
              Home
            </Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={
            <main style={{ maxWidth: '800px', margin: '0 auto' }}>
              <AddRecipeForm />
              <SearchBar />
              <FavoritesList />
              <RecommendationsList />
              <RecipeList />
            </main>
          } />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;