'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { ibm700Font, ibmFont } from "@/libs/font";
import { DatePicker, DatePickerProps } from "antd";
import dayjs from "dayjs";

export default function Page() {
    const [isStart, setIsStart] = useState<boolean>(false);
    const [endTime, setEndTime] = useState<number>(0);

    const date = new Date();
    const defaultValue = dayjs(new Date)

    const onChange: DatePickerProps['onChange'] = (_, dateStr) => {
        if (dateStr === null) return;
        const current = dayjs(new Date()) as dayjs.Dayjs;
        const end = dayjs(_?.toDate()) as dayjs.Dayjs;
        const diff = end.diff(current, 'second') as number;
        setEndTime(diff);
    };

    const onButtonSubmit = () => {
        if (endTime === undefined) return alert("กรุณาตั้งเวลา");
        else if (endTime <= 0) return alert("คุณดูหลงๆกับอดีตนะ ลองตั้งเวลาให้เป็นอนาคตดูสิ :)");
        if (endTime) {
            setIsStart(true);
        }
    }

    useEffect(() => {
        if (isStart) {
            console.log(endTime)
            let time = endTime!;
            const interval = setInterval(() => {
                const hours = Math.floor(time / 3600);
                const minutes = Math.floor((time % 3600) / 60);
                const seconds = time % 60;
                document.getElementById("hour")!.textContent = hours.toString().padStart(2, "0");
                document.getElementById("minute")!.textContent = minutes.toString().padStart(2, "0");
                document.getElementById("second")!.textContent = seconds.toString().padStart(2, "0")
                time--;
                if (time < 0) {
                    clearInterval(interval);
                    setTimeout(() => {
                        window.location.href = "/countdown/video";
                    }, 1000);
                };
            }, 1000);
        }
    }, [isStart])

    return (
        <div className={`absolute z-10 h-screen w-full text-white ${ibm700Font.className} font-bold`}>
            <video src="/assets/background/loop-bg-small.mp4" autoPlay muted loop playsInline className="object-cover h-screen w-full" />
            <div className="absolute inset-0 flex flex-col w-full h-screen items-center justify-center space-y-28">
                <Image src="/assets/logo/tech-x-school.png" priority alt="techcamp2-logo" className="w-auto h-auto m-[-20px] md:m-[-120px]" width={640} height={320} />
                {isStart ?
                    <div className="w-full font-[1200] text-shadow-md flex flex-row justify-center items-start gap-24">
                        <div className="flex flex-col items-center">
                            <p id="hour" className="text-[200px] mb-[-30px]">00</p>
                            <p className="text-3xl">HOURS</p>
                        </div>
                        <p className="text-[200px]">:</p>
                        <div className="flex flex-col items-center">
                            <p id="minute" className="text-[200px] mb-[-30px]">00</p>
                            <p className="text-3xl">MINUTES</p>
                        </div>
                        <p className="text-[200px]">:</p>
                        <div className="flex flex-col items-center">
                            <p id="second" className="text-[200px] mb-[-30px]">00</p>
                            <p className="text-3xl">SECONDS</p>
                        </div>
                    </div> :
                    <div className={`${ibmFont.className}`}>
                        <div className="flex flex-row items-center gap-3">
                            <DatePicker
                                defaultValue={defaultValue}
                                showTime
                                onChange={onChange}
                            />
                            <div
                                onClick={onButtonSubmit}
                                className="bg-[#02B477] rounded-md py-1 px-4 cursor-pointer hover:bg-[#20c997]"
                            >
                                เริ่ม
                            </div>
                        </div>
                        <p className="text-sm p-2 space-x-1">
                            ตั้งเวลาด่วน :&nbsp;
                            <span className="underline cursor-pointer" onClick={() => {
                                setEndTime(3600/2);
                                setIsStart(true);
                            }}>30m</span>
                            <span className="underline cursor-pointer" onClick={() => {
                                setEndTime(3600);
                                setIsStart(true);
                            }}>1h</span>
                            <span className="underline cursor-pointer" onClick={() => {
                                setEndTime(3600*2);
                                setIsStart(true);
                            }}>2h</span>
                        </p>
                    </div>
                }
                <p className="text-xl">{date.toDateString()}</p>
            </div>
        </div>
    )
}

const onChange: DatePickerProps['onChange'] = (_, dateStr) => {
    console.log('onChange:', dateStr);
};