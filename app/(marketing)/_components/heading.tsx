"use client";

import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";

import { Libertinus_Keyboard, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link"; 
import { SignInButton } from "@clerk/nextjs";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
});

export const Heading = () => {
    const {isAuthenticated, isLoading } = useConvexAuth()

    return (  
        <div className ="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold">
                Think it. Write it. Keep it.<br />
                Welcome to <span className="underline">MemoKeep.</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                 The smart way to capture, organize <br />
                  and expand your thoughts.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}

            {isAuthenticated && !isLoading && (
            <Button asChild>
                <Link href="/documents">
                    Enter Memokeep
                    <ArrowBigRight className="w-4 h-4 ml-2" />
                </Link>
            </Button>
            )}

            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Enter Memokeep
                        <ArrowBigRight className="w-4 h-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
            
        </div>
    );
};
 
