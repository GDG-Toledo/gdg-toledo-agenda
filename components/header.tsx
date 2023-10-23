import Link from 'next/link';

const Header = () => {
  return (
    <h2 className="inline-flex mt-8 mb-20 text-3xl font-bold leading-normal tracking-tight md:text-4xl md:tracking-tighter">
      <img
        width="50"
        src="/assets/images/gdg-toledo.svg"
        alt="GDG Toledo logo"
      ></img>
      <Link href="/" className="hover:underline ms-2">
        The Agenda
      </Link>
      .
    </h2>
  );
};

export default Header;
