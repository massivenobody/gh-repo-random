import { LanguageOption } from "@/types/language";

const languages = await fetch('https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json')
    .then(res => res.json())
    .then(data => data.map((language: {title: string, value: string}) => ({
        label: language.title,
        value: language.value,
    }))).then(languages => languages.filter((language: LanguageOption, index: number, self: LanguageOption[]) => 
        index === self.findIndex((l) => l.value === language.value)
            && language.value !== ""
    ));

export default languages;