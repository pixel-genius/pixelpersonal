"use client";

import { DraggableCardBody } from "./_components/draggable-card";
import { DraggableCardContainer } from "./_components/draggable-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { works } from "@/data/globalData";

export default function Works() {
    const [selectedItem, setSelectedItem] = useState<typeof works[0] | null>(null);

   
    return (
        <div className="container-fluid mx-auto">
        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
          <div className="fixed top-4 left-4 z-50 bg-black/80 text-white px-4 py-2 rounded-lg shadow-lg">
            <p className="text-sm">
              <span className="inline-block animate-pulse">💡</span> Double-click on a card to view details
            </p>
          </div>
          <p className="absolute top-1/2 mx-auto max-w-xl -translate-y-3/4 text-center text-3xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
            Every project is a new opportunity to create something extraordinary.
          </p>
          {works.map((item) => (
            <Dialog key={item.id} open={selectedItem?.id === item.id} onOpenChange={(open) => !open && setSelectedItem(null)}>
              <DraggableCardBody className={item.className}>
                <div 
                  className="cursor-pointer"
                  onDoubleClick={() => setSelectedItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none relative z-10 w-full h-[24rem] object-cover"
                  />
                  <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                    {item.title}
                  </h3>
                </div>
              </DraggableCardBody>
              <DialogContent className="sm:max-w-[800px] bg-white dark:bg-neutral-900">
                <DialogHeader>
                  <DialogTitle>{item.title}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </DraggableCardContainer>
        </div>
    );
}