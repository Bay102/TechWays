import { supabase } from '../supabaseConfig';

export const RegisterUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (!data.user) {
    throw new Error(`${error?.message}`);
  }

  if (error) {
    throw new Error(`${error?.message}`);
  }

  return data;
};
