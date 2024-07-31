type Props = {
    label: string;
    value: string;
    name: string;
    required?: boolean;
    options: {
        value: string;
        label: string;
    }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select({ label, name, required, options, value, onChange }: Props) {
    return (
        <div className="w-full">
            <label htmlFor={name} className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="border w-full h-14 rounded-sm px-3 py-2 border-grey-scattered focus:border-schiphol-blue"
                required={required}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
