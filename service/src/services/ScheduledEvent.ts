import { ScheduledEvent } from "@prisma/client";
import { prisma } from "../db";
import { Result, Ok } from "ts-results";

export const getFirst = async (
  count: number,
  subjectCode: string, // Add this parameter
): Promise<Result<ScheduledEvent[], Error>> => {
  const events = await prisma.scheduledEvent.findMany({
    take: count,
    where: {
      term: {
        contains: "Winter 2025 (January-April)",
      },
      course: {
        subjectCode: {
          contains: subjectCode, // Use the dynamic subjectCode
        },
      },
    },
    include: {
      course: true,
    },
  });

  return Ok(events);
};
