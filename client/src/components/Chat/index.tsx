import { ChatBody } from "../ChatBody";
import { ChatFooter } from "../ChatFooter";
import { ChatHeader } from "../ChatHeader"

export const Chat = () => {
    console.log("test");
    return (<div className="flex flex-col w-[100%] h-[100%] border rounded-[25px] pt-[25px] pb-[25px] pr-[28px] pl-[28px]">
        <ChatHeader />
        <ChatBody />

        <ChatFooter />
    </div>)
}