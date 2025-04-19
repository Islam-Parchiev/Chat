import { Message } from "../Message"

const messages = [
    {
        id: 1,
        text: "Hi",
        authorId: 2,
    },
    {
        id: 2,
        text: "Hi",
        authorId: 3,
    },
    {
        id: 3,
        text: "How are you?",
        authorId: 2,
    },
    {
        id: 4,
        text: "I'm fine!",
        authorId: 3,
    }
]
const myId = 2;
export const ChatBody = () => {
    return <div className="w-[100%] h-[100%]">
        Body
        <div className="flex flex-col gap-2 w-[100%]">
            {
                messages.map((message: any) => <Message key={message.id} my={message.authorId === myId ? true : false}>{message.text}</Message>)
            }
            {/* <Message my={true}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nostrum.</Message> */}
            {/* <Message my={false}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maiores excepturi ipsam modi sit nisi voluptatem asperiores maxime, harum ducimus!</Message> */}
        </div>
    </div >
}