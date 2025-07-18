// CREATE EVENTS FORM GOES HERE
// 1. add in input attributes (value, id, required or not, className, placeholder, etc.) - DONE
// 2. style 'em nicely according to wireframe!
// 3. add functionality w/ dummy data (use a setter function so user can see what they're typing live, push data to dummy events as an obj)

import eventDummy from "/lib/event-dummy.js"
import userDummy from "/lib/user-dummy.js"

const CreateEvent = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl mt-5 mb-5">Create an Event</h1>
        <form className="flex flex-col w-xl mb-[10px] gap-5">
          <div className="flex flex-col">
            <label for="event-title">Event Title</label>
            <input 
              type="text" 
              id="event-title" 
              required
              className="border-1 border-solid border-black"
            />
          </div>

          <div className="flex flex-row items-center">
            <span>Event Host(s)</span>
            <span className="text-2xl inline">+</span>
          </div>

          <div className="flex flex-col">
            <label for="photo-upload">Attach any photos</label>
            <input 
              type="file"
              id="photo-upload"
              placeholder=""
              className="border-1 border-solid border-black"
              />
          </div>
        
          <div className="flex flex-col">
            <label for="description">Description</label>
            <textarea id="description" className="border-1 border-solid border-black" placeholder="An amazing event for amazing folks..."></textarea>
          </div>

          <div className="flex flex-col">
            <span>Tags (Optional)</span>
            <div>
              <span>No tags chosen...</span>
              <span className="text-2xl inline">+</span>
            </div>
          </div>
        
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <label for="start-date">Start Date</label>
              <input type="date" id="start-date" placeholder="2023-08-27" required/>
            </div>
            
            <div className="flex flex-col">
              <label for="end-date">End Date</label>
              <input type="date" id="end-date" required/>
            </div>
          </div>
          
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <label for="start-time">Start Time</label>
              <input type="time" id="start-time" required/>
            </div>
            
            <div className="flex flex-col">
              <label for="end-time">End Time</label>
              <input type="time" id="end-time" required/>
            </div>  
          </div>
          
          <div className="flex flex-col">
            <label for="event-location">Location</label>
            <input 
              type="text"
              id="event-location"
              required
              className="border-1 border-solid border-black"
              />
          </div>
          
          <div className="flex flex-row gap-3 items-center">
            <label for="online-check">Online</label>
            <input type="checkbox" id="online-check"/>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <label for="visibility">Visibility</label>
              <select id="visibility" className="border-1 border-solid border-black">
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
          
            <div className="flex flex-col">
              <label for="attendance">Max Attendance</label>
              <input 
                type="number"
                max="100"
                min="1"
                id="attendance"
                required
                className="border-1 border-solid border-black"
              />
            </div>
          </div>

          <div className="mb-10 flex flex-col justify-center items-center gap-5">
            <button onClick={(e) => {e.preventDefault()}} className="border-1 border-solid border-black rounded-sm w-[170px]">Create Events</button>
            <button onClick={(e) => {e.preventDefault()}} className="border-1 border-solid border-black rounded-sm w-[150px]">SAVE CHANGES</button>
          </div>
        </form>
    </div>
    </>
  )
};

export default CreateEvent;