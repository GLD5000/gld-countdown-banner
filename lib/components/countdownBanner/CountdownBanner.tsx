'use client';
import { countdownString } from '@gld5000-js/countdown';
import CountdownCopy from './CountdownCopy';
import CountdownDigitWrapper from './CountdownDigitWrapper';
import CtaButtonV2 from './CtaButtonV2';

export default function CountdownBanner({linkIn}:{linkIn:string}) {

    return (
        <>
            <section
                className="w-full h-auto box-border bg-[#ffd883] group p-0"
            >
                <a
                    href={linkIn}
                    className="mx-auto flex flex-wrap justify-center align-middle w-fit min-w-[320px] gap-y-2 gap-x-4 lg:gap-x-8 newDesktop:gap-x-12 px-4 py-2 text-black"
                >
                    <CountdownCopy
                        countdownCopy={
                            <>
                                <b>FREE Gift</b> when you spend £5 ends
                                in:
                            </>
                        }
                    />

                    <CountdownDigitWrapper />
                    <CtaButtonV2
                        className="block transition box-border relative h-fit py-[0.3em] px-[3em] m-auto text-center w-fit rounded-xl bg-white text-black group-hover:bg-black group-focus:bg-black group-hover:text-white group-focus:text-white border border-current border-solid font-cta text-base"
                        cta="Shop Now"
                    />
                </a>
                
            </section>
            <div data-script={countdownString}></div>
        </>
    );
}
