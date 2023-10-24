import Link from 'next/link';

const Header = () => {
    return (
        <div className='md:flex md:items-center md:justify-between'>
            <div className='flex-1 min-w-0'>
                <h2 className='inline-flex mt-8 mb-20 text-3xl font-bold leading-normal tracking-tight md:text-4xl md:tracking-tighter'>
                    <img
                        width='50'
                        src='/assets/images/gdg-toledo.svg'
                        alt='GDG Toledo logo'
                    ></img>
                    <Link href='/' className='hover:underline ms-2'>
                        The Agenda
                    </Link>
                    .
                </h2>
            </div>
            <nav className='flex items-center justify-between mt-8 mb-20'>
                <button
                    type='button'
                    className='inline-flex items-center px-3 py-2 text-sm font-semibold rounded-md shadow-sm bg-white/10 hover:bg-white/20 ring-1 ring-inset ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                >
                    More Stories
                </button>
                <button
                    type='button'
                    className='inline-flex items-center px-3 py-2 ml-3 text-sm font-semibold text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                >
                    Calendar
                </button>
            </nav>
        </div>
    );
};

export default Header;
