import Select from 'react-select';

interface LanguageOption {
  label: string;
  value: string;
}

interface Props {
  languages: LanguageOption[];
  selectedLanguage: LanguageOption | null;
  onLanguageChange: (option: LanguageOption | null) => void;
}

const LanguageSelector = ({languages, selectedLanguage, onLanguageChange}: Props) => {
  return <Select
    options={languages}
    placeholder="Select a language..."
    value={selectedLanguage}
    onChange={(option) => {
      onLanguageChange(option);
    }}
  />;
};

export default LanguageSelector;