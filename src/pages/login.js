import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const Login = () => {
  const initialData = {
    email: '',
    password: ''
  }

  const router = useRouter();
  const [userData, setUserData] = useState(initialData);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const handleLogin = async () => {
    try {
    } catch (error) {

    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center bg-gray-800 h-screen">
        <div className="w-1/3 text-white">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <p className="mb-4">Top tier talent and exclusive gigs on a single platform. Find the perfect match for you!</p>

          <form>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder='Email Address'
                onChange={handleChange}
                className="w-full bg-gray-500 placeholder:text-white rounded-lg py-2 px-3"
                required
              />
            </div>
            <div className="">
              <input
                type="password"
                name="password"
                placeholder='Password'
                onChange={handleChange}
                className="w-full bg-gray-500 placeholder:text-white rounded-lg py-2 px-3"
                required
              />
            </div>
            <div className='w-full text-center text-sm text-gray-300 my-2'>
              <Link href=''>Forgot your password?</Link>
            </div>
            <div className="flex flex-col justify-between space-y-3 mb-4 mt-10">
              <button
                type="button"
                className="text-white bg-green-600 hover:bg-green-700 rounded-lg py-2 px-4"
                onClick={() => handleLogin}
              >
                Login
              </button>
              <div className='w-full text-center text-sm text-gray-300 my-2'>
                Dont have an account? <Link href='/sign-up' className='font-medium text-white underline'>Sing up</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
