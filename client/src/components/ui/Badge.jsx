
export default function Badge({children, tone='light'}){
  const styles = tone==='dark' ? "bg-brick-black text-white" : "bg-white/90 backdrop-blur text-brick-black border border-black/5"
  return <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-black tracking-[0.2em] uppercase shadow-sm ${styles}`}>{children}</span>
}
