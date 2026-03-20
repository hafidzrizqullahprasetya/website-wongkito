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

const Countdown = ({ endDateTime }) => {
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
        <div className="flex items-center gap-2 sm:gap-3">
            {units.map((unit, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex flex-col items-center min-w-[32px] sm:min-w-[40px]">
                        <span className="text-xl sm:text-3xl font-black !text-white leading-none tabular-nums">
                            {mounted ? pad(unit.value) : '00'}
                        </span>
                        <span className="text-[8px] sm:text-[10px] font-bold !text-wk-gold uppercase tracking-widest mt-1">
                            {unit.label}
                        </span>
                    </div>
                    {i < units.length - 1 && (
                        <span className="text-lg sm:text-2xl font-black !text-wk-gold mb-3">:</span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Countdown;
