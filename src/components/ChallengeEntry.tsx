import { ChallengeEntryType } from "../Challenge";
import { ReactComponent as Checkmark } from "../assets/mark-check.svg";
import { ReactComponent as Xmark } from "../assets/mark-x.svg";


export default function ChallengeEntry(entry: ChallengeEntryType){
    return (
    <div className="flex flex-row gap-1 ">
        <div className="flex w-32 justify-center items-center">
            {entry.done 
                ? <Checkmark width="20" height="20" className="fill-green-500"/> 
                : <Xmark width="20" height="20" className="fill-red-500"/>}
        </div>
        <div className="flex flex-col">
            <div className="flex">{typeof entry.title === "string" ? <h1 className="font=bold text-3xl">{entry.title}</h1> : entry.title}</div>
            <div className="flex max-w-3xl">{typeof entry.description === "string" ? <p className=" whitespace-pre-line">{entry.description}</p> : entry.description}</div>
            {/* I only render the line if the comment exists at all, and then check wheter its a string or a react component.
                The first check works because true && expression evaluates to expression and false && expression evaluates to false.
            */} 
            {entry.comment && <div className="flex max-w-3xl">{typeof entry.comment === "string" ? <p className=" whitespace-pre-line italic">- {entry.comment}</p> : entry.comment}</div>}
        </div>
    </div>
    )
}
