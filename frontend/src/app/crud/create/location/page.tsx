'use client'
import { useState, ChangeEvent } from 'react';

const RedirectButton = () => {
  const [url, setUrl] = useState<string>('https://www.google.com/maps/@9.1216656,35.2042579,6z?hl=am&entry=ttu');
  const [savedUrl, setSavedUrl] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleOpenMap = () => {
    window.open(url, '_blank');
  };

  const handleSaveUrl = () => {
    const iframeUrl = extractIframeUrl(url);
    setSavedUrl(iframeUrl);
  };

  const extractIframeUrl = (iframeCode: string): string => {
    const regex = /src="([^"]+)"/;
    const match = regex.exec(iframeCode);
    if (match && match[1]) {
      return match[1];
    }
    return '';
  };

  return (
    <div className="flex  flex-col lg:flex-row  h-screen">
      <div className="lg:w-1/3 w-full  p-8  bg-transparent">
        <div className="mb-8 ">
          <label className="block mb-2 text-gray-700 font-semibold">Google Maps URL:</label>
          <textarea
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            onChange={handleChange}
            placeholder="Enter Google Maps URL"
            rows={20}
            cols={10}
          ></textarea>
        </div>
        <div>
          <button
            onClick={handleOpenMap}
            className="w-full px-8 py-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Open Google Maps
          </button>
        </div>
        <div className="mt-8">
          <button
            onClick={handleSaveUrl}
            className="w-full px-8 py-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Save Map
          </button>
        </div>
      </div>
      <div className="w-full p-8  bg-transparent">
        <h2 className="text-2xl font-semibold mb-4">Your Maps Preview:</h2>
        {savedUrl && (
          <div className="aspect-w-16 h-screen aspect-h-9">
            <iframe
              className="w-full h-full"
              src={savedUrl}
              style={{ border: '0' }}
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default RedirectButton;
