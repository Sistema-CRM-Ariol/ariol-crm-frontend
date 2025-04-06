import { getPaymentsOverviewData } from "@/services/charts.services";
import { PaymentsOverviewChart } from "./chart";
import { cn } from "@heroui/theme";
import { standardFormat } from "@/lib/helpers";

type PropsType = {
  timeFrame?: string;
  className?: string;
};

export async function PaymentsOverview({
  timeFrame = "monthly",
  className,
}: PropsType) {
  const data = await getPaymentsOverviewData(timeFrame);

  return (
    <div
      className={cn(
        "grid gap-2 rounded-[10px]shadow-1 bg-white p-8 border border-gray-300",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2>Resumen de Ventas</h2>

        {/* <PeriodPicker defaultValue={timeFrame} sectionKey="payments_overview" /> */}
      </div>

      <PaymentsOverviewChart data={data} />

      <dl className="grid divide-stroke text-center dark:divide-dark-3 sm:grid-cols-2 sm:divide-x [&>div]:flex [&>div]:flex-col-reverse [&>div]:gap-1">
        <div className="dark:border-dark-3 max-sm:mb-3 max-sm:border-b max-sm:pb-3">
          <dt className="text-xl font-bold text-dark dark:text-white">
            ${standardFormat(data.received.reduce((acc, { y }) => acc + y, 0))}
          </dt>
          <dd className="font-medium dark:text-dark-6">Received Amount</dd>
        </div>

        <div>
          <dt className="text-xl font-bold text-dark dark:text-white">
            ${standardFormat(data.due.reduce((acc, { y }) => acc + y, 0))}
          </dt>
          <dd className="font-medium dark:text-dark-6">Due Amount</dd>
        </div>
      </dl>
    </div>
  );
}
