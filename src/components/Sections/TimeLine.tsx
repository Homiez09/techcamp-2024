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
        children: 'Workshop (I)',
        start: new Date('2024-07-07 08:00'),
        end: new Date('2024-07-07 16:59'),
        tag: 'Onsite',
        detail: (
            <ul className="ml-[1.25rem] list-disc space-y-3">
                <li>08:00 - 08:15 ลงทะเบียนเข้าร่วมกิจกรรม</li>
                <li>08:15 - 08:45 พิธีเปิด</li>
                <li>09:15 - 09:45 กิจกรรมนันทนาการ</li>
                <li>09:45 - 10:35 บทที่ 1 การเขียนโปรแกรมด้วยภาษา Dart เบื้องต้น</li>
                <li>10:35 - 10:50 พักรับประทานอาหารว่าง</li>
                <li>10:50 - 12:00 บทที่ 1 การเขียนโปรแกรมด้วยภาษา Dart เบื้องต้น (ต่อ)</li>
                <li>12:00 - 12:45 พักรับประทานอาหารกลางวัน</li>
                <li>12:45 - 13:00 กิจกรรมนันทนาการ</li>
                <li>13:00 - 14:00 บทที่ 2 การเขียนโปรแกรมเชิงวัตถุในภาษา Dart</li>
                <li>14:00 - 14:15 พักรับประทานอาหารว่าง</li>
                <li>14:15 - 16:00 บทที่ 2 การเขียนโปรแกรมเชิงวัตถุในภาษา Dart (ต่อ)</li>
            </ul>
        ),
    },
    {
        children: 'Workshop (II)',
        start: new Date('2024-07-08 08:00'),
        end: new Date('2024-07-08 16:59'),
        tag: 'Onsite',
        detail: (
            <ul className="ml-[1.25rem] list-disc space-y-3">
                <li>08:00 - 08:15 น. ลงทะเบียนเข้าร่วมกิจกรรม</li>
                <li>08:15 - 08:45 น. กิจกรรมนันทนาการ</li>
                <li>08:45 - 10:00 น. บทที่ 3 การพัฒนาแอปพลิเคชันมือถือด้วย Flutter</li>
                <li>10:00 - 10:45 น. พักรับประทานอาหารว่าง</li>
                <li>10:45 - 12:00 น. บทที่ 3 การพัฒนาแอปพลิเคชันมือถือด้วย Flutter (ต่อ)</li>
                <li>12:00 - 12:45 น. พักรับประทานอาหารกลางวัน</li>
                <li>12:45 - 13:00 น. กิจกรรมนันทนาการ</li>
                <li>13:00 - 14:00 น. บทที่ 3 การพัฒนาแอปพลิเคชันมือถือด้วย Flutter (ต่อ)</li>
                <li>14:00 - 14:15 น. พักรับประทานอาหารว่าง</li>
                <li>14:15 - 16:00 น. บทที่ 3 การพัฒนาแอปพลิเคชันมือถือด้วย Flutter (ต่อ)</li>
            </ul>
        ),
    },
    {
        children: 'Dev Workshop',
        start: new Date('2024-07-09 08:00'),
        end: new Date('2024-07-09 16:59'),
        tag: 'Onsite',
        detail: (
            <ul className="ml-[1.25rem] list-disc space-y-3">
                <li>08:00 - 08:15 น. ลงทะเบียนเข้าร่วมกิจกรรม</li>
                <li>08:15 - 08:45 น. กิจกรรมนันทนาการ</li>
                <li>08:45 - 10:15 น. ดำเนินการพัฒนาโปรเจค</li>
                <li>10:15 - 10:30 น. พักรับประทานอาหารว่าง</li>
                <li>10:30 - 12:00 น. ดำเนินการพัฒนาโปรเจค (ต่อ)</li>
                <li>12:00 - 12:45 น. พักรับประทานอาหารกลางวัน</li>
                <li>12:45 - 13:00 น. เตรียมนำเสนอผลงาน</li>
                <li>13:00 - 16:00 น. ช่วงการนำเสนอผลงาน</li>
                <li>16:00 - 16:20 น. แนะแนวการศึกษาต่อในระดับอุดมศึกษา</li>
                <li>16:20 - 16:40 น. พิธีปิด "ประกาศผู้ชนะ Project, มอบของรางวัล, มอบของที่ระลึกให้แก่ทางโรงเรียน"</li>
            </ul>
        ),
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