import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

type ActionItems = {
    title: string;
    description: string;
    action: string;
}

function ActionItems({ title, description, action }: ActionItems) {
  return (
    <Card className="w-60 border-none bg-amber-300">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Button asChild className="bg-slate-400 text-white font-bold">
          <Link href="/">{action} Task</Link>
        </Button>
      </CardHeader>
    </Card>
  );
}

export default ActionItems;
