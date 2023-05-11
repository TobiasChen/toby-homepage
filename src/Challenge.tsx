
import ChallengeEntry from "./components/ChallengeEntry";
import { useOutletContext, Link } from "react-router-dom";
import { useEffect } from "react";
import {circleStatus} from "./components/CircleLine";



export interface ChallengeEntryInput {
  status: circleStatus
  title: string | JSX.Element ;
  description: string | JSX.Element;
  comment: string | JSX.Element;
}

const dummyJson: Array<ChallengeEntryInput> = [
  { status: "wip", title: "Certification",
    description: "The resume should have the AWS Cloud Practioner certification on it.",
    comment: "I skipped this step, cause paying 100 bucks for a certificate, I wont really need seemed uneccessary" },
  { status: "done", title: "HTML", description: "The website should be written in HTML.",
   comment: <p className="italic">- The actual task requires creating the resume as HTML, but I couldnt find a design I liked. <br/>
  Instead I created this website, my resume can be found <Link to={"/about"}>here</Link> or at <a href={"https://www.linkedin.com/in/tobias-chen-11b816214/" } rel="noopener noreferrer" target="_blank">linkedin</a></p> },
  { status: "done", title: "CSS", description: "The website should be styled with CSS", comment: "Done" },
  { status: "done", title: "Static Website", description: "The website should be deployed on Amazon S3.", comment: "" },
  { status: "done", title: "HTTPS", description: "The website should use HTTPS for security.", comment: "I used acme.sh to generate a LetsEncrypt Certificate for 30 days and imported it into AWS" },
  { status: "done", title: "DNS", description: "The website should have a proper domain name.", comment: "I used IONOS, however I faced an issue here. I wanted the root domain 'tobias-chen.de' to point to my cloudflare, however this is not possible without using"
  +" Amazons DNS Service(Route53). Instead I pointed the sub-domain home.tobias-chen.de with a CNAME-Record to the cloudflare adress"},
  { status: "done", title: "JavaScript", description: "The website should include a visitor counter to track and display how many people have accessed the site.", comment: "" },
  { status: "done", title: "Database", description: "The visitor count should be retrieved and saved into a database.", comment: "" },
  {status :"done", title :"API", description: "An API Gateway and a Lambda function should serve as an API into the the database", comment: <p className="italic">- I configured and setup the Gateway and Lambda function, and saved the lambda function code 
  <a href={"https://github.com/TobiasChen/toby-homepage-backend" } rel="noopener noreferrer" target="_blank">here</a></p> },
  { status: "notStarted", title: "Python", description: `The lambda functions should include a bit of python code`, comment: <p className="italic"> - I decided to solve this in JS instead, because I am more confident in my python skills. For an example of work in python, I solved the last two years of Advent of Code with python <a href={"https://github.com/TobiasChen/AdventOfCode" } rel="noopener noreferrer" target="_blank">here</a> </p>},
  { status: "notStarted", title: "Tests", description: "The backend JS code should be tested", comment: "Another reason to use JS, and explore the testing framework XYZ" },
  { status: "notStarted", title: "Infrastructure as Code", description: "The AWS Resources should be defined as templates, either SAM or terraform", comment: "" },
  { status: "done", title: "Source Controle", description: "The backend code should be checked into version controle as well", comment: "I decided to create three distinct repositories. One for the frontend, one for the backend, and one for all the infrastructure stuff." },
  { status: "notStarted", title: "CI/CD-Backend", description: "The backend should be automatically deployed/updated, whenether a new commit comes in, and the Tests are passing.", comment: "Another reason to use JS, and explore the testing framework XYZ" },
  { status: "done", title: "CI/CD-Frontend", description: "The fronted should be automatically deployed, whenether a new commit comes in.", comment: "I solved this pretty early on to not have to bother with manual uploads to S3 anymore. It also allowed me to tinker with the AWS OIDC flow." }, 
{ status: "notStarted", title: "Blog post", description: "As a final step, a blog should be written about the experience.", comment: "I decided to use the comments on this page for this." },
]  ;

const test = "home"

export default function Challenge(prop: {title: string}) {
  const setTitle: (title: string) => void = useOutletContext();
  useEffect(() => {
    setTitle(prop.title);
  }, []);

  return (
    <div className="main flex flex-col justify-center gap-0 grow mt-10 mb-10">
      <p className=" text-5xl text-center">Cloud resume challenge</p>
      <div className="flex flex-row gap-0">
        <div className="flex w-1/10  md:w-1/8 lg:1/6 shrink justify-center items-center"></div>
        <div className={`flex w-5/6 grow flex-col mt-5 mb-5 mr-10 md:mr-10 lg:mr-0 gap-5`}>
          <p className="whitespace-pre-line max-w-5xl">This website is my entry to the Cloud Resume Challenge, an initiative created by Forrest Brazeal. The challenge is designed to showcase and train some basics skills with cloud computing and DevOps pratices.
          I decided to complete the challenge with AWS, and document my progress on this page. The text on this page is adapted from Forrest Brazeal's overview page <a href="https://cloudresumechallenge.dev/docs/the-challenge/aws/" rel="noopener noreferrer" target="_blank">here</a>.</p>
        </div>
      </div>
      {dummyJson.map((currentEntry, index) => (
        <ChallengeEntry status={currentEntry.status} key={index} index={index} length={dummyJson.length} description={currentEntry.description} title={currentEntry.title} comment={currentEntry.comment}></ChallengeEntry>
      ))}
    </div>
  );
}
