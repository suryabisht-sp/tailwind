
const ContactUs = () => {
  return (
       <div class="antialiased text-gray-900 px-6 border-2">
      <div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
        <div class="py-8">
          <h1 class="text-4xl font-bold">Contact Form</h1>
          <p class="mt-2 text-lg text-gray-600">
            An opinionated form to provide better solution within time.
          </p>
          <div class="mt-4 flex space-x-4">
            <a class="text-lg underline" href="/"
              >Phone</a
            >
            <a class="text-lg underline" href="/">Chat</a>
          </div>
        </div>
        <div class="py-12">
          <h2 class="text-2xl font-bold">Contact Form</h2>
          <p class="mt-2 text-lg text-gray-600">Please fill the below form</p>
          <div class="mt-8 max-w-md">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input type="text" class="mt-1 block w-full" placeholder="" />
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input type="email"  required class="mt-1 block w-full" placeholder="john@example.com" />
              </label>
              <label class="block">
                <span class="text-gray-700">What type of issue is it?</span>
                <select class="block w-full mt-1">
                  <option>Account</option>
                  <option>Subcription</option>
                  <option>Profile</option>
                    <option>Posting</option>
                    <option>Spam</option>
                        <option>Report</option>
                </select>
              </label>
              <label class="block">
                <span class="text-gray-700">Additional Information</span>
                <textarea class="mt-1 block w-full" rows="3"></textarea>
              </label>
              <div class="block">
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input type="checkbox"/>
                      <span class="ml-2">Email me a copy of the submitted form</span>
                    </label>
                  </div>
                </div>
                </div>
                <button className="hover:cursor-pointer bg-pink-800 hover:text-white rounded-xl hover:bg-blue-700 transition ease-in delay-10">Submit</button>
            </div>
          </div>
        </div>
       </div>
   
    </div>
  )
}

export default ContactUs