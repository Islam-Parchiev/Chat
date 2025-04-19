import { Button } from "../ui/button"
import { Input } from "../ui/input"

export const ChatFooter = () => {
    return (
        <div className="mt-auto">
            <div className="flex items-center gap-2">
                <Input placeholder="Message" />
                <Button>Send</Button>
            </div>
        </div>
    )
}