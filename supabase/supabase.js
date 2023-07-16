// supabase.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxvqhvzdgwrijcsrleca.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54dnFodnpkZ3dyaWpjc3JsZWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0ODIxODIsImV4cCI6MjAwNDA1ODE4Mn0.oTA_pbAruM4iLzQpTKZc8-xXCOjTD_zVxRm4dyhwI-0';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
