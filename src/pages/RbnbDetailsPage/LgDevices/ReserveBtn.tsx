import { useThemeStore } from '@/state/ThemeStore'

type Props = {}

export function ReserveBtn({}: Props) {

  const {theme} = useThemeStore();

  return (
    <button className={`text-white px-4 py-2 flex items-center justify-center rounded-lg w-full my-4 transition-all duration-100 hover:shadow-lg active:scale-95`} style={{background: theme.iconicColor}}>Reserve</button>
  )
}