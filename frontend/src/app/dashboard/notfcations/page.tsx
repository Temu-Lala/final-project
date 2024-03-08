import React from 'react'

export default function notfications() {
  return (
    <div>
 <div
  className="font-regular relative block w-full max-w-screen-md rounded-lg bg-green-500 px-4 py-4 text-base text-white"
  data-dismissible="alert"
>
  <div className="absolute top-4 left-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="mt-px h-6 w-6"
    >
      <path
        fill-rule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </div>
  <div className="ml-8 mr-12">
    <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
      Success
    </h5>
    <p className="mt-2 block font-sans text-base font-normal leading-relaxed text-white antialiased">
      I don't know what that word means. I'm happy. But success, that goes
      back to what in somebody's eyes success means. For me, success is inner
      peace. That's a good day for me.
    </p>
  </div>
  <div
    data-dismissible-target="alert"
    data-ripple-dark="true"
    className="absolute top-3 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
  >
    <div role="button" className="w-max rounded-lg p-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
  </div>
</div>


<div className="text-white px-6 py-4 border-0 max-w-screen-md rounded relative mb-4 bg-red-500">
  <span className="text-xl inline-block mr-5 align-middle">
    <i className="fas fa-bell" />
  </span>
  <span className="inline-block align-middle mr-8">
    <b className="capitalize">red!</b> This is a red alert - check it out!
  </span>
  <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
    <span>×</span>
  </button>
</div>



<div className="bg-blue-100 border max-w-screen-md border-blue-200 text-gray-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-white" role="alert">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    </div>
    <div className="ms-3">
      <h3 className="font-semibold">
        YouTube would like you to send notifications
      </h3>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Notifications may include alerts, sounds and icon badges. These can be configured in Settings.
      </div>
      <div className="mt-4">
        <div className="flex space-x-3">
          <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Don't allow
          </button>
          <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Allow
          </button>
        </div>
      </div>
    </div>
  </div>
</div>



</div>
  )
}
