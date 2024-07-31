import { twMerge } from 'tailwind-merge';

type Props = {
    disabled?: boolean;
    children: React.ReactNode;
    type?: 'submit';
};

function Button({ children, disabled, type = 'submit' }: Props) {
    return (
        <button
            type={type}
            className={twMerge(
                'bg-gradient-flights mt-2 w-full h-14 text-white border-radius rounded-sm flex-grow-0',
                disabled && 'opacity-50 cursor-not-allowed',
            )}
        >
            {children}
        </button>
    );
}

export default Button;
