"use client"
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation';
import Stories from './Components/stories';
function Home() {

  const router = useRouter()

  const detailPage = (id) => [
    router.push(`./details`)
  ]

  return (
    <div className="overflow-x-hidden">
      {/* <div className="md:grid grid-cols-5 gap-2">
    <h1 className="basis-4/12 md:bg-green-500 col-start-3 text-3xl rounded-lg p-2 text-orange-500">
      Logo
      </h1>
      <h1 className="basis-4/12 col-span-2 col-start-5 md:bg-blue-500 rounded-lg p-2 text-3xl text-white">
      Home
      </h1>
      <h1 className="basis-4/12 md:bg-orange-500 rounded-lg p-2 text-3xl text-green-600">
      Contact
      </h1>
      </div> */}
     <Stories navi={detailPage} />
      <div className="flex flex-center m-2 p-5">
        <article className="prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
          <img className="w-64 h-64 object-cover" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" />
          <h1>Garlic bread with cheese: What the science tells us</h1>
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

    </div>
  )
}


export default dynamic(() => Promise.resolve(Home), { ssr: false });