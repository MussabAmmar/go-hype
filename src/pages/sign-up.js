import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import supabase from '../../supabase/supabase';

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (type) => {

    try {
      const {data, error} = await supabase.auth.signUp({email, password});
      if (error) {
        alert("Error: ",error.message);
      }
      else {
        const tableName = type === "influencer" ? "influencers" : "businesses";
        await supabase.from(tableName).insert({user_id: data.user.id});
        alert("Sign up Successfull! Please login to continue.");
        console.log("User",user);
      }
      //router.push('/');
    } catch (error) {
      alert("Error: " , error.message);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center bg-gray-800 h-screen">
        <div className="w-1/3 text-white">
          <h1 className="text-2xl font-bold mb-4">Sign up</h1>
          <p className="mb-4">Top tier talent and exclusive gigs on a single platform. Find the perfect match for you!</p>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                placeholder='Email Address'
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-500 placeholder:text-white rounded-lg py-2 px-3"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-500 placeholder:text-white rounded-lg py-2 px-3"
                required
              />
            </div>
            <div className="flex flex-col justify-between space-y-3 mb-4">
              <button
                type="button"
                className="text-white bg-green-600 hover:bg-green-700 rounded-lg py-2 px-4"
                onClick={() => handleSignUp("business")}
              >
                Sign up as business
              </button>
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2 px-4"
                onClick={() => handleSignUp("influencer")}
              >
                Sign up as influencer
              </button>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
