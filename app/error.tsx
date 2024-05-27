"use client";

import { useEffect } from "react";

function Error({
   error, 
   reset 
  }: {
     error: Error & { digest?: string }; 
     reset: () => void 
    }) {
    useEffect(() => {
      console.error(error);  
    }, [error])
  return (
    <div className="w-full min-h-56 text-lg flex items-center justify-center flex-col">
        <h2>Something went wrong</h2>
        <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default Error