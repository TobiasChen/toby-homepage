import { ChallengeEntryType } from "../Challenge";
import { ReactComponent as Checkmark } from "../assets/mark-check.svg";
import { ReactComponent as Xmark } from "../assets/mark-x.svg";


export default function ChallengeEntry(entry: ChallengeEntryType){
    return (
    <div className="flex h-40 flex-row gap-1 ">
        <div className="flex w-32 justify-center items-center">{entry.done ? 
        <Checkmark width="20" height="20" className="fill-green-500"/> 
        : <Xmark width="20" height="20" className="fill-red-500"/>}</div>
        <div className="flex flex-col">
            <div className="flex"><h1 className="font=bold text-3xl">{entry.title}</h1></div>
            <div className="flex">{entry.description}</div>
        </div>
    </div>
    )
}
