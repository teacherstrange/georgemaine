const Icon = ({ string }) => {
  switch (string) {
    case "Email":
      return (
        <svg
          width='24'
          height='24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6 8l3.953 3.69a3 3 0 004.094 0L18 8m2.5 8V8A2.5 2.5 0 0018 5.5H6A2.5 2.5 0 003.5 8v8A2.5 2.5 0 006 18.5h12a2.5 2.5 0 002.5-2.5z'
            stroke='var(--primaryText)'
            strokeLinecap='round'
          />
        </svg>
      );
    case "Twitter":
      return (
        <svg
          width='24'
          height='24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21 6.645a7.394 7.394 0 01-2.12.58 3.703 3.703 0 001.623-2.043 7.373 7.373 0 01-2.345.896 3.694 3.694 0 00-6.293 3.37 10.487 10.487 0 01-7.612-3.86 3.693 3.693 0 001.143 4.93 3.685 3.685 0 01-1.672-.461v.047a3.695 3.695 0 002.962 3.621 3.721 3.721 0 01-1.668.064 3.695 3.695 0 003.45 2.563A7.41 7.41 0 013 17.883a10.444 10.444 0 005.66 1.66c6.794 0 10.508-5.627 10.508-10.507 0-.159-.004-.319-.011-.478a7.508 7.508 0 001.841-1.91L21 6.645z'
            fill='var(--primaryText)'
          />
        </svg>
      );
    case "Github":
      return (
        <svg
          width='24'
          height='24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.487c.5.088.687-.212.687-.475 0-.237-.013-1.025-.013-1.862-2.512.462-3.162-.613-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.988 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.025a9.28 9.28 0 012.5-.337c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.588 1.025 2.688 0 3.837-2.337 4.687-4.562 4.937.362.313.675.913.675 1.85 0 1.338-.013 2.413-.013 2.75 0 .263.188.575.688.475A10.017 10.017 0 0022 12c0-5.525-4.475-10-10-10z'
            fill='var(--primaryText)'
          />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg
          width='24'
          height='24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.71 20.036H3.286V7.476h3.426v12.56zM20.412 20.036h-3.425v-6.399c0-3.845-4.567-3.554-4.567 0v6.399H8.994V7.476h3.426v2.015c1.594-2.952 7.992-3.17 7.992 2.828v7.717zM4.998 6.028A2.007 2.007 0 013 4.014C3 2.902 3.895 2 4.998 2s1.998.902 1.998 2.014a2.006 2.006 0 01-1.998 2.014z'
            fill='var(--primaryText)'
          />
        </svg>
      );
    case "Dribbble":
      return (
        <svg
          width='24'
          height='24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.276 25.276 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.814 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0112 3.475zm-3.633.803a53.9 53.9 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.521 8.521 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.316 35.316 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.66-6.084 2.68-.423 5.023.271 5.315.369a8.468 8.468 0 01-3.655 5.715z'
            fill='var(--primaryText)'
          />
        </svg>
      );
    case "Play":
      return (
        <svg
          width='24'
          height='24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7 5.79a1 1 0 011.524-.852l10.092 6.21a1 1 0 010 1.704l-10.092 6.21A1 1 0 017 18.21V5.79z'
            fill='var(--primaryText)'
          />
        </svg>
      );
    case "Share":
      return (
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.5 9.5V11.5C1.5 13.1569 2.56091 14.5 4.21777 14.5H11.783C13.4399 14.5 14.5 13.1569 14.5 11.5V9.5M5.39168 4L8.00038 1.5L5.39168 4ZM8.00038 1.5L10.6091 4L8.00038 1.5ZM8.00038 1.5V9.5V1.5Z'
            stroke='var(--primaryText)'
            strokeWidth='1.25'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
  }
};

export default Icon;
