import { CirclePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='main-header bg-[#F3F3F3] px-10 py-5 flex items-center justify-between border-b-2 border-b-[#E4E4E4]'>
      <div className="main-header-title">
        <h1 className="text-[2.3rem] font-bold text-[#009A4B] -mt-2">Logo</h1>
      </div>
      <div className='navigation flex gap-4 items-center'>
        <ul className="flex gap-15 items-center">
          <Link to={'/'} className="relative nav-link text-[#009A4B] font-semibold text-[1.2rem] after:content-[''] after:w-full after:h-[0.2rem] after:absolute after:bg-[#009A4B] after:rounded-full after:left-0 after:-bottom-[2.1rem]">
            <div>Jobs</div>
          </Link>
          <li className=" relative nav-link text-[#000000] font-normal text-[1.2rem]">About us</li>
          <Link to={'/add/job'} className='post-job bg-[#00773A] py-3 pt-2.5 px-10 font-semibold text-[1.2rem] text-[#FFFFFF] rounded-full flex items-center gap-3 '><CirclePlus className='mt-0.5' />Post a job</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;