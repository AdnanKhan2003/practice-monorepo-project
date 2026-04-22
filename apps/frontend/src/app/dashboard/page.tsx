import Breadcrumbs from "@/components/dashboard/Breadcrumbs";
import ActionItems from "@/components/dashboard/action-items";

function Dashboard() {
  const tasks = [
    {
      id: 1,
      title: "Create",
      description: "This is done to Create a Task",
      action: "Create",
    },
    {
      id: 1,
      title: "Read",
      description: "This is done to Read a Task",
      action: "Read",
    },
    {
      id: 1,
      title: "Update",
      description: "This is done to Update a Task",
      action: "Update",
    },
    {
      id: 1,
      title: "Delete",
      description: "This is done to Delete a Task",
      action: "Delete",
    },
  ];

  return (
    <>
      <Breadcrumbs />
      <section className="w-full">
        <h1 className="max-w-[1440px] mx-auto mb-4 font-bold text-2xl">
          Actions
        </h1>

        <div className="flex items-center justify-start max-w-[1440px] mx-auto gap-8">
          {tasks.map((t) => (
            <ActionItems
              key={t.id}
              title={t.title}
              description={t.description}
              action={t.action}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Dashboard;
