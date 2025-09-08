// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <div className="App">// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './WelcomeMessage';

function App() {
    return (
        <div className="App">
            <Header />
            <WelcomeMessage />
            <MainContent />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <Footer />
        </div>
    );
}

export default App;
            <Header />
            <MainContent />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <Footer />
        </div>
    );
}

export default App;
