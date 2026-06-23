import { createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, undefined, () => {
    const storedUser = localStorage.getItem('workoutBuddyUser');

    if (!storedUser) {
      return { user: null };
    }

    try {
      return { user: JSON.parse(storedUser) };
    } catch {
      localStorage.removeItem('workoutBuddyUser');
      return { user: null };
    }
  });

  useEffect(() => {
    if (state.user) {
      localStorage.setItem('workoutBuddyUser', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('workoutBuddyUser');
    }
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};