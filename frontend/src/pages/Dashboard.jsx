const Dashboard = () => {
  const profiles = [
    { img: "./profile_1.png", name: "User1" },
    { img: "./profile_3.png", name: "User2" },
    { img: "./profile_2.png", name: "User3" },
    { img: "./kids.png", name: "Kids" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-semibold mb-10 font-netflix text-center">
        Who's Watching?
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {profiles.map((profile, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={profile.img}
              alt={profile.name}
              className="w-24 md:w-32 rounded-sm cursor-pointer hover:scale-105 transition-transform"
            />
            <p className="mt-2 text-sm text-gray-300 font-netflix cursor-pointer">
              {profile.name}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-16 px-4 py-2 border border-gray-400 text-gray-300 hover:text-white transition-all duration-150">
        Manage Profiles
      </button>
    </div>
  );
};

export default Dashboard;
