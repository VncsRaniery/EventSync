import EventForm from "@/components/shared/EventForm"
import { getEventById } from "@/lib/actions/event.actions"
import { auth } from "@clerk/nextjs/server";

export const metadata = {
  title: "EventEasy - Atualizar evento",
  description: "Página para atualizar informações do evento criado pelo usuário.",
};

type UpdateEventProps = {
  params: {
    id: string
  }
}

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id)

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full    font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px]    text-center sm:text-left">Atualizar evento</h3>
      </section>

      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full     my-8">
        <EventForm 
          type="Atualizar" 
          event={event} 
          eventId={event._id} 
          userId={userId} 
        />
      </div>
    </>
  )
}

export default UpdateEvent