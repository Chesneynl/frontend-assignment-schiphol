import { twMerge } from "tailwind-merge";

type Props = {
    href: string;
    className?: string;
    children: React.ReactNode;
};

function Link({ children, href, className }: Props) {
    return (
        <a
            href={href}
            className={twMerge(
                "border-radius mt-2 flex h-14 w-full flex-grow-0 items-center justify-center rounded-md bg-gradient-flights text-center text-white transition-opacity",
                className ?? ""
            )}
        >
            {children}
        </a>
    );
}

export default Link;
