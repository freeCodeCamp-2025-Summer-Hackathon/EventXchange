import { useState }  from "react";



const Settings = () => {
    const [username, setUsername] = useState("Current_Username");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [profilePreview, setProfilePreview] = useState(null);

    const handleProfileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setProfilePreview(URL.createObjectURL(file));
      }
    };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">User Settings</h1>

      <form className="space-y-6">

        <div>
          <label className="block font-semibold mb-1">Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-gray-200 p-2 rounded"></input>
        </div>

        <div>
          <label className="block font-semibold mb-11">New Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-200 p-2 rounded"></input>
        </div>

        <div>
          <label className="block font-semibold mb-11">Confirm New Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-200 p-2 rounded"></input>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="w-32 h-32 rounded-full oveflow-hidden bg-gray-100">
            {profilePreview ? (
              <img src={profilePreview} alt="Profile" className="w-full h-full object-cover"/>
            ):(
              <div className="w-full h-full bg-[url('/default-profile.svg')] bg-center bg-cover"></div>
            )}
          </div>
          <label className="text-white bg-sky-500 px-4 py-2 rounded cursor-pointer">Upload New Profile Picture <input type="file" accept="image/*" className="hidden" onChange={handleProfileChange}></input></label>
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea rows="5" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-gray-200 p-2 rounded"></textarea>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <button type="button" className="bg-sky-500 text-white px-6 py-2 rounded hover:bg-sky-600">See my events</button>
          <button type="submit" className="bg-sky-500 text-white px-6 py-2 rounded font-bold hover:bg-sky-600">SAVE CHANGES</button>
        </div>
      </form>


      <div className="mt-10">
        <h2 className="text-xl font-bold mb-3">Notifications</h2>
        <div className="flex items-center space-x-3">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="hidden" checked={emailNotifications} onChange={() => setEmailNotifications(!emailNotifications)}></input>
            <div className={'w-12 h-6 flex items center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${emailNotifications ? "bg-sky-500" : ""}'}>
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                  emailNotifications ? "translate-x-6" : ""}`}></div>
            </div>
          </label>
          <span>Email Notifications</span>
        </div>
      </div>
    </div>
  )
};

export default Settings;
