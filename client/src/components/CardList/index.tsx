import { Card } from "../Card"

export const CardList = ({ title = "Groups" }: {
    title: string;
}) => {
    return (
        <div className="min-h-16 w-[538px] bg-slate-400 rounded-[25px] pt-[25px] pb-[25px] pr-[28px] pl-[28px]">
            <div>
                <div>
                    <h4 className="font-bold text-3xl">{title}</h4>
                </div>
                <div className="flex flex-col gap-1 pt-3">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}