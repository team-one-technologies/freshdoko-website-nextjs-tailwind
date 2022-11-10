const PageLayout = ({ children }) => {
  return (
    <div className=" h-[90%] font-sans text-gray-900 ">
      {/* <div className="flex  bg-red-800 flex-wrap-reverse gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 "> */}
      <div className="flex flex-wrap-reverse gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl ">
        <div className="  z-10  mt-32">
          {/* <NavBar /> */}
          {children}
          {/* <Footer/> */}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
