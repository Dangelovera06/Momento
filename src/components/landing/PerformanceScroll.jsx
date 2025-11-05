import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function PerformanceScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll titleComponent={<></>}>
        <img
          src="/Momoento Perfom.png"
          alt="Performance Results"
          className="mx-auto rounded-2xl object-cover h-full w-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

