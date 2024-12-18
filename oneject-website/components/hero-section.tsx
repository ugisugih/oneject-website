import { Play } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container flex min-h-[80vh] flex-col items-start justify-center space-y-8">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
            ONEJECT
            <br />
            ONEGOAL
          </h1>
          <p className="max-w-[600px] text-gray-300 md:text-xl">
            Hold tight who close to you and ensure your healthiness and safety with our Oneject Syringe
          </p>
          <Button className="inline-flex items-center space-x-2" size="lg">
            <Play className="h-5 w-5" />
            <span>Watch Full video</span>
          </Button>
        </div>
      </div>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/placeholder.svg')" }}
      />
    </section>
  )
}

