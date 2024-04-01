import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white font-bold text-xl">Shah and Anchor Kutcchi Engineering College</div>
        </Link>
        <ul className="flex space-x-9">
          <li>
            <Link href="/">
              <div className="text-white hover:underline">Home</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="text-white hover:underline">About Us</div>
            </Link>
          </li>
          <li>
            <Link href="/faculty">
              <div className="text-white hover:underline">Faculty</div>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <div className="text-white hover:underline">Projects</div>
            </Link>
          </li>
          <li>
            <Link href="/syllabus">
              <div className="text-white hover:underline">Syllabus</div>
            </Link>
          </li>
          <li>
            <Link href="/papers">
              <div className="text-white hover:underline">Papers</div>
            </Link>
          </li>
          <li>
            <Link href="/support">
              <div className="text-white hover:underline">Support</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
