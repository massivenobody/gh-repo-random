import Select from 'react-select';

const LanguageSelector = ({languages}: {languages: {label: string, value: string}[]}) => {
  return <Select
    options={languages}
    placeholder="Select a language..."
  />;
};

export default LanguageSelector;