import { Session } from '@supabase/supabase-js';

export type AuthTypes = {
  user: Session | null;
  setUser: React.Dispatch<React.SetStateAction<Session | null>>;
};
