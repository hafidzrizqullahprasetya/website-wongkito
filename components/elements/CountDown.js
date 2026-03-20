"use client";
import { useEffect, useState } from "react";

const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInAHour = 60 * msInMinute;
const msInADay = 24 * msInAHour;

const getPartsofTimeDuration = (duration) => {
    if (duration <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days:    Math.floor(duration / msInADay),
        hours:   Math.floor((duration % msInADay) / msInAHour),
        minutes: Math.floor((duration % msInAHour) / msInMinute),
        seconds: Math.floor((duration % msInMinute) / msInSecond),
    };
};

const pad = (n) => String(n).padStart(2, '0')

const Countdown = ({ endDateTime, dark = false }) => {
    const [timeParts, setTimeParts] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const calc = () => {
            const diff = new Date(endDateTime).getTime() - Date.now();
            setTimeParts(getPartsofTimeDuration(diff));
        };
        calc();
        const interval = setInterval(calc, 1000);
        return () => clearInterval(interval);
    }, [endDateTime]);

    const units = [
        { label: 'Hari',   value: timeParts.days    },
        { label: 'Jam',    value: timeParts.hours   },
        { label: 'Menit',  value: timeParts.minutes },
        { label: 'Detik',  value: timeParts.seconds },
    ];

    return (
        <div className="grid grid-cols-7 items-center w-full">
            {units.map((unit, i) => (
                <div key={i} className="contents">
                    {/* Time box */}
                    <div className={`col-span-1 flex flex-col items-center rounded-xl py-2 text-center ${dark ? 'bg-black/5' : 'bg-white/10'}`}>
                        <span className={`text-xl lg:text-2xl font-black leading-none tabular-nums ${dark ? '!text-wk-dark-maroon' : '!text-white'}`}>
                            {mounted ? pad(unit.value) : '00'}
                        </span>
                        <span className={`text-[7px] font-bold uppercase tracking-wider mt-1 ${dark ? '!text-wk-maroon/60' : '!text-wk-gold'}`}>
                            {unit.label}
                        </span>
                    </div>
                    {/* Separator */}
                    {i < units.length - 1 && (
                        <div className="col-span-1 flex justify-center">
                            <span className={`text-lg font-black -mt-3 ${dark ? '!text-wk-dark-maroon/40' : '!text-wk-gold'}`}>:</span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Countdown;
