"use client";

import { ReactNode } from "react";

import { LiveMap, LiveList, LiveObject } from "@liveblocks/client";

import { Layer } from "@/types/canvas";

import { ClientSideSuspense } from "@liveblocks/react"; /// This is a npm package

import { RoomProvider } from "@/liveblocks.config"; /// This RoomProvider is present in liveblocks.config.ts file

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

export const Room = ({ children, roomId, fallback }: RoomProps) => {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        cursor: null,
        selection: [],
        pencilDraft: null,
        penColor: null,
      }}
      initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList(),
      }}
    >
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
