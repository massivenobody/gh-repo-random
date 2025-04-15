import { LanguageOption } from "@/types/language";
import { useEffect, useMemo, useState } from "react";

interface LanguageColors {
  [key: string]: {
    color: string;
  };
}

function useLanguageData() {
  const [error, setError] = useState<string | null>(null);
  const [languages, setLanguages] = useState<LanguageOption[]>([]);
  const [colors, setColors] = useState<LanguageColors>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const [languagesResponse, colorsResponse] = await Promise.all([
          fetch(
            "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json"
          ),
          fetch(
            "https://raw.githubusercontent.com/ozh/github-colors/refs/heads/master/colors.json"
          ),
        ]);

        if (!languagesResponse.ok) {
          throw new Error(
            "Failed to fetch languages, status: " + languagesResponse.status
          );
        }

        if (!colorsResponse.ok) {
          throw new Error(
            "Failed to fetch colors, status: " + colorsResponse.status
          );
        }

        const languagesData = await languagesResponse.json();
        const filteredLanguages = languagesData.filter(
          (language: LanguageOption, index: number, self: LanguageOption[]) =>
            index === self.findIndex((l) => l.value === language.value) &&
            language.value !== ""
        );

        const colorsData = await colorsResponse.json();

        setLanguages(filteredLanguages);
        setColors(colorsData);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unknown error while fetching data"
        );
      }
    }
    fetchData();
  }, []);

  const processedLanguages = useMemo(() => {
    return languages.map((language) => {
      const color = colors[language.value]?.color || "black";
      return {
        ...language,
        color,
      };
    });
  }, [languages, colors]);

  return { languages: processedLanguages, error };
}

export default useLanguageData;
