import "boxicons/css/boxicons.min.css";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between lg:mt-[15%] mt-[25%] py-8 lg-px-32 md:px-16 px-8 border-t-[0.3px] border-[#babaff]">
      <img className="h-10" src="public\images\illu-text.png" alt="" />

      <img className="h-16" src="public\images\illu-logo.png" alt="" />

      <div className="flex gap-4 ">
        <a
          className="md:text-3xl text-2xl hover:text-violet-600 duration-300 "
          href="#"
        >
          <i class="bx bxl-github"></i>
        </a>

        <a
          className="md:text-3xl text-2xl hover:text-violet-600 duration-300 "
          href="#"
        >
          <i class='bx bxs-balloon' ></i>
        </a>

        <a
          className="md:text-3xl text-2xl hover:text-violet-600 duration-300 "
          href="#"
        >
         <i class='bx bxl-instagram-alt' ></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
