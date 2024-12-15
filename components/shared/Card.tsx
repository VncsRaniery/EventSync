/*
import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { Pencil } from "lucide-react";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />

      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/dashboard/events/${event._id}/update`}>
          <Pencil size={20} />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="text-[14px] font-semibold leading-[20px]     w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
              {event.isFree ? "GRÁTIS" : `R$${event.price}`}
            </span>
            <p className="text-[14px] font-semibold leading-[20px]        w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
              {event.category?.name}
            </p>
          </div>
        )}

        <p className="text-[16px] font-medium leading-[24px]     text-[18px] font-medium leading-[28px] text-grey-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        <Link href={`/events/${event._id}`}>
          <p className="text-[16px] font-medium leading-[24px]      md:text-[20px] font-medium leading-[30px]     line-clamp-2 flex-1 text-black">
            {event.title}
          </p>
        </Link>

        <div className="flex-between w-full">
          <p className="text-[14px] font-medium leading-[20px] md:text-[16px] font-medium leading-[24px] text-gray-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>

          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className="text-primary-500">Detalhes do pedido</p>
              <Image
                src="/assets/icons/arrow-circle-up-right.svg"
                alt="pesquisa"
                width={25}
                height={25}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};


export default Card;
*/



import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { CircleArrowRight, Pencil } from "lucide-react";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/dashboard/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex flex-1 bg-gray-50 bg-cover bg-center"
      />

      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm">
          <Link href={`/dashboard/events/${event._id}/update`}>
            <Pencil size={20} />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="text-sm font-semibold rounded-full bg-green-100 px-4 py-1 text-green-600">
              {event.isFree ? "GRÁTIS" : `R$${event.price}`}
            </span>
            <p className="text-sm font-semibold rounded-full bg-gray-100 px-4 py-1 text-gray-500 line-clamp-1">
              {event.category?.name}
            </p>
          </div>
        )}

        <p className="text-sm font-medium text-gray-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        <Link href={`/dashboard/events/${event._id}`}>
          <p className="text-lg font-medium text-black line-clamp-2">
            {event.title}
          </p>
        </Link>

        <div className="flex justify-between items-center">
          <p className="text-sm md:text-base font-medium text-gray-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>

          {hasOrderLink && (
            <Link href={`/dashboard/orders?eventId=${event._id}`} className="flex items-center gap-2 text-primary-500">
              <p className="text-primary-500">Detalhes do pedido</p>
              <CircleArrowRight size={25} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

