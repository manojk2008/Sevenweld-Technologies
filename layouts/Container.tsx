import type {
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef,
} from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function Container<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...rest
}: ContainerProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={`mx-auto max-w-[1440px] px-8 ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}