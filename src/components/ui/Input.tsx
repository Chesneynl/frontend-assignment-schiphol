type Props = {
    label: string;
    value: string;
    placeholder: string;
    name: string;
    required?: boolean;
    type?: 'text';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, name, placeholder, type = 'text', required, value, onChange }: Props) {
    return (
        <div className="w-full">
            <label htmlFor={name} className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="border w-full h-14 rounded-sm px-3 py-2 border-grey-scattered focus:border-schiphol-blue"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}

export default Input;
