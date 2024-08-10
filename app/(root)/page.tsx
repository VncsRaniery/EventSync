import { Button } from '@/components/ui/button';
import { SearchParamProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Hospede, conecte, comemore: seus eventos, nossa plataforma!</h1>
            <p className="p-regular-20 md:p-regular-24">Reserve e aprenda dicas úteis de mais de 3.168+ mentores em empresas de classe mundial com nossa comunidade global.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Ver mais!
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Confiar por <br /> Milhares de eventos</h2>
      </section>

    </>
  )
}