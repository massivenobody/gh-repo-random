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
import { Command, CommandInput, CommandList } from "./ui/command";

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

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>{button}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Select a Language</DrawerTitle>
        </DrawerHeader>
        <div className="mt-4 border-t">
          <LanguageList />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

function LanguageList() {
  return (
    <Command>
      <CommandInput placeholder="Search language..." />
      <CommandList></CommandList>
    </Command>
  );
}

export default LanguageSelector;
