import { useThemeStore } from "@/state/ThemeStore";

type Props = {};

export function HostInfoSection({}: Props) {

  const {theme} = useThemeStore();

  return (
    <div className="flex py-4">
      <div className="w-12 h-12 mr-4 rounded-full bg-stone-400"></div>
      <div>
        <h1 className={`${theme.textMain} font-semibold`}>
          Host is Lorem Ipsum
        </h1>
        <h1 className={`${theme.textSecondary}`}>X years hosting</h1>
      </div>
    </div>
  );
}
