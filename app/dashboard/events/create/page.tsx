/*
import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs/server";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full       font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px]      text-center sm:text-left">Criar evento</h3>
      </section>

      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full my-8">
        <EventForm userId={userId} type="Criar" />
      </div>
    </>
  )
}

export default CreateEvent
*/

import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs/server";

const CreateEvent = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-4 md:py-8">
        <h3 className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left leading-snug">
          Criar evento
        </h3>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 my-6">
        <EventForm userId={userId} type="Criar" />
      </div>
    </>
  )
}

export default CreateEvent
