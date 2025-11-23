import { useRecipeStore } from './recipeStore'

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm)
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm)

  return (
    <div style={{ 
      margin: '20px 0', 
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      borderRadius: '8px',
      border: '1px solid #e9ecef'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <label htmlFor="search" style={{ 
          fontWeight: 'bold', 
          color: '#495057',
          whiteSpace: 'nowrap'
        }}>
          🔍 Search Recipes:
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ 
            padding: '10px 15px', 
            width: '100%', 
            border: '1px solid #ced4da', 
            borderRadius: '25px',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
          onFocus={(e) => e.target.style.borderColor = '#007bff'}
          onBlur={(e) => e.target.style.borderColor = '#ced4da'}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            style={{
              padding: '10px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>
      
      {searchTerm && (
        <div style={{ 
          marginTop: '10px', 
          fontSize: '14px', 
          color: '#6c757d',
          padding: '5px 10px'
        }}>
          Searching for: "<strong>{searchTerm}</strong>"
        </div>
      )}
    </div>
  )
}

export default SearchBar;