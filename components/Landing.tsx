import Image from "next/image";
export default function Landing() {
  return (
    <div className="flex item-center text-7xl font-black min-h-screen">
      <div className="flex z-20">
        <div className="flex items-end">
          <Image src={"/memoji.png"} alt="Zaid" width={500} height={500} />
        </div>
        <div className="flex flex-col items-center justify-center m-24 cursor-default">
          <div>
            Hi,<br></br>
            I'm{" "}
            <span className="inline-block items-center text-primary">Z</span>
            aid,
            <br></br>a web developer
          </div>
        </div>
      </div>
      <div className="static z-20">
        <div className="absolute bottom-5 left-1/2 transform -translate-x-0 -translate-y-0 animate-bounce">
          <img
            className="rotate-90"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA70lEQVRIie3WMUoDURCA4RAQKzshYGXhASy0tEplGxu9g/ESxkNY6RU8gGIjJOAZBAUrsZOAKPksfMH1GbBxJhb5++XjLW9np9Va9J/Cla9GWMmCb33vAu0MeB1PFT4Ihwu+g9cGPMFBFt6vTj3GdhZ+WuGPWMuAl3Bd4TdYzsBXcVfh5+FwwTfxUuH9LLxXbve0d+xm4YPq1M/YyIDbPidZs9Fvz8WPvahwkv6qsVddrjd0o9FZn9NhNNrBQ4WeRaPzGZl+/iTu0YlGjyp0jK1otFtu7bQJ9qPRWavPcSha4Lkte5cNdChrvV30F30A7hgDN1exTwwAAAAASUVORK5CYII="
          ></img>
        </div>
      </div>
      <Image
        className="absolute z-0 opacity-50 select-none"
        src={"/wave.png"}
        alt="Zaid"
        width={1800}
        height={100}
      />
    </div>
  );
}