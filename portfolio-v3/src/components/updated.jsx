import React from "react";

function formatCommitDate(commitDate) {
  if (!commitDate) return "Unavailable";

  const parsedDate = new Date(commitDate);
  if (Number.isNaN(parsedDate.getTime())) return "Unavailable";

  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(parsedDate);
}

function Updated() {
  const lastCommitDate = formatCommitDate(import.meta.env.VITE_LAST_COMMIT_DATE);

  return (
    <div className="updated">
      <h2>Updated</h2>
      <p>{lastCommitDate}</p>
    </div>
  );
}

export default Updated;

