import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LanguageOption } from "@/types/language";

interface Props {
  languages: LanguageOption[];
  onLanguageChange: (option: LanguageOption | null) => void;
}

const LanguageSelector = ({languages, onLanguageChange}: Props) => {
  return (
    <Select onValueChange={(value) => onLanguageChange(languages.find(lang => lang.value === value) || null)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a language..." />
      </SelectTrigger>
      <SelectContent className="bg-white max-h-[300px]">
        {languages.map(lang => {
          const { label, value } = lang;
          return (
            <SelectItem
              value={value}
              key={value}
            >
              {label}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
};

export default LanguageSelector;