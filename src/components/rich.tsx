import { Fragment } from "react";

export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[PLACEHOLDER:[^\]]+\])/g);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("[PLACEHOLDER:") ? (
          <span key={index} className="ph">
            {part}
          </span>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
