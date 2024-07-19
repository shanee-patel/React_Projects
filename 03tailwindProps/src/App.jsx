import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/Card' 

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "shanee",
    age: 21
  }
  let newArr =[1,2,3]

  return (
    <>
      <h1 className='bg-green-200 text-black p-4 rounded-xl mb-4'>Hey, My name is shanee</h1>
      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="384" height="512" />
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

{/* <div class="w-[300px] rounded-md border">
  <img
    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="Laptop"
    class="h-[200px] w-full rounded-md object-cover"
  />
  <div class="p-4">
    <h1 class="text-lg font-semibold">About Macbook</h1>
    <p class="mt-3 text-sm text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button
      type="button"
      class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Read
    </button>
  </div>
</div> */}

<Card username="chai aur code" btnText= "click me!"/>
<br></br>
<Card username="shanee" btnText= "hire me!"/>
<br></br>
{/* <Card /> */}

    </>
  )
}

export default App
