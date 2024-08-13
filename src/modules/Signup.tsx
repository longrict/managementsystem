import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY

if (!supabaseUrl || !supabaseKey) {
    throw new Error(`Missing Supabase environment variables`);
  }

const supabase = createClient(supabaseUrl,supabaseKey);

export async function addUser (email:string, password:string){
    const { data, error } = await supabase.auth.signUp({email,password});

    if(error){
      console.error("Error creating user: ",error);
      return;
    }
    console.log("User created successfully: ", data);
    return data;
}
