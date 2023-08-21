"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Detail = () => {
  const [url, setUrl] = useState();
  useEffect(() => {
    const url1 = localStorage.getItem("url")
    setUrl(url1)    
  })

  return (
    <div className="flex flex-center justify-center p-5">
        <article className="prose prose-img:rounded-xl justify-center prose-headings:underline prose-a:text-blue-600">
      <Image
        // unoptimized
        src={url}
        loading = 'lazy'
        style={{
        width: 'auto',
        height: 'auto',
      }}
      width={500}
      height={300}
        alt="Picture of the author"
        />
        <p>
            For years parents have espoused the health benefits of eating garlic bread with cheese to their
            children, with the food earning such an iconic status in our culture that kids will often dress
            up as warm, cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
            springing up around the country.
          </p>
       </article>
        </div>
  )
}

export default Detail