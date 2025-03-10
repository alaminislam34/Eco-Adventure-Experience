const Footer = () => {
  return (
    <footer className="footer footer-center gap-4 bg-black/50 text-[#F5F5F5] p-6 z-10 relative">
      <h3
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        className="text-darkPri font-bold font-merienda my-4 md:my-6 text-xl md:text-2xl lg:text-3xl"
      >
        Eco Adventure
      </h3>
      <nav className="FooterText md:w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-start md:justify-between items-start gap-6">
        <div
          className="flex flex-col text-left gap-2 justify-start w-full"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <h4 className="text-base md:text-lg font-semibold">Services</h4>
          <a className="hover:underline hover:text-[#FFEB3B] text-xs md:text-sm lg:text-base cursor-pointer">
            Guided Nature Tours
          </a>
          <a className="hover:underline hover:text-[#FFEB3B] text-xs md:text-sm lg:text-base cursor-pointer">
            {" "}
            Adventure Trekking & Camping
          </a>
          <a className="hover:underline hover:text-[#FFEB3B] text-xs md:text-sm lg:text-base cursor-pointer">
            {" "}
            Wildlife Safaris
          </a>
          <a className="hover:underline hover:text-[#FFEB3B] text-xs md:text-sm lg:text-base cursor-pointer">
            Kayaking & River Adventures
          </a>
          <a className="hover:underline hover:text-[#FFEB3B] text-xs md:text-sm lg:text-base cursor-pointer">
            Eco-Friendly Accommodation
          </a>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          className="flex flex-col gap-2 text-left w-full"
        >
          <h4 className="text-base md:text-lg font-semibold">Quick Links</h4>
          <a className="hover:underline hover:text-[#FFEB3B] cursor-pointer">
            Home
          </a>
          <a className="hover:underline hover:text-[#FFEB3B] cursor-pointer">
            About
          </a>
          <a className="hover:underline hover:text-[#FFEB3B] cursor-pointer">
            Profile
          </a>
        </div>
        <ul
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          className="flex flex-col gap-2 text-left w-full"
        >
          <li className="text-base md:text-lg font-semibold">Contact Info</li>
          <p></p>
          <p>Street 238,52</p>
          <p>
            tempor Donec ultricies mattis nulla,
            <br /> suscipit risus tristique ut.
          </p>
          <p> Phone: 1.800.555.6789 </p>
          <p>E-mail: demo@sitename.com</p>
          <p> Website: sktthemes.org</p>
        </ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 *:cursor-pointer">
          <a className="hover:text-[#FFEB3B]  duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a className="hover:text-[#FFEB3B]  duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a className="hover:text-[#FFEB3B]  duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
        <aside className="mt-2">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Developer Al amin
          </p>
        </aside>
      </nav>
    </footer>
  );
};

export default Footer;
