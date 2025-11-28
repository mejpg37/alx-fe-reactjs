<<<<<<< HEAD
import UserProfile from './components/UserProfile'

function App() {
  return (
    <div className="App">
      <UserProfile />
    </div>
  )
}

export default App
=======
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <MainContent />
      
      {/* User Profiles Section */}
      <section style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '20px' }}>
          User Profiles
        </h2>
        <UserProfile 
          name="John Doe" 
          age={28} 
          bio="Software developer passionate about React and modern web technologies."
        />
        <UserProfile 
          name="Jane Smith" 
          age={32} 
          bio="UX designer with a focus on creating beautiful and functional user interfaces."
        />
      </section>
      
      {/* Counter Application Section */}
      <section style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '20px' }}>
          Interactive Components
        </h2>
        <Counter />
      </section>
      
      <Footer />
    </div>
  );
}

export default App; 
>>>>>>> cdbbdb17b0bdac585ec9bce303986344a1cc788d
