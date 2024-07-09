import {useState} from 'react'
import useEmailStore from "../store"
import { useNavigate } from 'react-router-dom';

const Form = () => {
const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const setEmailStore = useEmailStore((state) => state.setEmail);
  const navigate = useNavigate();



  const validateEmail = () =>{
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateEmail(email)){
      setIsValid(true);
      setEmailStore(email);
      navigate("/success")
    } else {
      setIsValid(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-10">
          <div className='flex justify-between'>
              <label htmlFor="email" className="text-xs font-bold">
                Email address
              </label >
              <label className={`text-xs font-bold text-tomato ${isValid ? 'hidden' : 'block'}`}>Valid email required</label>
          </div>
          <input
            type="email"
            value={email}
            placeholder='email@company.com'
            name="email"
            onChange={(e) => {setEmail(e.target.value)}}
            className={`border ${isValid ? 'border-grey' : 'border-tomato bg-tomato-bg text-tomato'} rounded-md p-4 my-2`}
          />
          <input
            type="submit"
            value="Subscribe to monthly newsletter"
            className="bg-dark-slate-grey text-white font-bold rounded-md p-4 my-2 cursor-pointer hover:bg-gradient-to-r hover:from-tomato hover:to-orange"
          />
        </form>
  )
}

export default Form