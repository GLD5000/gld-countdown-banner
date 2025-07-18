import CountdownBanner from "./components/countdownBanner/CountdownBanner";

export function helloWorld(hello: string) {
  console.log("hello:", hello);
  return hello;
}
export function helloAnything(thing: string): string {
  return `Hello ${thing}!`
}

export { CountdownBanner };