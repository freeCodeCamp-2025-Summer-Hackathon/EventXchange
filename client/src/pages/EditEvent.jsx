import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import { FaPlus, FaImage, FaTrash } from "react-icons/fa";
import events from "client/lib/event-dummy.js";




const EditEvent = () => {
 
  const {eventid} = useParams();
  const navigate = useNavigate();

  const [eventData, setEventData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const fetchEvent = () => {
      const event = events.find((e) => e.id === Number(eventid));
      if (event) {
        setEventData(event);
      } else {
        navigate("/events");
      }
    };

    fetchEvent();
  },
[eventid,navigate]);

const handleChange = (e) => {
  const {name, value, type, checked} = e.target;
  setEventData((prev) => ({
    ...prev, [name]: type === "checkbox" ? checked : value,
  }));
  
};

const handleDelete = () => {
  console.log(`Deleting event ${eventData.id}`);
  setShowDeleteModal(false);
  setShowSuccess(true);

  setTimeout(() => {
    navigate("/events");
  }, 2000);
};

if(!eventData) return <p> Loading event ... </p>;

  return (
      <div className="edit-event bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl mt-5 mb-5">Edit Event</h1>

        {showSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative w-[90%] max-w-md mx-auto mb-4">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline ml-2">The event has been deleted.</span>
            </div>
          )}

        <form className="bg-white p-8 rounded shadow-md w-96 flex flex-col w-xl mb-[10vh] gap-5">
          <div className="flex flex-col">
            <label for="event-title" className="text-base font-medium mb-2" >Event Title</label>
            <input name="event-title" value={eventData.title} onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded bg-gray-100 placeholder-gray-600"></input>
          </div>

          <div className="flex flex-col">
            <label className="block font-medium mb-1">Event Host(s)</label>
            <div className="flex items-center space-x-2">
              <input name="organizer" value={eventData.organizer} onChange={handleChange}
              className="flex-1 p-2 rounded text-base font-normal mb-2 border border-gray-300 w-full bg-gray-100 placeholder-gray-600"
              ></input>
              <button type="button" className="p-2 rounded cursor-pointer"><FaPlus/></button>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Added Photos</label>
            <div className="image-upload"><FaImage size={60}/><FaImage size={60}/><FaImage size={60}/></div>
            <div><button type="button" className="p-2 rounded cursor-pointer"><FaPlus/></button>Add More</div>
          </div>

          <div className="flex flex-col">
            <label for="description" className="text-base font-medium mb-2">Description</label>
            <textarea name="desc" value={eventData.desc} onChange={handleChange}
            id="description" className="placeholder-gray-600 border border-gray-300 p-2 w-full rounded bg-gray-100"></textarea>   
          </div>

          <div className="flex flex-col">
            <label className="block font-medium mb-1">Tags (Optional)</label>
            <div className="flex items-center space-x-2">
              <input name="tags" value={eventData.tags.join(", ")} 
              className="flex-1 p-2 rounded text-base font-normal mb-2 border border-gray-300 w-full bg-gray-100 placeholder-gray-600"
              onChange={(e) => {
                  setEventData((prev) => ({
                    ...prev,
                    tags: e.target.value.split(",").map(tag => tag.trim()),
                  }));
                }}></input>
                <button type="button" className="p-2 rounded cursor-pointer"><FaPlus/></button>
            </div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-y-5">
                <div className="flex flex-col">
                  <label for="start-date" className="text-base font-medium mb-2">Start Date</label>
                  <input type="date" id="start-date" required className="border border-gray-300 p-2 w-full rounded bg-gray-100" name="startDate" 
                  value={eventData.start?.[0] || ""} 
                  onChange={(e) => {
                    const newStart = [...eventData.start];
                    newStart[0] = e.target.value;
                    setEventData((prev) => ({...prev, start: newStart}));
                  }}></input>
                </div>

                <div className="flex flex-col">
                    <label for="end-date" className={'text-base font-medium mb-2'}>End Date</label>
                    <input type="date" name="endDate"
                      className="border border-gray-300 p-2 w-full rounded bg-gray-100"
                      value={eventData.endDate || ""}
                      onChange={handleChange}></input>
                </div>
              </div>
            

              <div className="flex flex-col gap-y-5">
                <div className="flex flex-col">
                  <label for="start-time" className={'text-base font-medium mb-2'}>Start Time</label>
                  <input type="time" name="startTime"
                  required className="border border-gray-300 p-2 w-full rounded bg-gray-100"
                  value={eventData.start?.[1] || ""}
                  onChange={(e) => {
                    const newStart = [...eventData.start];
                    newStart[1]= e.target.value;
                    setEventData((prev) => ({...prev, start: newStart}));
                  }}></input>
                </div>

                
                  <div className="flex flex-col">
                    <label for="end-time" className="text-base font-medium mb-2">End Time</label>
                    <input type="time" name="endTime"
                     className="border border-gray-300 p-2 w-full rounded bg-gray-100"
                      value={eventData.endTime || ""}
                      onChange={handleChange}></input>
                  </div>
                </div>
            </div>

            <div className="flex flex-col">
              <label for="event-location" className="text-base font-medium mb-2">Location</label>
              <input name="location" required className="placeholder-gray-600 border border-gray-300 p-2 w-full rounded bg-gray-100"
              value={eventData.location} onChange={handleChange}></input>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <label for="online-check" className="text-base font-medium mb-2">Online{" "} <input
              type="checkbox" name="online"
              checked={eventData.online || false}
              onChange={handleChange}
              ></input></label>
            </div>

          <div className="flex flex-row justify-between mb-[20px]">
            <div className="flex flex-col">
                <label for="visibility" className="text-base font-medium mb-2">Visibility</label>
                <select name="visibility" className="border border-gray-300 p-2 w-full rounded bg-gray-100"
                value={eventData.visibility || "Public"} onChange={handleChange}>
                  <option>Public</option>
                  <option>Private</option>
                </select>
            </div>

            <div className="flex flex-col mb-[20px]">
            <label for="attendance" className="text-base font-medium mb-2">Max Attendnace</label>
            <input type="number" name="maxAttendance"
                className="border border-gray-300 p-2 w-full rounded bg-gray-100"
              value={eventData.maxAttendance || ""}
              onChange={handleChange}></input>
          </div>
          </div>

          <div className="mb-10 flex flex-col justify-center items-center gap-5">
            <div className="button-row flex flex-col sm:flex-row justify-between w-full gap-3">
            <button
              type="button" onClick={() => setShowDeleteModal(true)}
              className="bg-red-900 text-white font-semibold py-2 px-4 rounded-xl hover:bg-red-700 flex items-center gap-2 w-full"><FaTrash /> Delete Event</button>
            <button onClick={(e) => {e.preventDefault()}}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer w-full max-w-2xs">Save Changes</button>
            </div>
            
            {showDeleteModal && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                role="dialog"
                aria-modal="true">
                <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md text-center space-y-4">
                  <FaTrash size={40} className="mx-auto text-red-800" />
                  <h3 className="text-xl font-semibold">Are you sure?</h3>
                  <p>Do you really want to delete <span className="font-semibold text-red-600">"{eventData.title}"</span>?</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className='px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition'>Cancel
                    </button>
                    <button
                      className="px-4 py-2 rounded-md bg-red-900 text-white hover:bg-red-700 transition"
                      onClick={handleDelete}
                    >
                      Delete Event
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
  );
};

export default EditEvent;