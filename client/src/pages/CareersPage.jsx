import { useTheme } from '../context/ThemeContext'

export default function CareersPage(){
	const { isDark } = useTheme()
	return (
		<div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16">
			<h1 className="serif text-5xl">Careers</h1>
			<p className="mt-4 text-brick-muted">Join Elite PriMa Homes Ltd — we're hiring field agents and media.</p>
			<div className={`mt-8 rounded-[24px] p-8 border ${isDark? 'bg-[#071726] border-white/10 text-white' : 'bg-white border-black/5'}`}>Send CV to hello@eliteprimahomes.com</div>
		</div>
	)
}