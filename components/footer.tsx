import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="border-t bg-neutral-50 border-neutral-200">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="text-2xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Produced for Toledo Web Professionals, GDG Toledo, WordPress Toledo
          </h3>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2">
            <p>
              Copyright &copy; {new Date().getFullYear()} ShrinkrayLabs. All
            rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
