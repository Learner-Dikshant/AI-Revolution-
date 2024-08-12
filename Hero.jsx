import {logo} from '../assets'
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col    ">
      <nav className="flex justify-between items-center w-full mr-10 pt-3">

        <img src={logo} alt="sumz_logo" className="w-28 object-contain " />

        <button
        
        type='button'
        onClick={()=>
            window.open("https://github.com/dikshant12356")

        }
        className='black_btn'
        
        >
           Github


        </button>



        </nav>


        <h1 className='head_text'>
          SummarizeXpert<br className='max-md:hidden'/>
          <span className='orange_gradient'>AI powered Summarizer</span>
        </h1>

        <h2 className='desc'>
          simplify your reading with SummarizeXpert,an Open Source 
          Article Summarizer that transforms lengthy articles 
          into clear and concise summaries.
        </h2>


    </header>
  )
}

export default Hero


