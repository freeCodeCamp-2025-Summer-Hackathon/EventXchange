import { useState } from "react";
import { FaPlus, FaImage } from "react-icons/fa";

const CreateEvent = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Create an Event</h1>

      <form className="space-y-6">

        <div>
          <label className="block font-medium mb-1">Event Title</label>
          <input
            type="text"
            className="w-full bg-gray-200 p-2 rounded"
            placeholder="Enter title"
          />
        </div>


        <div>
          <label className="block font-medium mb-1">Event Host(s)</label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 bg-gray-200 p-2 rounded"
              placeholder="Enter host name"
            />
            <button type="button" className="p-2 bg-gray-300 rounded">
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
          />
          <label
            htmlFor="photo-upload"
            className="bg-gray-200 h-40 flex items-center justify-center rounded cursor-pointer overflow-hidden"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <FaImage className="text-6xl text-gray-500" />
            )}
          </label>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
