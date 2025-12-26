import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:justify-between md:gap-10">
      <div className="flex-1 space-y-6">
        <h1 className="inline-block text-5xl font-bold leading-tight tracking-tight text-primary lg:text-6xl xl:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="text-2xl leading-relaxed text-muted-foreground lg:text-3xl">{description}</p>
        )}
      </div>
    </div>
  );
}
