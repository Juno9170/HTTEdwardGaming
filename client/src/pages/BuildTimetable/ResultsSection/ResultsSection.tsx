import { ScheduledEvent } from "@/infrastructure/ServiceAPI";
import "./ResultsSection.style.scss";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ResultsSectionProps {
  scheduledEvents: ScheduledEvent[];
  addEvent: (event: ScheduledEvent) => void;
}

function ResultsSection({ scheduledEvents, addEvent }: ResultsSectionProps) {
  return (
    <div className="ResultsSection">
      <div className="ResultsSection__topbar">
        <div className="ResultsSection__topbar__item ResultsSection__add"></div>
        <div className="ResultsSection__topbar__item ResultsSection__crn">
          CRN
        </div>
        <div className="ResultsSection__topbar__item ResultsSection__subject">
          Subject
        </div>
        <div className="ResultsSection__topbar__item ResultsSection__section">
          Section
        </div>
        <div className="ResultsSection__topbar__item ResultsSection__title">
          Title
        </div>
        <div className="ResultsSection__topbar__item ResultsSection__credit">
          Credits
        </div>
        <div className="ResultsSection__topbar__item ResultsSection__type">
          Schedule
        </div>
        <div className="ResultsSection__topbar__item ResultsSection__instructor">
          Instructor
        </div>
      </div>
      <div className="ResultsSection__results">
        {scheduledEvents.map((event, index) => (
          <div
            key={index}
            className={`ResultsSection__result ResultsSection__result--gray`}
          >
            <Card className=" w-2/3 mx-auto">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div className="flex flex-row gap-8">
                  
                  <Badge onClick={()=>addEvent(event)} variant="outline" className="text-sm font-semibold cursor-pointer hover:bg-secondary active:bg-black active:text-white">
                    Add Course
                  </Badge>
                  <a href={event.url} target="_blank" rel="noopener noreferrer">
                  <Badge variant="outline" className="text-sm font-semibold text-gray-500">
                    Learn More
                  </Badge>
                  </a>
                  </div>
                  
                  <Badge variant="secondary" className="text-sm">
                  {event.credit} Credits
                  </Badge>
                </div>
                <CardTitle className="text-2xl mt-2">{event.course.shortTitle}</CardTitle>
                <CardDescription>{event.course.subjectCode} {event.course.courseCode} - Section {event.section}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Schedule:</span>
                  <span>{event.type}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Instructor:</span>
                  <span>{event.instructor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Days:</span>
                  <span>{event.days}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Time:</span>
                  <span>{event.startTime} - {event.endTime}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <h4 className="font-semibold mb-2">Course Description:</h4>
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
              </CardFooter>
            </Card>

            {/*
              <>
              <div className="ResultsSection__result__topbar">
              <div className="ResultsSection__add">
                <button onClick={() => addEvent(event)}>Add</button>
              </div>
              <div className="ResultsSection__crn">
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.crn}
                </a>
              </div>
              <div className="ResultsSection__subject">
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.course.subjectCode} {event.course.courseCode}
                </a>
              </div>
              <div className="ResultsSection__section">{event.section}</div>
              <div className="ResultsSection__title">
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.course.shortTitle}
                </a>
              </div>
              <div className="ResultsSection__credit">{event.credit}</div>
              <div className="ResultsSection__type">{event.type}</div>
              <div className="ResultsSection__instructor">
                {event.instructor}
              </div>
            </div>
            <div className="ResultsSection__result__content">
              <div>
                <b>Days:</b> {event.days}, <b>Time:</b> {event.startTime} -{" "}
                {event.endTime}
              </div>
              <div>
                <b>Section Information:</b> {event.description}
              </div>
            </div>
            </>
            */}
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsSection;
