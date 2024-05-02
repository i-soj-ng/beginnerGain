import React from 'react';

export interface IButton {
  title: string;
  color?: string;
  isFilled: boolean;
}

const SmallButton = ({ title, color, isFilled }: IButton) => {
  if (color === "white") {
    return (
      <>
        <button
          className={
          `border border-purple-100 rounded-full max-w-48 min-w-24 text-xs
          ${isFilled ? "bg-purple-100 text-blue-300" : "text-purple-100"}`
        }
          style={{
            width: `${title === "다운로드" ? '192px' : '11vw'}`,
            height: '40px',
          }}
        >
          {title}
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className={
        `border border-black rounded-full max-w-48 min-w-24 text-xs
        ${isFilled && "bg-black text-white"}`
      }
        style={{
          width: `${title === "다운로드" ? '192px' : '11vw'}`,
          height: '40px',
        }}
      >
        {title}
      </button>
    </>
  );
}

export default SmallButton;