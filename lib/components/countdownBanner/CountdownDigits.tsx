import React from 'react';

function capitaliseFirstLetter(stringIn: string) {
    const first = `${stringIn[0]}`.toUpperCase();
    const rest = stringIn.slice(1).toLowerCase();
    return `${first}${rest}`;
}
export default function CountdownDigits({
    name,
    value,
}: {
    name: string;
    value: number;
}) {
    return (
        <div className="grid justify-center text-center w-[4em]">
            <span
                className="block text-xl font-bold leading-tight gld-countdown-digits"
                id={`gld-countdown-${name}`}
            >
                {`${value}`.padStart(2, '0')}
            </span>
            <span className="block text-xs leading-tight">
                {capitaliseFirstLetter(name)}
            </span>
        </div>
    );
}