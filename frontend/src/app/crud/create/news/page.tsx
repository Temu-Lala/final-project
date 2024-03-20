'use client'
import React, { useState } from 'react';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
//import { FC } from 'react';

const CreateNews: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [description, setDescription] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [videoLink, setVideoLink] = useState<string>('');
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files!);
    setSelectedImages(files);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const handleVideoLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoLink(e.target.value);
  };

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedVideo(file || null);
  };

  const handleSave = () => {
    console.log('Selected Images:', selectedImages);
    console.log('Description:', description);
    console.log('Link:', link);
    console.log('Video Link:', videoLink);
    console.log('Selected Video:', selectedVideo);

    setSelectedImages([]);
    setDescription('');
    setLink('');
    setVideoLink('');
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen min-w-full flex flex-col gap-4 items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex w-1/4 items-center justify-center mb-8">
        <label
          htmlFor="fileInput"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 "
        >
          <div className="text-9xl font-bold mb-4">
            <DriveFolderUploadIcon style={{ fontSize: '9rem' }} />
          </div>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span>
          </p>
          <p className="text-xs text-gray-500 w-full dark:text-gray-400">SVG, PNG, JPG or GIF (Maximum 20 Photo )</p>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="mb-4 w-1/2 hidden"
          />
        </label>
      </div>
      <div className="flex justify-center flex-wrap gap-4 overflow-y-scroll">
        {selectedImages.map((image: File, index: number) => (
          <div key={index} className="max-w-xs">
            <img
              src={URL.createObjectURL(image)}
              alt={`Selected ${index + 1}`}
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
      <div className="mb-8">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Description:</label>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          className="px-4 py-2 w-60  lg:w-full  border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white resize-none"
          placeholder="Enter description..."
          rows={10}
          cols={70}
        />
      </div>
      <div className="mb-8">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Link:</label>
        <input
          type="text"
          value={link}
          onChange={handleLinkChange}
          className="px-4 py-2  border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
          placeholder="Enter link..."
        />
      </div>
      <div className="mb-8">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Video Link:</label>
        <input
          type="text"
          value={videoLink}
          onChange={handleVideoLinkChange}
          className="px-4 py-2  border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
          placeholder="Enter video link..."
        />
      </div>
      <div className="mb-8">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Upload Video:</label>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoFileChange}
          className="px-4 py-2  border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <button
        onClick={handleSave}
        className="mt-8 px-8 py-4 bg-blue-500 w-1/4 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
};

export default CreateNews;
