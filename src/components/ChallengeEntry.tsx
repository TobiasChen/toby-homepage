import { ChallengeEntryInput} from "../Challenge";
import { ReactComponent as Checkmark } from "../assets/mark-check.svg";
import { ReactComponent as Xmark } from "../assets/mark-x.svg";
import CircleLine from "./CircleLine";

type ChallengeEntryType = ChallengeEntryInput & {index: number, length: number}
export default function ChallengeEntry(entry: ChallengeEntryType){
    const circleRadius = 8;
    let circleLine : JSX.Element
    if(entry.index == 0) {
        circleLine = CircleLine({modifier: "start", circleRadius: circleRadius, status: entry.status})
    } else if (entry.index == entry.length - 1){
        circleLine = CircleLine({modifier: "end", circleRadius: circleRadius, status: entry.status})
    } else {
        circleLine = CircleLine({modifier: "middle", circleRadius: circleRadius, status: entry.status})
    }
    return (
    <div className="flex flex-row gap-1">
        <div className="flex w-1/5 md:w-1/4 lg:1/3 shrink justify-center items-center">
            {circleLine}
        </div>
        <div className={`flex w-2/3 grow flex-col mt-5 mb-5 mr-10 md:mr-5 lg:mr-0`}>
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
