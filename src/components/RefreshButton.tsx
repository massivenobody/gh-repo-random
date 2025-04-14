import { Button } from "./ui/button";

function RefreshButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
        className="mt-4 cursor-pointer w-full h-12 text-lg font-semibold"
        onClick={onClick}
    >
        Refresh
    </Button>
  )
}

export default RefreshButton;