import { createContext, useContext, useEffect, useState } from 'react';
import { AuthTypes } from '../types';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../supabaseConfig';

const AuthContext = createContext({} as AuthTypes);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthProvider = () => useContext(AuthContext);
