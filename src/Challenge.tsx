
import ChallengeEntry from "./components/ChallengeEntry";
import { useOutletContext, Link } from "react-router-dom";
import { useEffect } from "react";

export interface ChallengeEntryType {
  done: boolean;
  title: string | JSX.Element ;
  description: string | JSX.Element;
  comment: string | JSX.Element;
}

const dummyJson: Array<ChallengeEntryType> = [
  { done: false, title: "Certification",
    description: "The resume should have the AWS Cloud Practioner certification on it",
    comment: "Skipped cause I dont need no certificate" },
  { done: true, title: "HTML", description: "The resume should be written in HTML", comment: <span>My resume can be found at <Link to={"/contact"}>Contacts</Link></span> },
  { done: true, title: "CSS", description: "The website should be styled with CSS", comment: "Done :D" },
  { done: false, title: "Static Website", description: "The website should be deployed on Amazon S3", comment: "" },
  { done: false, title: "HTTPS", description: "The website should be deployed on Amazon S3", comment: "" },
  { done: false, title: "Static Website", description: "The website should be deployed on Amazon S3", comment: "" },
  { done: false, title: "HTTPS", description: "The connection to the website should be secured with HTTPS", comment: "" },
  { done: false, title: "DNS", description: "The website should get a custom DNS domain", comment: "" },
  { done: false, title: "Static Website", description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus a est sit amet porttitor. Donec consequat lectus non felis mattis, et tempor risus eleifend. Nullam rutrum elit ac sollicitudin gravida. Phasellus hendrerit pellentesque purus eu suscipit. Duis laoreet sapien in justo gravida, ornare interdum sem lobortis. Aenean vel augue a purus facilisis maximus. Aenean a lorem magna. Nulla facilisi.

  Vestibulum tincidunt dapibus orci tincidunt maximus. Suspendisse convallis commodo quam, sit amet elementum erat dictum et. Phasellus aliquet sagittis odio vitae imperdiet. Integer a elit ex. Maecenas felis enim, sagittis vel rhoncus non, condimentum et orci. Nulla at purus mi. In sed massa sagittis, consectetur nisi ac, lobortis lectus. Phasellus bibendum blandit massa id sodales.
  
  Praesent eu ex sed quam ultricies dapibus. Ut eu dapibus quam, ut mattis purus. Vivamus porttitor lobortis justo at pulvinar. Maecenas gravida mauris nec hendrerit condimentum. Phasellus tellus elit, facilisis eget dolor sit amet, suscipit scelerisque enim. Fusce in massa dui. Nam consequat at turpis ac finibus. Duis vitae odio eget ipsum congue condimentum. In gravida pretium nulla, a feugiat tellus fringilla sed. Etiam a tellus lorem. Pellentesque et orci eu neque varius bibendum. Quisque vehicula condimentum tempus. Proin sit amet ante at quam congue dapibus. Nulla aliquet maximus sapien eget iaculis. Pellentesque vel metus augue.`, comment: "" },
  { done: false, title: "JavaScript: Visitor Count", description: "The website should have a visitor counter, which needs to be written in JS", comment: "" },
  { done: false, title: "Database", description: "The website should connect to a database to store its conntent", comment: "" },
];


export default function Challenge(prop: {title: string}) {
  const setTitle: (title: string) => void = useOutletContext();
  useEffect(() => {
    setTitle(prop.title);
  }, []);

  return (
    <div className="main flex flex-col justify-center gap-2 grow mt-10 mb-10">
      {dummyJson.map((currentEntry, index) => (
        <ChallengeEntry done={currentEntry.done} key={index} description={currentEntry.description} title={currentEntry.title} comment={currentEntry.comment}></ChallengeEntry>
      ))}
    </div>
  );
}
