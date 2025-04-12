const languagues = await fetch('https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json')
    .then(res => res.json())
    .then(data => data.map((language: {title: string, value: string}) => ({
        label: language.title,
        value: language.value,
    })));

export default languagues;