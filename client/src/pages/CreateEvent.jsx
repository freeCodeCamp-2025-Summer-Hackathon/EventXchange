// CREATE EVENTS FORM GOES HERE
// 1. add in input attributes (value, id, required or not, className, placeholder, etc.)
// 2. style 'em nicely according to wireframe!
// 3. add functionality w/ dummy data (use a setter function so user can see what they're typing live, push data to dummy events as an obj)

import eventDummy from "/lib/event-dummy.js"
import userDummy from "/lib/user-dummy.js"

const CreateEvent = () => {
  return (
    <>
    <h1>Create an Event</h1>
      <form>
        <label>Event Title 
          <input type="text" className="border-1 border-solid border-black"></input>
        </label>
        <br></br>

        <label>Event Host(s)
          <div className="flex items-center">
            <div>No hosts chosen...</div>
            <span className="text-2xl inline">+</span>
          </div>
        </label>
        <br></br>

        <label>Attach any photos
          <input type="file" className="border-1 border-solid border-black"></input>
        </label>
        <br></br>

        <label>Description
          <textarea className="border-1 border-solid border-black" placeholder="Lorem ipsum dolor..."></textarea>
        </label>
        <br></br>

        <label>Attach any photos
          <input type="file" className="border-1 border-solid border-black"></input>
        </label>
        <br></br>

        <label>Tags (Optional)
          <div className="flex items-center">
            <div>No tags chosen...</div>
            <span className="text-2xl inline">+</span>
          </div>
        </label>
        <br></br>

        <label>Start Date
          <input type="date"></input>
        </label>
        <label>End Date
          <input type="date"></input>
        </label>
        <br></br>

        <label>Start Time
          <input type="time"></input>
        </label>
        <label>End Time
          <input type="time"></input>
        </label>
        <br></br>

        <label>Location
          <input type="text" className="border-1 border-solid border-black"></input>
        </label>
        <br></br>

        <label>Online
          <input type="checkbox"></input>
        </label>
        <br></br>

        <label>Visibility
          <select className="border-1 border-solid border-black">
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </label>

        <label>Max Attendance
          <input type="number" max="100" min="1" className="border-1 border-solid border-black"></input>
        </label>
        <br></br>

        <button onClick={(e) => {e.preventDefault()}} className="border-1 border-solid border-black rounded-sm">Create Events</button>
        <br></br>
        <button onClick={(e) => {e.preventDefault()}} className="border-1 border-solid border-black rounded-sm">SAVE CHANGES</button>
      </form>
    </>
  )
};

export default CreateEvent;