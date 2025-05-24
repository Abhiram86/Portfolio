export default function SkillCard({
  name,
  imgSrc,
  badge,
}: {
  name: string;
  imgSrc: string;
  badge?: string;
}) {
  return (
    <div className="w-42 relative ring-1 group rounded bg-zinc-800/75 ring-zinc-700 flex items-center space-x-3 py-2 px-4">
      {badge && (
        <p className="absolute z-10 opacity-0 transition-opacity group-hover:opacity-100 bg-zinc-800 top-1 -right-2 ring ring-purple-600 px-2 rounded-3xl text-xs font-semibold">
          {badge}
        </p>
      )}
      <img
        className="h-6 w-6 group-hover:animate-pulse animation-duration-1000"
        src={imgSrc}
        alt="skill"
      />
      <div
        className={`${badge && "group-hover:opacity-60 transition-opacity"}`}
      >
        <h1>{name}</h1>
      </div>
    </div>
  );
}
