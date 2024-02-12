import { supabase } from '../supabaseConfig';

export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (!data.user) {
    throw new Error(`${error?.message}`);
  }
  return data;
};
