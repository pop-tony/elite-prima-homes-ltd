import { useTheme } from '../context/ThemeContext'

export default function Admin(){ 
	const { isDark } = useTheme()
	return (
		<div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16">
			<h1 className="serif text-4xl">Admin</h1>
			<p className="mt-4 text-brick-muted">Elite PriMa Homes Ltd — Admin Dashboard (protected)</p>
			<div className={`mt-8 rounded-[24px] p-8 border ${isDark? 'bg-[#071726] border-white/10 text-white' : 'bg-white border-black/5'}`}>Add / Edit properties here — connect to your data/properties.js</div>
		</div>
	)
}