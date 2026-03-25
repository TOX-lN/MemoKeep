"use client";

import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Navigation } from "lucide-react";

const MainLayout = ({
    children
}: {children: React.ReactNode
    
}) => {
    const { isAuthenticated, isLoading} = useConvexAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/")
        }
    }, [isAuthenticated, isLoading, router]);



    if (isLoading) {
        return (
            <div className="h-full flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="h-full flex dark:bg-[#1F1F1F]">
            <main className="flex-1 h_full overflow-y-auto">
                {children}
            </main>
        </div>
     );
}
 
export default MainLayout