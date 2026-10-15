export default function Badge({ children }: { children: string }) {
  return <span className="inline-block rounded-full bg-brand/10 px-2.5 py-1 text-[11.5px] font-bold text-brand">{children}</span>;
}
