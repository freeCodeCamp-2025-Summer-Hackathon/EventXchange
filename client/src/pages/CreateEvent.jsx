import { useState } from "react";
import { FaPlus, FaImage } from "react-icons/fa";

const CreateEvent = () => {
  const [images, setImages] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files) {
      setImages(files);
      setImagePreview(() => {
        let urls = [];
        for (let i = 0; i < files.length; i++) {
          urls.push(URL.createObjectURL(files[i]));
        }
        return urls;
      });
    }
  };

  return (
    <>
    <div className="bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl mt-5 mb-5">Create an Event</h1>
        <form className="bg-white p-8 rounded shadow-md w-96 flex flex-col w-xl mb-[10vh] gap-5">
          <div className="flex flex-col">
            <label for="event-title" className="text-base font-medium mb-2">Event Title</label>
            <input 
              type="text" 
              id="event-title"
              placeholder="Enter event title"
              required
              className="border border-gray-300 p-2 w-full rounded bg-gray-100 placeholder-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="block font-medium mb-1">Event Host(s)</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="flex-1 p-2 rounded text-base font-normal mb-2 border border-gray-300 w-full bg-gray-100 placeholder-gray-600"
                placeholder="Enter host name"
              />
              <button type="button" className="p-2 rounded cursor-pointer">
                <FaPlus />
              </button>
            </div>
          </div>

          <div>
          <label className="block font-medium mb-1">Attach any Photos</label>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            multiple
          />
          <label
            htmlFor="photo-upload"
            className="bg-gray-200 h-40 flex flex-wrap rounded cursor-pointer overflow-y-auto"
          >
            {imagePreview ? (
              imagePreview.map((image) => <img
                src={image}
                alt="Preview"
                className="w-xs grow shrink border-solid border-blue-400 border-2 rounded-xs"
                />)
            )
            : (
              <FaImage className="text-6xl text-gray-500 m-auto" />
              )
            }
          </label>
        </div>
        
          <div className="flex flex-col">
            <label for="description" className="text-base font-medium mb-2">Description</label>
            <textarea id="description" className="placeholder-gray-600 border border-gray-300 p-2 w-full rounded bg-gray-100" placeholder="An amazing event for amazing folks..."></textarea>
          </div>

          <div className="flex flex-col">
            <label className="block font-medium mb-1">Tags (optional)</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="flex-1 p-2 rounded text-base font-normal mb-2 border border-gray-300 w-full bg-gray-100 placeholder-gray-600"
                placeholder="Enter tags"
              />
              <button type="button" className="p-2 rounded cursor-pointer">
                <FaPlus />
              </button>
            </div>
          </div>
        
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-y-5" >
              <div className="flex flex-col">
                <label for="start-date" className="text-base font-medium mb-2">Start Date</label>
                <input type="date" id="start-date" required className="border border-gray-300 p-2 w-full rounded bg-gray-100"/>
              </div>
              
              <div className="flex flex-col">
                <label for="end-date" className="text-base font-medium mb-2">End Date</label>
                <input type="date" id="end-date" required className="border border-gray-300 p-2 w-full rounded bg-gray-100"/>
              </div>
            </div>
            
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col">
                <label for="start-time" className="text-base font-medium mb-2">Start Time</label>
                <input type="time" id="start-time" required className="border border-gray-300 p-2 w-full rounded bg-gray-100"/>
              </div>
              
              <div className="flex flex-col">
                <label for="end-time" className="text-base font-medium mb-2">End Time</label>
                <input type="time" id="end-time" required className="border border-gray-300 p-2 w-full rounded bg-gray-100"/>
              </div>  
            </div>
          </div>
          
          <div className="flex flex-col">
            <label for="event-location" className="text-base font-medium mb-2">Location</label>
            <input 
              type="text"
              id="event-location"
              required
              placeholder="New York"
              className="placeholder-gray-600 border border-gray-300 p-2 w-full rounded bg-gray-100"
              />
          </div>
          
          <div className="flex flex-row gap-3 items-center">
            <label for="online-check" className="text-base font-medium mb-2">Online</label>
            <input type="checkbox" id="online-check" className="w-6 h-6 self-baseline"/>
          </div>

          <div className="flex flex-row justify-between mb-[20px]">
            <div className="flex flex-col">
              <label for="visibility" className="text-base font-medium mb-2">Visibility</label>
              <select id="visibility" className="border border-gray-300 p-2 w-full rounded bg-gray-100">
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
          
            <div className="flex flex-col mb-[20px]">
              <label for="attendance" className="text-base font-medium mb-2">Max Attendance</label>
              <input 
                type="number"
                max="100"
                min="1"
                id="attendance"
                placeholder="100"
                required
                className="border border-gray-300 p-2 w-full rounded bg-gray-100"
              />
            </div>
          </div>

          <div className="mb-10 flex flex-col justify-center items-center gap-5">
            <button onClick={(e) => {e.preventDefault()}} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer w-full max-w-2xs">Create Events</button>
            <button onClick={(e) => {e.preventDefault()}} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-600 cursor-pointer w-full max-w-3xs">SAVE CHANGES</button>
          </div>
        </form>
    </div>
    </>
  )
};

export default CreateEvent;