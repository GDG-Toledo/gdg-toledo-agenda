import { CMS_NAME } from '../lib/constants'


const Intro = () => {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-5xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
        { CMS_NAME }
      </h1>
      <h4 className="mt-5 text-lg text-center md:text-left md:pl-8">
        Our agenda for Toledo Region tech events. 
      </h4>
    </section>
  )
}

export default Intro
