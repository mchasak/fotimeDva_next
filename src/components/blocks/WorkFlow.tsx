import { WorkFlowProps } from '@/types/blocks'
import Icon from './ui/Icon'

export const WorkFlow = ({ title, step }: Readonly<WorkFlowProps>) => {
  return (
    <div className="mt-[60px] h-full w-full bg-lightBackground px-3 md:mt-[85px] md:px-12 lg:mt-[120px] lg:px-28">
      <div className="container mx-auto mt-[60px] max-w-[1200px] px-3 py-10 md:mt-[85px] md:px-12 md:py-[60px] lg:mt-[120px] xl:px-0">
        <div>
          <span className="text-lg font-semibold text-text md:text-2xl">
            {title}
          </span>
        </div>
        <div className="mt-6 flex justify-between md:mt-10 md:flex-row md:gap-5 ">
          {step.map((item) => (
            <div
              className="flex max-w-[260px] flex-col text-text"
              key={item.title}
            >
              <Icon icon={item.icon} className="h-[62px] w-[62px]" />
              <span className="my-2 text-2xl font-semibold">{item.title}</span>
              <span className="mt-auto font-semibold opacity-50">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
