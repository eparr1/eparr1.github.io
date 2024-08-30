export default function BlogPage() {
  return (
    <>
      <header className="max-w-xl mx-auto mt-20 text-center">
        <h1 className="text-4xl">
          <span className="text-indigo-600 font-semibold">The Blog</span>
        </h1>
        <p className="text-lg mt-6 text-black">
          Taking you through my coding journey from start to finish! Sharing my latest projects including this very website!
        </p>
      </header>

      <main className="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
        <article className="transition-colors duration-300 hover:bg-white border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
          <div className="py-6 px-5 lg:flex">
            <div className="flex-1 lg:mr-8">
              {/* Add image or content here if needed */}
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <header className="mt-8 lg:mt-0">
                <div className="mt-4">
                  <h1 className="text-3xl">
                    Using Front-end Mentor Challenge to create a QR code!
                  </h1>
                  <span className="mt-2 block text-gray-400 text-xs">
                    Published <time>1 day ago</time>
                  </span>
                </div>
              </header>
              <div className="text-sm mt-2">
                <p className="mt-4">
                  So, this is my first challenge using front-end mentor and I used Tailwind CSS again. The main aim was to recreate the QR code image with the one provided and I have to say actually 
                  setting up both the Tailwind CSS and uploading it onto my GitHub was actually frustrating at times. It&apos;s amazing how quickly you forget the simple set-up instructions for a new project.
                  I don&apos;t know if this was just me but for some reason my Tailwind CSS was not computing with Git, as I set up and linked my project to GitHub first. It didn&apos;t like that. 
                  I ended up starting again, linking my Tailwind CSS first before connecting to GitHub and it did work. But still so annoying!!
                  Don&apos;t get me started on merging existing changes because there seemed to be some unsolved change stuck in the Git universe. I did work it out though ... eventually.
                  Just learning to take my time with it. But overall really glad I did this super easy challenge, which taught me a lot about setting up GitHub and setting up a project on 
                  Visual Studio Code.
                </p>
              </div>
              <footer className="flex justify-between items-center mt-8">
                <div className="space-x-2">
                  <a href="#"
                     className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-lg uppercase font-semibold"
                     style={{ fontSize: '10px' }}>skills</a>
                </div>
                <div className="flex items-center text-sm">
                  <div className="ml-3">
                    <h5 className="font-bold">By Emma Parr</h5>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
