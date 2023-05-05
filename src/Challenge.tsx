
import ChallengeEntry from "./components/ChallengeEntry";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export interface ChallengeEntryType {
  done: boolean;
  title: string;
  description: string;
  comment: string;
}

const dummyJson: Array<ChallengeEntryType> = [
  { done: false, title: "Certification",
    description: "The resume should have the AWS Cloud Practioner certification on it",
    comment: "Skipped cause I dont need no certificate" },
  { done: true, title: "HTML", description: "The resume should be written in HTML", comment: "My resume can be found at test.de" },
  { done: true, title: "CSS", description: "The website should be styled with CSS", comment: "Done :D" },
  { done: false, title: "Static Website", description: "The website should be deployed on Amazon S3", comment: "" },
  { done: false, title: "HTTPS", description: "The website should be deployed on Amazon S3", comment: "" },
  { done: false, title: "Static Website", description: "The website should be deployed on Amazon S3", comment: "" },
  { done: false, title: "HTTPS", description: "The connection to the website should be secured with HTTPS", comment: "" },
  { done: false, title: "DNS", description: "The website should get a custom DNS domain", comment: "" },
  { done: false, title: "JavaScript: Visitor Count", description: "The website should have a visitor counter, which needs to be written in JS", comment: "" },
  { done: false, title: "Database", description: "The website should connect to a database to store its conntent", comment: "" },
  { done: false, title: "Static Website", description: "The website should be deployed on Amazon S3", comment: "" },

];


export default function Challenge(prop: {title: string}) {
  const setTitle: (title: string) => void = useOutletContext();
  useEffect(() => {
    setTitle(prop.title);
  }, []);

  return (
    <div className="main flex flex-col justify-center  grow ">
      {dummyJson.map((currentEntry, index) => (
        <ChallengeEntry done={currentEntry.done} key={index} description={currentEntry.description} title={currentEntry.title} comment={currentEntry.comment}></ChallengeEntry>
      ))}
    </div>
  );
}
