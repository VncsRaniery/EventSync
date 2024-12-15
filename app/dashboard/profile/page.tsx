/*
import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getEventsByUser } from '@/lib/actions/event.actions'
import { getOrdersByUser } from '@/lib/actions/order.actions'
import { IOrder } from '@/lib/database/models/order.model'
import { SearchParamProps } from '@/types'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Meu Perfil",
  description: "Página para accessar e gerenciar seus eventos e ingressos.",
};

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  const orders = await getOrdersByUser({ userId, page: ordersPage})

  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  const organizedEvents = await getEventsByUser({ userId, page: eventsPage })

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-center sm:justify-between">
          <h3 className='font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] text-center sm:text-left'>Meus Ingressos</h3>
          <Button asChild size="lg" className="rounded-full h-[54px] text-[16px] font-normal leading-[24px] hidden sm:flex">
            <Link href="/dashboard/#events">
              Explorar mais eventos!
            </Link>
          </Button>
        </div>
      </section>

      <section className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full my-8">
        <Collection 
          data={orderedEvents}
          emptyTitle="Nenhum ingresso para evento comprado ainda"
          emptyStateSubtext="Não se preocupe - muitos eventos emocionantes para explorar!"
          collectionType="My_Tickets"
          limit={3}
          page={ordersPage}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
        />
      </section>

      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-center sm:justify-between">
          <h3 className='font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] text-center sm:text-left'>Eventos Organizados</h3>
          <Button asChild size="lg" className="rounded-full h-[54px] text-[16px] font-normal leading-[24px] hidden sm:flex">
            <Link href="/dashboard/events/create">
              Criar um novo evento
            </Link>
          </Button>
        </div>
      </section>

      <section className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full my-8">
        <Collection 
          data={organizedEvents?.data}
          emptyTitle="Nenhum evento foi criado ainda"
          emptyStateSubtext="Vá criar alguns agora"
          collectionType="Events_Organized"
          limit={3}
          page={eventsPage}
          urlParamName="eventsPage"
          totalPages={organizedEvents?.totalPages}
        />
      </section>
    </>
  )
}

export default ProfilePage
*/


import Collection from '@/components/shared/Collection';
import { Button } from '@/components/ui/button';
import { getEventsByUser } from '@/lib/actions/event.actions';
import { getOrdersByUser } from '@/lib/actions/order.actions';
import { IOrder } from '@/lib/database/models/order.model';
import { SearchParamProps } from '@/types';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Meu Perfil',
  description: 'Página para acessar e gerenciar seus eventos e ingressos.',
};

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  const orders = await getOrdersByUser({ userId, page: ordersPage });

  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  const organizedEvents = await getEventsByUser({ userId, page: eventsPage });

  const sectionHeaderClass = "max-w-7xl mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-center sm:justify-between";
  const sectionClass = "max-w-7xl mx-auto p-5 md:px-10 xl:px-0 w-full my-8";
  const titleClass = "font-bold text-2xl md:text-3xl text-center sm:text-left leading-tight";

  return (
    <>
      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className={sectionHeaderClass}>
          <h3 className={titleClass}>Meus Ingressos</h3>
          <Button asChild size="lg" className="rounded-full h-14 text-base font-normal hidden sm:flex">
            <Link href="/dashboard/#events">Explorar mais eventos!</Link>
          </Button>
        </div>
      </section>

      <section className={sectionClass}>
        <Collection 
          data={orderedEvents}
          emptyTitle="Nenhum ingresso para evento comprado ainda"
          emptyStateSubtext="Não se preocupe - muitos eventos emocionantes para explorar!"
          collectionType="My_Tickets"
          limit={3}
          page={ordersPage}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
        />
      </section>

      {/* Events Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className={sectionHeaderClass}>
          <h3 className={titleClass}>Eventos Organizados</h3>
          <Button asChild size="lg" className="rounded-full h-14 text-base font-normal hidden sm:flex">
            <Link href="/dashboard/events/create">Criar um novo evento</Link>
          </Button>
        </div>
      </section>

      <section className={sectionClass}>
        <Collection 
          data={organizedEvents?.data}
          emptyTitle="Nenhum evento foi criado ainda"
          emptyStateSubtext="Vá criar alguns agora"
          collectionType="Events_Organized"
          limit={3}
          page={eventsPage}
          urlParamName="eventsPage"
          totalPages={organizedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default ProfilePage;
