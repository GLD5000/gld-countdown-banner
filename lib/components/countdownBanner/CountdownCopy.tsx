import type { ReactNode } from 'react';

export default function CountdownCopy({
    countdownCopy,
}: {
    countdownCopy: ReactNode;
}) {
    return (
        <div className="block w-fit max-w-[14em] tracking-loose text-base text-center leading-normal text-black font-guyot">
            {countdownCopy}
        </div>
    );
}
