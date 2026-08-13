import { useTheme } from '../context/ThemeContext'

export default function BlogPage(){
	const { isDark } = useTheme()
	return (
		<div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16">
			<h1 className="serif text-5xl">Journal</h1>
			<div className="mt-10 grid gap-6 md:grid-cols-3">
				{[1,2,3].map(i=>
					<div key={i} className={`rounded-[24px] overflow-hidden border p-0 ${isDark? 'bg-[#071726] border-white/10 text-white' : 'bg-white border-black/5'}`}>
						<div className="h-40 bg-brick-offwhite" />
						<div className="p-5"><h3 className="font-bold">How to verify land title in Accra — {i}</h3><p className="mt-2 text-sm text-brick-muted">Guide by Elite PriMa Homes Ltd</p></div>
					</div>
				)}
			</div>
		</div>
	)
}