import { cn } from "@/lib/utils";

export const Message = ({ my, children }: {
    my: boolean;
    children: string;
}) => {
    return (<div className={cn("relative flex items-start justify-start w-[35%] p-3 min-h-[59px] rounded-[25px] before:absolute before:w-[15px] before:h-[15px] before:bottom-[-10px] before:z-50 before:rounded-full font-[400] text-[18px] tracking-[0.05em]", my ?
        "bg-[#e7e7e7] text-black before:bg-[#e7e7e7] before:left-[-5px]" :
        "bg-primary ml-auto text-white before:bg-primary before:right-[-5px]")}>
        {children}
    </div>)
}