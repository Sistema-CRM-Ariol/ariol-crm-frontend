
import { getDevicesUsedData } from "@/services/charts.services";
// import { PeriodPicker } from '@/components/period-picker';
import { DonutChart } from "./Chart";
import { cn } from "@heroui/theme";

type PropsType = {
  timeFrame?: string;
  className?: string;
};

export async function SalesReportDonut({
  timeFrame = "monthly",
  className,
}: PropsType) {
  const data = await getDevicesUsedData(timeFrame);

  return (
    <div
      className={cn(
        "grid grid-cols-1 p-8 gap-9 rounded-[10px] bg-white border border-gray-300",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2>Reporte de Salidas</h2>

        {/* <PeriodPicker defaultValue={timeFrame} sectionKey="used_devices" /> */}
      </div>

      <div className="grid place-items-center">
        <DonutChart data={data} />
      </div>
    </div>
  );
}
