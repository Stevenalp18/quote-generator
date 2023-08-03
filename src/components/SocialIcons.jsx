import { useState, useRef } from "react";

const SocialIcons = () => {
  const githubIcon = useRef();
  const linkedInIcon = useRef();
  const mailIcon = useRef();
  const shareIcon = useRef();

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    githubIcon.current.classList.toggle("hidden");
    linkedInIcon.current.classList.toggle("hidden");
    mailIcon.current.classList.toggle("hidden");

    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <div className="fixed left-5 bottom-5 lg:bottom-10 flex flex-col gap-2">
        <button
          ref={githubIcon}
          className="hidden sm:block rounded-3xl font-['Agdasima'] rounded-3xl text-white bg-emerald-500/70 hover:bg-blue-400 hover:text-black animate__animated animate__bounceInUp"
        >
          <a href="https://github.com/Stevenalp18" target="_blank">
            <i className="fa-brands fa-lg fa-github w-full py-6 px-4" />
          </a>
        </button>
        <button
          ref={linkedInIcon}
          className="hidden sm:block rounded-3xl font-['Agdasima'] rounded-3xl text-white bg-emerald-500/70 hover:bg-blue-400 hover:text-black animate__animated animate__bounceInUp"
        >
          <a href="https://www.linkedin.com/in/stevenalp18" target="_blank">
            <i className="fa-brands fa-lg fa-linkedin py-6 px-4" />
          </a>
        </button>
        <button
          ref={mailIcon}
          className="hidden sm:block rounded-3xl font-['Agdasima'] rounded-3xl text-white bg-emerald-500/70 hover:bg-blue-400 hover:text-black animate__animated animate__bounceInUp"
        >
          <a href="mailto:stevenalp18@gmail.com" target="_blank">
            <i className="fa-regular fa-lg fa-envelope py-6 px-4" />
          </a>
        </button>
        <button
          ref={shareIcon}
          onClick={handleToggle}
          className="sm:hidden rounded-3xl font-['Agdasima'] rounded-3xl text-white bg-blue-500/70 hover:bg-blue-400 active:bg-blue-600 hover:text-black"
        >
          <i className="fa-solid fa-lg fa-share-nodes py-6 px-4" />
        </button>
      </div>
    </>
  );
};

export default SocialIcons;
