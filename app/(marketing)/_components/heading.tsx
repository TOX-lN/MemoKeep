"use client";

import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";

export const Heading = () => {
    return (  
        <div className ="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold">
                Think it. Write it. Keep it.<br />
                <span className="underline">Welcome to MemoKeep.</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                 MemoKeep is the smart way to capture, organize <br />
                  and expand your thoughts.
            </h3>
            <Button>
                Enter Memokeep
                <ArrowBigRight className="w-4 h-4 ml-2" />
            </Button>
            
        </div>
    );
}
 
