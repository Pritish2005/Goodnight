import React, { useState } from 'react'
import OAuth from '../components/OAuth'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signInStart,signInFailure,signInSuccess } from '../redux/user/userSlice'
import { useSelector } from 'react-redux'

export default function Signin() {
    const [formData, setFormData] = useState({

    });
 const navigate = useNavigate();
 const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user);
    const changeHandler = (e)=>{
        setFormData(
            {
                ...formData,
                [e.target.id] : e.target.value,
            }
        )

    }
    const handleSubmit = async (e)=>{
       e.preventDefault();
       try {
        
           dispatch(signInStart());
           const res = await fetch('/api/auth/signin',
            {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(formData),
            }
            
           );
            const data = await res.json();
            if (data.success === false) {
            dispatch(signInFailure(data.message));
            console.log(data);
            return;
        }
        dispatch(signInSuccess(data));
        navigate('/');
       } catch (error) {
         dispatch(signInFailure(error.message));
       }
}
console.log(formData);
// console.log(ep);

    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Log Into Your account</h2>
        <p className="text-gray-600 mb-6">Enter your credentials</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="email"
            id='email'
            placeholder="email@domain.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            onChange={changeHandler}
          />
          <input
            type="password"
            id='password'
            placeholder="Enter Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            onChange={changeHandler}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-md hover:opacity-75 disabled:opacity-80"
          >
            {loading? 'Logging IN...': 'Continue'}
          </button>
        </form>
         {error && <div style={{ color: 'red' }}>{error}</div>}
        <div className='flex gap-2 mt-5'>
        <p>Dont Have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
       </div>
        <div className="my-6 text-gray-600">or continue with</div>
        <OAuth/>
        <p className="mt-6 text-xs text-gray-600">
          By clicking continue, you agree to our{' '}
          <Link to={'/terms-of-service'}>
          <span className='text-black underline'>Terms of Service</span>
        </Link>
           
          and{' '}
          <Link to={'/privacy-policy'}>
          <span className='text-black underline'>Privacy Policy</span>
        </Link>
        </p>
      </div>
    </div>
    
  )
}