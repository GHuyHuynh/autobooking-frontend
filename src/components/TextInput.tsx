"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function TextInput() {
   const placeholders = [
      "Enter your name",
   ];


   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("submitted");
   };
   return (
      <div className="flex flex-col justify-center  items-center px-4 py-6 w-3/4">
         <PlaceholdersAndVanishInput
         placeholders={placeholders}
         onChange={(e) => console.log(e.target.value)}
         onSubmit={onSubmit}
      />
      </div>
   );
}
