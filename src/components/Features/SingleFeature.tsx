import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp text-center" data-wow-delay=".15s">
        <div className="flex justify-center ">
          <div className="mb-3 h-[70px] w-[70px] flex items-center justify-center text-primary rounded-full bg-black">
            {icon}
          </div>
        </div>
        <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
