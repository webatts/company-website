import './App.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  const signout = () => {
    localStorage.clear();
    navigate('/signin');
  }
  return (
     	<div className='h-[100vh] bg-gray-500'>
			<div className='mx-auto px-[15px] md:px-[75px]  py-4 text-white flex items-center justify-between bg-[#1C3F55] w-[100%]'>
				<div className='flex justify-between w-[100%]'>
					<div className='flex justify-between xss:w-full sm:w-auto xss:mb-2 sm:mb-0'>
								<Link to='/signin'>
									Sign In
								</Link>
					</div>
          <div onClick={signout} className='cursor-pointer'>
             sign Out
          </div>
				</div>
			</div>
       {
        <Outlet></Outlet>
       }
		</div>
  )
}

export default App
