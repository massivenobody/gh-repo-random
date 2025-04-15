import { useState } from "react";
import { LanguageOption } from "@/types/language";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
} from "./ui/command";

interface Props {
  languages: LanguageOption[];
  selectedLanguage: LanguageOption | null;
  onLanguageChange: (option: LanguageOption | null) => void;
}

const LanguageSelector = ({
  languages,
  selectedLanguage,
  onLanguageChange,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const button = (
    <Button variant="outline" className="w-full justify-start">
      {selectedLanguage ? selectedLanguage.title : "Select a Language"}
    </Button>
  );

  function onSelect(language: string) {
    const selectedLanguage = languages.find((l) => l.value === language);
    if (selectedLanguage) {
      onLanguageChange(selectedLanguage);
      setIsOpen(false);
    }
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>{button}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Select a Language</DrawerTitle>
        </DrawerHeader>
        <div className="mt-4 border-t">
          <LanguageList languages={languages} onSelect={onSelect} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

function LanguageList({
  languages,
  onSelect,
}: {
  languages: LanguageOption[];
  onSelect: (language: string) => void;
}) {
  const items = languages.map((language) => (
    <CommandItem key={language.value} onSelect={() => onSelect(language.value)}>
      {language.title}
    </CommandItem>
  ));

  return (
    <Command>
      <CommandInput placeholder="Search language..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {items}
      </CommandList>
    </Command>
  );
}

export default LanguageSelector;
