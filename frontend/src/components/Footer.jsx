const Footer = () => {
  return (
    <div className="bg-[#161717] text-gray-300 font-netflix text-sm px-6 sm:px-10 py-10">
      <p className="mb-6">Questions? Call 000-800-919-1743 (Toll-Free)</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-10 max-w-4xl">
        <p className="underline cursor-pointer">FAQ</p>
        <p className="underline cursor-pointer">Help Centre</p>
        <p className="underline cursor-pointer">Terms of Use</p>
        <p className="underline cursor-pointer">Privacy</p>
        <p className="underline cursor-pointer">Cookie Preferences</p>
        <p className="underline cursor-pointer">Corporate Information</p>
      </div>
    </div>
  );
};

export default Footer;
