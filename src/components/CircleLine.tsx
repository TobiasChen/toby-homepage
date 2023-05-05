

export type circleStatus = "done" | "wip" | "notStarted"
//export type lineStatus = ""

type CircleLineProps = {circleRadius: number, modifier : "middle" | "start" | "end", status: circleStatus}
import { ReactComponent as Checkmark } from "../assets/mark-check-sharp.svg";



export default function CircleLine(props: CircleLineProps){

    const lineWidth = 5;

    var uppperLine: {[k: string]: any} = {
        width: `${lineWidth}px`,
        height: `calc(50% - ${props.circleRadius * 2}px + 0px)`,
        left: `calc(${props.circleRadius * 2 - 2}px)`
    }    
    const lowerLine: {[k: string]: any} = {
        width: `${lineWidth}px`,
        height: `calc(50% - ${props.circleRadius * 2}px + 0px)`,
        left: `calc(${props.circleRadius * 2 - 2}px)`
    }
    const circle = {
        height: `${props.circleRadius * 0.25}rem`,
        width: `${props.circleRadius * 0.25}rem`
    }

    const innerCircle = {
        height: `${props.circleRadius * 0.25 * 0.25}rem`,
        width: `${props.circleRadius * 0.25 * 0.25}rem`
    }

    if (props.modifier == "start"){
        uppperLine.background = 'none'
    } else if (props.modifier == "end"){
        lowerLine.background = 'none'
    }

    let statusCircle : JSX.Element
    if(props.status == "notStarted") {
        statusCircle = <div className={"rounded-full border-solid border-2 border-default-color"} style={circle} ></div>
    } else if (props.status == "wip"){
        statusCircle = <div className={"rounded-full border-solid border-2 border-default-color flex justify-center items-center"} style={circle} >
                    <div className={"rounded-full bg-default-color"} style={innerCircle} >
            </div>

            </div>
    } else {
        statusCircle = <div className={"rounded-full bg-default-color flex"} style={circle}>
                            <Checkmark className=" stroke-white w-8/12 block m-auto" />
        </div>
    }


    return(
        <div className="h-full">
         {/*{entry.done 
                ? <Checkmark width="20" height="20" className="fill-none"/> 
            : <Xmark width="20" height="20" className="fill-none"/>} */}
            <div className={`upperLine relative bg-default-color`} style={uppperLine}></div>
            {/*<div className="h-4 w-4 rounded-full bg-default-color border-default-color"></div>*/}
            {statusCircle}
            <div className={`lowerLine bg-default-color relative`} style={lowerLine}></div>
        </div>
    )
}