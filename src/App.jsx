import Navbar from './components/Navbar';
import Login from './pages/Login';
import ChatRoom from './pages/ChatRoom';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './routes/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} /> 
        <Route
         path='/ChatRoom'
         element={
         <PrivateRoute > 
           <ChatRoom />
         </PrivateRoute>
        } /> 
          
        
      </Routes>
    </AuthProvider>
  );
}

export default App;
