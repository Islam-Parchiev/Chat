import { EllipsisVertical, Phone, Video } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export const ChatHeader = () => {
    return (
        <div className="flex justify-center w-[100%]">
            <div className="flex items-center justify-between w-[98%] border-b-[1px]">
                <div className="flex items-center justify-between gap-3">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="font-[600] text-[20px] tracking-[0.05em] text-[#303030]">Anil</h4>
                        <span className="font-[300] text-[13px] tracking-[0.01em] text-[#7c7c7c]">Online - Last seen, 2.02pm</span>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                    <button>
                        <Phone className="hover:fill-slate-600" />
                    </button>
                    <button>
                        <Video className="hover:fill-slate-600" />
                    </button>
                    <button>
                        <EllipsisVertical className="hover:fill-slate-600" />
                    </button>
                </div>
            </div>
        </div>
    )
}