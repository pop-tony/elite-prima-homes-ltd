
export default function Button({children, variant='primary', className='', ...props}){
  const base="inline-flex items-center justify-center rounded-full font-bold text-[11px] tracking-[0.18em] uppercase transition-all active:scale-[0.98]"
  const styles = {
    primary: "bg-[#081714] text-white hover:bg-[#B78A4A] px-6 py-3.5",
    ghost: "bg-white/70 backdrop-blur border border-black/5 hover:bg-white px-6 py-3.5",
    gold: "bg-[#B78A4A] text-white hover:bg-[#081714] px-6 py-3.5"
  }
  return <button className={`${base} ${styles[variant]} ${className}`} {...props}>{children}</button>
}
