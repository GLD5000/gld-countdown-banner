import { countdownString } from "@gld5000-js/countdown";

export default function InlineScriptData() {
  return (
    <div data-script={countdownString}></div>
  )
}