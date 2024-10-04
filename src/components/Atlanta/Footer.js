export default function Footer() {
  return (
    <div className="mt-4 p-6 bg-pink text-2xl neuebit">
      <div className="text-center">
        <p>Built with love by teenagers, for teenagers at Hack Club</p>
      </div>
      <div className="flex justify-center items-center ">
        <a
          href="https://hackclub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          Hack Club
        </a>{" "}
        |{" "}
        <a
          href="https://hackclub.com/slack?event=counterspell-atl"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          Slack
        </a>{" "}
        |{" "}
        <a
          href="https://www.instagram.com/counterspellatl"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          Instagram
        </a>
      </div>
      <div className="text-center">
        <a
          href="https://www.instagram.com/aeralixe/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          Art by Elena Baskakova (18, Boston)
        </a>
      </div>
    </div>
  );
}