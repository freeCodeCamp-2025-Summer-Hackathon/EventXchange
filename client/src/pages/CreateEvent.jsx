const CreateEvent = () => {
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
              required
              className="border border-gray-300 p-2 w-full rounded bg-gray-100"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-base font-medium mb-2">Event Host(s)</span>
            <div className="flex flex-row gap-5">
              <div className="text-base font-normal mb-2 flex flex-row justify-between border border-gray-300 p-2 w-full rounded bg-gray-100 min-h-[40px] max-w-lg"></div>
              <span className="text-3xl inline cursor-pointer">+</span>
            </div>
          </div>

          <div className="flex flex-col">
            <label for="photo-upload" className="text-base font-medium mb-2">Attach any photos</label>
            <input 
              type="file"
              id="photo-upload"
              className="file:hidden border border-gray-300 p-2 w-full rounded bg-gray-100"
              />
          </div>
        
          <div className="flex flex-col">
            <label for="description" className="text-base font-medium mb-2">Description</label>
            <textarea id="description" className="placeholder-gray-600 border border-gray-300 p-2 w-full rounded bg-gray-100" placeholder="An amazing event for amazing folks..."></textarea>
          </div>

          <div className="flex flex-col">
            <span className="text-base font-medium mb-2">Tags (Optional)</span>
            <div className="flex flex-row gap-5">
              <div className="text-base font-normal mb-2 flex flex-row justify-between border border-gray-300 p-2 w-full rounded bg-gray-100 min-h-[40px] max-w-lg"></div>
              <span className="text-3xl inline cursor-pointer">+</span>
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