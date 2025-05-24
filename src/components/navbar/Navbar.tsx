import { CirclePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='main-header bg-[#F3F3F3] px-10 py-6 flex items-center justify-between border-b-2 border-b-[#E4E4E4]'>
      <div className="main-header-title">
        <h1 className="text-[2.3rem] font-bold text-[#009A4B] -mt-2">Logo</h1>
      </div>
      <div className='navigation flex gap-4 items-center'>
        <ul className="flex gap-15 items-center">
          <Link to={'/'} className="nav-link text-[#009A4B] font-semibold text-[1.2rem]">Jobs</Link>
          <li className="nav-link text-[#000000] font-normal text-[1.2rem]">About us</li>
          <Link to={'/add/job'} className='post-job bg-[#00773A] py-3 pt-2.5 px-10 font-semibold text-[1.2rem] text-[#FFFFFF] rounded-full flex items-center gap-3'><CirclePlus className='mt-1' />Post job</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;