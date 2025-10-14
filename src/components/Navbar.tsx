const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-center gap-40 py-4 text-gray-700">
        <div className="ryan-logo flex gap-5">
          <img src="/logo.png" alt="Ryan Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold">Ryan Nicholas Purba</h1>
        </div>
        <ul className="flex gap-20 space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar