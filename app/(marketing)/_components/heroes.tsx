import Image from "next/image";

export const Heroes = () => {
    return ( 
        <div className="flex flex-col items-center justify-center
        max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-75 h-75 sm:w-75 
                sm:h-75 md:h-100 md:w-100">
                <Image
                    src="/Duplicate-cuate-black.svg"
                    fill
                    className="object-contain"
                    alt="Documents"
                />
                </div>
                <div className="relative h-100 w-100 hidden md:block">
                    <Image
                    src="/Man reading-pana-black.svg"
                    fill
                    className="object-contain"
                    alt="Reading"
                />
                </div>
            </div>
        </div>
     );
}
 