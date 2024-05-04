// ref : https://github.com/ku-t3ch/ku-hackathon/blob/main/src/components/Sections/TimeLine/index.tsx
'use client';

import { Timeline } from "antd";
import Section from "../section"
import { FC, useState } from "react";
import { format, isSameDay, isWithinInterval } from "date-fns";
import { toZonedTime } from 'date-fns-tz';
import { NextPage } from "next";
import IconClient from "../IconClient";
import Collapse from "@mui/material/Collapse";
import { ibmFont } from "@/libs/font";

interface TimelineItem {
    label?: string;
    children: JSX.Element | string;
    start: Date;
    end: Date;
    detail?: JSX.Element | string;
    tag?: string;
}

const timelineItems: TimelineItem[] = [
    {
        children: 'Problem Submission',
        start: new Date('2023-10-09 00:00'),
        end: new Date('2023-11-03 23:59'),
    },
    {
        children: 'Registration',
        start: new Date('2023-10-23 00:00'),
        end: new Date('2023-11-10 23:59'),
    },
    {
        children: 'Participant Announcement',
        start: new Date('2023-11-13 00:00'),
        end: new Date('2023-11-13 23:59'),
    },
    {
        children: 'Matching Teams',
        start: new Date('2023-11-15 00:00'),
        end: new Date('2023-11-15 23:59'),
        detail: (
            <ul className="ml-[1.25rem] list-disc space-y-3">
                <li>09:00-09:30 Registration</li>
                <li>09:30-12:00 Pre-Matching</li>
                <li>12:00-13:00 Lunch time</li>
                <li>13:00-15:00 Matching Team</li>
            </ul>
        ),
        tag: 'Onsite',
    },
    {
        children: 'Overview Problem',
        start: new Date('2023-11-16 00:00'),
        end: new Date('2023-11-16 23:59'),
        tag: 'Online',
        detail: (
            <ul className="ml-[1.25rem] list-disc space-y-3">
                <li>08.30-09.00 Registration</li>
                <li>09.00-10.00 Registrar</li>
                <li>10.30-11.30 PSE</li>
                <li>13.00-14.00 PR</li>
                <li>14.30-15.30 Library</li>
                <li>16.00-17.00 SA</li>
            </ul>
        ),
    },
    {
        children: 'UX/UI Workshop',
        start: new Date('2023-11-17 00:00'),
        end: new Date('2023-11-17 23:59'),
        detail: (
            <ul className="ml-[1.25rem] list-disc space-y-3">
                <li>08:30-09:00 Registration</li>
                <li>09:00-12:30 Workshop</li>
                <li>12:30-13:30 Lunch time</li>
                <li>13:30-15:15 UX/UI Tool</li>
                <li>15:15-16:00 Questionnaire & Preview</li>
            </ul>
        ),
        tag: 'Online',
    },
    {
        children: 'Dev Workshop',
        start: new Date('2023-11-19 00:00'),
        end: new Date('2023-11-19 23:59'),
        detail: (
            <ul className="ml-[1.25rem] list-disc space-y-3">
                <li>08:30-09:00 Registration</li>
                <li>09:00-09:10 Introduction</li>
                <li>09:10-12:20 Learn: React</li>
                <li>12:20-13:20 Lunch time</li>
                <li>13:20-16:30 Learn: FastAPI</li>
            </ul>
        ),
        tag: 'Online',
    },
    {
        children: 'Pitching Day',
        start: new Date('2023-11-20 00:00'),
        end: new Date('2024-11-20 23:59'),
        detail: (
            <ul className="ml-[1.25rem] list-disc space-y-3">
                <li>08:30-09:00 Registration</li>
                <li>09:00-12:00 Pitching</li>
                <li>12:00-13:00 Lunch time</li>
                <li>13:00-14:00 Pitching</li>
                <li>14:00-14:30 Break</li>
                <li>14:30-15:30 Announce Winner</li>
            </ul>
        ),
        tag: 'Onsite',
    },
    {
        children: 'Hackathon',
        start: new Date('2023-11-22 00:00'),
        end: new Date('2023-11-24 23:59'),
        tag: 'Onsite',
    },
];

export default function TimeLine() {
    const todayTime = toZonedTime(new Date(), 'Asia/Bangkok');

    return (
        <Section id="timeline" className="gap-8">
            <div className="container max-w-5xl mx-auto flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-center">
                    Timeline
                </div>
                <div className="mt-[2.5rem] md:mt-[5rem] w-full">
                    <Timeline
                        className={`${ibmFont.className}`}
                        mode="left"
                        items={timelineItems.map((item) => {
                            const isActiveEvent = isWithinInterval(todayTime, {
                                start: toZonedTime(item.start, 'Asia/Bangkok'),
                                end: toZonedTime(
                                    item.end,
                                    'Asia/Bangkok'
                                ),
                            });
                            return {
                                label: <TimeLineLabel start={item.start} end={item.end} />,
                                color: isActiveEvent ? 'green' : 'gray',
                                children: (
                                    <TimeLineChild
                                        item={item}
                                    />
                                ),
                                className: `!pb-[2.5rem] tail-active'}`,
                            };
                        })}
                    />
                </div>
            </div>
        </Section>
    )
}

interface TimeLineLabelProps {
    start: Date;
    end: Date;
}

const TimeLineLabel: FC<TimeLineLabelProps> = ({ start, end }) => {
    return (
        <div className={`pr-[1rem] sm:pr-[3rem] sm:text-[1rem] text-white ${ibmFont.className}`}>
            {isSameDay(start, end) ? (
                format(start, 'dd MMM yyyy')
            ) : (
                <>
                    {format(start, 'dd MMM yyyy')} - {format(end, 'dd MMM yyyy')}
                </>
            )}
        </div>
    );
};

interface TimeLineChildProps {
    item: TimelineItem;
    openModal?: () => void;
}

const TimeLineChild: NextPage<TimeLineChildProps> = ({ item, openModal }) => {
    const [onExpand, setOnExpand] = useState(false);

    let tagColor = '';

    switch (item.tag?.toLocaleLowerCase()) {
        case 'hybrid':
            tagColor = 'bg-sky-600 text-white';
            break;
        case 'online':
            tagColor = 'bg-green-600 text-white';
            break;
        case 'onsite':
            tagColor = 'bg-pink-600 text-white';
            break;
    }
    return (
        <div className="pl-[.25rem] sm:pl-[2.5rem] flex flex-col">
            <div className="text-[1rem] sm:text-xl font-medium flex flex-col-reverse sm:flex-row justify-start items-center gap-2">
                <div className={`w-full lg:w-fit text-white ${ibmFont.className}`} >{item.children}</div>
                {item.tag && (
                    <div className="w-full lg:w-fit">
                        <div
                            className={`w-fit flex justify-start text-xs px-1 rounded-sm ${tagColor}`}
                        >
                            {item.tag}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex gap-2">
                {item.detail && (
                    <div className="text-[#0CBD50] cursor-pointer">
                        <div
                            className="flex items-center gap-1"
                            onClick={() => setOnExpand(!onExpand)}
                        >
                            {onExpand ? <IconClient icon="mingcute:up-line" width="16" height="16" /> : <IconClient icon="mingcute:down-line" width="16" height="16" />}
                            <span className={`${ibmFont.className}`}>แสดงรายละเอียด</span>
                        </div>
                    </div>
                )}
            </div>

            <Collapse in={onExpand}>
                <div className="border-t-1 border-[#2D3648] pt-2 mt-2">
                    <div className={`text-gray-400 ${ibmFont.className}`}>{item.detail}</div>
                </div>
            </Collapse>
        </div>
    );
};