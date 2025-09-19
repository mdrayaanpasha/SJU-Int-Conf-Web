// The props interface now includes an optional avatar
interface CommitteesProps {
  name: string;
  title: string;
  avatar?: string; // e.g., "/path/to/image.png"
}

export default function CommitteesCard({ name, title, avatar }: CommitteesProps) {
  // A helper to generate initials from a name for the fallback avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("");
  };

  return (
    <div
      className="flex flex-col items-center text-center bg-neutral-900 
                 p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg hover:shadow-cyan-500/30 
                 border border-neutral-800 hover:border-cyan-500 transition 
                 w-full h-full backdrop-blur-md"
    >
      {/* --- Avatar Section --- */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 rounded-full flex-shrink-0">
        {avatar ? (
          // If avatar image exists, display it
          <img
            src={avatar}
            alt={name}
            className="w-full h-full rounded-full object-cover border-2 border-neutral-700"
          />
        ) : (
          // Fallback to initials if no avatar is provided
          <div className="w-full h-full rounded-full bg-cyan-800 flex items-center justify-center border-2 border-neutral-700">
            <span className="text-2xl sm:text-3xl font-bold text-cyan-200">
              {getInitials(name)}
            </span>
          </div>
        )}
      </div>

      {/* --- Name & Title Section --- */}
      <div className="flex flex-col">
        <h3 className="text-white font-bold text-lg sm:text-xl mb-1 break-words">
          {name}
        </h3>
        <p className="text-gray-400 text-sm sm:text-base">{title}</p>
      </div>
    </div>
  );
}