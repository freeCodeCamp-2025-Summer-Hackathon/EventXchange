import { useState } from "react";
import { FaImage } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../services/eventService";
import { UserContext } from "../App";

const CreateEvent = () => {
  const navigate = useNavigate();
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

  /**
   * @param {SubmitEvent} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (formData.get("online") != null) {
      formData.set("online", true);
    }
    const newEventOrError = await createEvent(formData);
    if (newEventOrError?.error != null) {
      // TODO: do something with the error
      console.error(newEventOrError.error);
    } else {
      navigate(`/events/${newEventOrError.id}`);
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl mt-5 mb-5">Create an Event</h1>
        <form
          className="bg-white p-8 rounded shadow-md w-96 flex flex-col w-xl mb-[10vh] gap-5"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="flex flex-col">
            <label htmlFor="event-title" className="text-base font-medium mb-2">
              Event Title
            </label>
            <input
              type="text"
              id="event-title"
              name="title"
              placeholder="Enter event title"
              required
              className="border border-gray-300 p-2 w-full rounded bg-gray-100 placeholder-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="text-base font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="placeholder-gray-600 border border-gray-300 p-2 w-full rounded bg-gray-100"
              placeholder="An amazing event for amazing folks..."
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Attach any Photos</label>
            <input
              id="photo-upload"
              type="file"
              name="photos"
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
                imagePreview.map((image) => (
                  <img
                    src={image}
                    alt="Preview"
                    className="w-xs grow shrink border-solid border-blue-400 border-2 rounded-xs"
                  />
                ))
              ) : (
                <FaImage className="text-6xl text-gray-500 m-auto" />
              )}
            </label>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col">
                <label htmlFor="start">Start</label>
                <input
                  id="start"
                  name="start"
                  type="datetime-local"
                  className="border border-gray-300 p-2 w-full rounded bg-gray-100"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col">
                <label htmlFor="end">End</label>
                <input
                  id="end"
                  name="end"
                  type="datetime-local"
                  className="border border-gray-300 p-2 w-full rounded bg-gray-100"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="event-location"
              className="text-base font-medium mb-2"
            >
              Location
            </label>
            <input
              id="event-location"
              name="location"
              type="text"
              required
              placeholder="New York"
              className="placeholder-gray-600 border border-gray-300 p-2 w-full rounded bg-gray-100"
            />
          </div>

          <div className="flex flex-row gap-3 items-center">
            <label
              htmlFor="online-check"
              className="text-base font-medium mb-2"
            >
              Online
            </label>
            <input
              type="checkbox"
              id="online-check"
              name="online"
              className="w-6 h-6 self-baseline"
            />
          </div>

          <div className="flex flex-row justify-between mb-[20px]">
            <div className="flex flex-col">
              <label
                htmlFor="visibility"
                className="text-base font-medium mb-2"
              >
                Visibility
              </label>
              <select
                id="visibility"
                name="visibility"
                className="border border-gray-300 p-2 w-full rounded bg-gray-100"
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>

            <div className="flex flex-col mb-[20px]">
              <label
                htmlFor="attendance"
                className="text-base font-medium mb-2"
              >
                Max Attendance
              </label>
              <input
                id="attendance"
                name="maxAttendees"
                type="number"
                max="100"
                min="1"
                placeholder="100"
                required
                className="border border-gray-300 p-2 w-full rounded bg-gray-100"
              />
            </div>
          </div>

          <div className="mb-10 flex flex-col justify-center items-center gap-5">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer w-full max-w-2xs"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
