"use client"

import { IEvent } from '@/lib/database/models/event.model'
import { SignedIn, SignedOut, SignInButton, useUser } from '@clerk/nextjs'
import React from 'react'
import { Button } from '@/components/ui/button'
import Checkout from '@/components/shared/Checkout'

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">Desculpe, os ingressos não estão mais disponíveis.</p>
      ) : (
        <>
          <SignedOut>
            <SignInButton>
              <Button className="rounded-full h-[54px] text-[16px] font-normal leading-[24px]" size="lg">
                Obter ingressos
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  )
}

export default CheckoutButton
