import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Card = () => {
    return (
        <div className="flex w-[480px] h-[50px] justify-between items-center gap-3">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex items-start w-[90%] gap-10 justify-between">
                <div className="flex flex-col justify-start items-start">
                    <h4 className="font-[600] text-[20px] tracking-[0.05em] text-[#303030]">Anil</h4>
                    <span className="font-[300] text-[16px] tracking-[0.05em] text-[#303030]">Message</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <time dateTime="20:00" className="font-[300] text-[13px] tracking-[0.01em] text-[#7c7c7c]">Today, 9.52pm</time>
                    <span className="flex justify-center items-center w-[24px] h-[24px] rounded-full bg-primary text-white">4</span>
                </div>
            </div>
        </div>
    )
}