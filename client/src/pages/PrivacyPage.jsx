import { useTheme } from '../context/ThemeContext'

export default function PrivacyPage(){
	const { isDark } = useTheme()
	return (
		<div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16">
			<h1 className="serif text-4xl">Privacy Policy</h1>
			<p className="mt-4 max-w-2xl text-sm leading-6 text-brick-muted">Elite PriMa Homes Ltd respects your privacy. We only collect name, phone, and viewing preferences for property services.</p>
		</div>
	)
}