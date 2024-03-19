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

  // Function to extract URL from iframe code
  const extractIframeUrl = (iframeCode: string): string => {
    const regex = /src="([^"]+)"/;
    const match = regex.exec(iframeCode);
    if (match && match[1]) {
      return match[1];
    }
    return '';
  };

  return (
    <div className='flex w-screen justify-between  h-screen'>
      <div className='flex  w-full justify-between  h-screen flex-col gap-12'>
      <div className=' flex  justify-center  w-80  text-black bg-slate-200 border hover:bg-gray-800 hover:text-white   rounded-xl '>
      <button onClick={handleOpenMap} className='h-48  w-full justify-center'>
        Open Google Maps
      </button>
      </div>
        <div className='flec w-full'>
      <textarea className='flex justify-center  w-full   pl-12 text-black' 
      rows={10}
      cols={40}
        type="text" 
        defaultValue={""}
        onChange={handleChange} 
        placeholder="Enter Google Maps URL" 
        
      >
         </textarea>
      </div>
     <div className=' flex flex-col'>
     <div>           <span className=' text-6xl' >Google Maps:</span>
</div>
      {savedUrl && (
        <div className=' flex w-full'>
      
          <iframe  className=' w-full  h-screen'
            src={savedUrl} 
         
            style={{ border: '0' }} 
            allowFullScreen
          
          ></iframe>
        </div>
      )}
      </div>
      <div>
       <button onClick={handleSaveUrl}>
        Save URL
      </button>
      </div>
    </div>
    </div>
  );
};

export default RedirectButton;
