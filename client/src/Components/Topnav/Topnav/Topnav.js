import React from 'react'

export const Topnav = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4" data-testid="Topnav">
      <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
        <a className="text-xl text-indigo-500 font-semibold" href="/" >Full Stack</a>
      </div>
      <div className="block lg:hidden">
        <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">

            </path>
          </svg>
        </button>
      </div>
      <div className="navbar-menu lg:order-1 lg:block w-full lg:w-2/5 hidden">
        <a className="block lg:inline-block mt-4 lg:mt-0 md:ml-12 mr-10 text-blue-900 hover:text-blue-700" href="/projects" >Projects</a>
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="/" >About Me</a>
        <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700" href="/" >Contact</a>
      </div>
      <div className="navbar-menu lg:order-3 lg:block w-full lg:w-2/5 lg:text-right hidden">
      {/* TODO: Add Icons to menuLinks */}
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="/" >Resume</a>
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="/" >Github</a>
        <a className="block lg:inline-block mt-4 md:mr-12 lg:mt-0 text-blue-900 hover:text-blue-700" href="/" >LinkedIn</a>
      </div>
    </nav>

  )
}

{/* <script>
        var links = document.getElementsByTagName('a');
    for(var i = 0; i < links.length; {
          links[i].addEventListener('click', function (e) {
            e.preventDefault();
          });
    }

    var forms = document.getElementsByTagName('form');
    for(var i = 0; i < forms.length; {
          forms[i].addEventListener('submit', function (e) {
            e.preventDefault();
          }, true);
    }
    </script> */}