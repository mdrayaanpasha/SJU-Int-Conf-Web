interface CommitteesProps {
  name: string;
  title: string;
  avatar?: string; // optional profile image
}

export default function CommitteesCard({ name, title }: CommitteesProps) {
  return (
    <div
      className="flex flex-col items-center text-center bg-neutral-900 
      p-6 rounded-2xl shadow-md hover:shadow-lg hover:shadow-cyan-500/30 
      border border-neutral-800 hover:border-cyan-500 transition 
      w-full h-full backdrop-blur-md"
    >
      <h3 className="text-white font-bold text-lg sm:text-xl mb-1 break-words line-clamp-2">
        {name}
      </h3>
      <p className="text-gray-400 text-sm sm:text-base line-clamp-2">{title}</p>
    </div>
  );
}
