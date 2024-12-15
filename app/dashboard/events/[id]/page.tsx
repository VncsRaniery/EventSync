/*
import CheckoutButton from '@/components/shared/CheckoutButton';
import Collection from '@/components/shared/Collection';
import { getEventById, getRelatedEventsByCategory } from '@/lib/actions/event.actions'
import { formatDateTime } from '@/lib/utils';
import { SearchParamProps } from '@/types'
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: "EventEasy - Eventos",
  description: "Páginas escolhida para compra de eventos.",
};

const EventDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  })

  return (
    <>
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
        <Image 
          src={event.imageUrl}
          alt="Imagem do evento"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />

        <div className="flex w-full flex-col gap-8 p-5 md:p-10">
          <div className="flex flex-col gap-6">
            <h2 className='font-bold text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] xl:text-[40px] xl:leading-[48px]'>{event.title}</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <p className="font-bold text-[20px] leading-[30px] tracking-[2%]     rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                  {event.isFree ? 'GRÁTIS' : `R$${event.price}`}
                </p>
                <p className="text-[16px] font-medium leading-[24px]     rounded-full bg-gray-500/10 px-4 py-2.5 text-gray-500">
                  {event.category.name}
                </p>
              </div>

              <p className="text-[18px] font-medium leading-[28px]     ml-2 mt-2 sm:mt-0">
                por{' '}
                <span className="text-primary-500">{event.organizer.firstName} {event.organizer.lastName}</span>
              </p>
            </div>
          </div>

          <CheckoutButton event={event} />

          <div className="flex flex-col gap-5">
            <div className='flex gap-2 md:gap-3'>
              <Image src="/assets/icons/calendar-dots.svg" alt="calendário" width={32} height={32} />
              <div className="text-[16px] font-medium leading-[24px]     lg:text-[20px] font-normal leading-[30px] tracking-[2%]     flex flex-wrap items-center">
                <p>
                  {formatDateTime(event.startDateTime).dateOnly} - {' '}
                  {formatDateTime(event.startDateTime).timeOnly}
                </p>
                <p>
                  {formatDateTime(event.endDateTime).dateOnly} -  {' '}
                  {formatDateTime(event.endDateTime).timeOnly}
                </p>
              </div>
            </div>

            <div className="text-[20px] font-normal leading-[30px] tracking-[2%] flex items-center gap-3">
              <MapPin size={32} />
              <p className="text-[16px] font-medium leading-[24px]    lg:text-[20px] font-normal leading-[30px] tracking-[2%]">{event.location}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-[20px] leading-[30px] tracking-[2%]      text-gray-600">O que será apresentado:</p>
            <p className="text-[16px] font-medium leading-[24px]     lg:text-[18px] font-normal leading-[28px] tracking-[2%]">{event.description}</p>
            <p className="text-[16px] font-medium leading-[24px]      lg:text-[18px] font-normal leading-[28px] tracking-[2%] truncate text-primary-500 underline">{event.url}</p>
          </div>
        </div>
      </div>
    </section>
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="font-bold text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] xl:text-[40px] xl:leading-[48px]">Eventos Relacionados</h2>

      <Collection 
          data={relatedEvents?.data}
          emptyTitle="Sem eventos encontrados"
          emptyStateSubtext="Volte mais tarde"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
    </section>
    </>
  )
}

export default EventDetails
*/


/*

import CheckoutButton from "@/components/shared/CheckoutButton";
import Collection from "@/components/shared/Collection";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { Calendar1, MapPin } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "EventEasy - Eventos",
  description: "Páginas escolhida para compra de eventos.",
};

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  });

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={event.imageUrl}
            alt="Imagem do evento"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />

          <div className="flex w-full flex-col gap-6 p-5 md:p-10">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
                {event.title}
              </h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="font-bold text-lg leading-7 tracking-wide rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                    {event.isFree ? "GRÁTIS" : `R$${event.price}`}
                  </p>
                  <p className="text-base font-medium leading-6 rounded-full bg-gray-500/10 px-4 py-2.5 text-gray-500">
                    {event.category.name}
                  </p>
                </div>

                <p className="text-lg font-medium leading-7 mt-2 sm:mt-0 ml-2">
                  por{" "}
                  <span>
                    {event.organizer.firstName} {event.organizer.lastName}
                  </span>
                </p>
              </div>
            </div>

            <CheckoutButton event={event} />

            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <Calendar1 size={32} />
                <div className="text-base font-normal leading-7 flex flex-wrap items-center">
                  <p>
                    {formatDateTime(event.startDateTime).dateOnly} -{" "}
                    {formatDateTime(event.startDateTime).timeOnly}
                  </p>
                  <p>
                    {formatDateTime(event.endDateTime).dateOnly} -{" "}
                    {formatDateTime(event.endDateTime).timeOnly}
                  </p>
                </div>
              </div>

              <div className="text-lg font-normal leading-7 flex items-center gap-3">
                <MapPin size={32} />
                <p className="text-base font-medium leading-6 lg:text-lg">
                  {event.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg text-gray-600">
                O que será apresentado:
              </p>
              <p className="text-base lg:text-lg">{event.description}</p>
              <p className="text-base lg:text-lg text-primary-500 underline">
                {event.url}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
          Eventos Relacionados
        </h2>

        <Collection
          data={relatedEvents?.data}
          emptyTitle="Sem eventos encontrados"
          emptyStateSubtext="Volte mais tarde"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default EventDetails;
*/



import CheckoutButton from "@/components/shared/CheckoutButton";
import Collection from "@/components/shared/Collection";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { Calendar1, MapPin } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "EventEasy - Eventos",
  description: "Páginas escolhida para compra de eventos.",
};

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  });

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={event.imageUrl}
            alt="Imagem do evento"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover"
          />

          <div className="flex flex-col gap-6 p-5 md:p-10">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
                {event.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3">
                <p className="font-bold text-lg leading-7 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                  {event.isFree ? "GRÁTIS" : `R$${event.price}`}
                </p>
                <p className="text-base font-medium leading-6 rounded-full bg-gray-500/10 px-4 py-2 text-gray-500">
                  {event.category.name}
                </p>
                <p className="text-lg font-medium leading-7">
                  por {event.organizer.firstName} {event.organizer.lastName}
                </p>
              </div>
            </div>

            <CheckoutButton event={event} />

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Calendar1 size={32} />
                <div className="text-base font-normal leading-7">
                  <p>
                    {formatDateTime(event.startDateTime).dateOnly} - {" "}
                    {formatDateTime(event.startDateTime).timeOnly}
                  </p>
                  <p>
                    {formatDateTime(event.endDateTime).dateOnly} - {" "}
                    {formatDateTime(event.endDateTime).timeOnly}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={32} />
                <p className="text-base font-medium lg:text-lg">
                  {event.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg text-gray-600">
                O que será apresentado:
              </p>
              <p className="text-base lg:text-lg">{event.description}</p>
              <p className="text-base lg:text-lg text-primary-500 underline">
                {event.url}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
          Eventos Relacionados
        </h2>

        <Collection
          data={relatedEvents?.data}
          emptyTitle="Sem eventos encontrados"
          emptyStateSubtext="Volte mais tarde"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default EventDetails;
